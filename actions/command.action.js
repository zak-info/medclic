"use server"

import { connect } from "@/models/mongodb";
import Command from "@/models/command.model";
import { revalidatePath } from "next/cache";
import { uploadImageToNodejs } from "./image.action";
import User from "@/models/user.model";
import mongoose from "mongoose";




export const CreateCom = async (formData) => {
    if (!formData) {
        return { success: false, status: 400, msg: "Validation error. Check the provided data.", };
    }
    try {
        // const name = formData.get('name');
        const description = formData.get('description');
        // const price = formData.get('price');
        const idPharmacy = formData.get('idPharmacy');
        const idUser = formData.get('idUser');

        if (!idUser) {
            throw new Error('Name is required.');
        }

        // const url = await AddImageToPinata(formData, 2592000)
        const { imageUrl, base64Placeholder } = await uploadImageToNodejs(formData, "/medications")
        const result = await Command.create({description, idUser, idPharmacy, imageUrl, base64Placeholder, status: "pending" });
        revalidatePath("/dashboard/commands")

        return { success: true, status: 201, result, msg: "Command created successfully!", };
    } catch (error) {
        console.error("Error creating Command:", error);
        if (error.code === 11000) {
            return { success: false, status: 409, msg: "Command with this name already exists!", error: error.message, };
        }
        if (error.name === "ValidationError") {
            return { success: false, status: 400, msg: "Validation error. Check the provided data.", error: error.message, };
        }
        return {
            success: false, status: 500, msg: "Server error. Please try again later.", error: error.message,
        };
    }
};


export const RefuseCom = async (idCommand, idPharmacy) => {
    if (!idCommand || !idPharmacy) {
        return {
            success: false,
            status: 400,
            msg: "Validation error. Check the provided data.",
        };
    }

    try {
        await connect();

        const command = await Command.findById(idCommand);
        if (!command) {
            return {
                success: false,
                status: 404,
                msg: "Command not found.",
            };
        }

        // Add current pharmacy to refuses list
        command.refuses = [...(command?.refuses || []), new mongoose.Types.ObjectId(idPharmacy)];

        // Get user info and location
        const user = await User.findById(idPharmacy);
        if (!user || !user?.data?.long_lat) {
            return {
                success: false,
                status: 404,
                msg: "User not found or missing geolocation.",
            };
        }

        const [userLng, userLat] = user?.data?.long_lat;

        // Find closest pharmacy not in refuses list
        const pharmacies = await User.find({
            type: "pharmacy",
            _id: { $nin: command?.refuses },
            "data.long_lat": { $exists: true },
        });

        // Manual nearest pharmacy calculation
        let closest = null;
        let minDist = Infinity;

        pharmacies.forEach(pharmacy => {
            const [lng, lat] = pharmacy?.data?.long_lat;
            const dist = getDistanceFromLatLonInKm(userLat, userLng, lat, lng);
            if (dist < minDist) {
                minDist = dist;
                closest = pharmacy;
            }
        });

        if (closest) {
            command.idPharmacy = closest._id;
        } else {
            command.idPharmacy = null;
        }

        await command.save();
        revalidatePath("/dashboard/freecom");
        revalidatePath("/dashboard/orders");
        revalidatePath("/dashboard/commands");

        return {
            success: true,
            status: 200,
            result: command,
            msg: closest
                ? "Command reassigned to closest pharmacy."
                : "No nearby pharmacy found. Pharmacy removed from command.",
        };
    } catch (error) {
        return {
            success: false,
            status: 500,
            msg: "Server error. Please try again later.",
            error: error.message,
        };
    }
};

// Helper: Haversine formula
function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    const R = 6371; // Earth radius (km)
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

function deg2rad(deg) {
    return deg * (Math.PI / 180);
}


