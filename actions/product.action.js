"use server"

import { connect } from "@/models/mongodb";
import Product from "@/models/product.model";
import { revalidatePath } from "next/cache";
import { uploadImageToNodejs } from "./image.action";


export async function createProduct(data) {
    try {
        await connect()
        console.log("data : data :", data);
        const result = await Product.create(data)
        console.log("result :", result);
        revalidatePath("/dashboard/products")
        return { success: true, status: 201 };

    } catch (error) {
        console.log(error);
        return { success: false, status: 404, error }
    }
}

export const CreateMedic = async (formData) => {
    if (!formData) {
        return { success: false, status: 400, msg: "Validation error. Check the provided data.", };
    }
    try {
        const name = formData.get('name');
        const description = formData.get('description');
        const price = formData.get('price');
        const type = formData.get('type');
        const idPharmacy = formData.get('idPharmacy');

        if (!name) {
            throw new Error('Name is required.');
        }

        // const url = await AddImageToPinata(formData, 2592000)
        const { imageUrl, base64Placeholder } = await uploadImageToNodejs(formData, "/medications")
        const result = await Product.create({ name, description,type, price: Number(price), idPharmacy, imageUrl, base64Placeholder, status: "pending" });
        revalidatePath("/dashboard/products")

        return { success: true, status: 201, result, msg: "Product created successfully!", };
    } catch (error) {
        console.error("Error creating Product:", error);
        if (error.code === 11000) {
            return { success: false, status: 409, msg: "Product with this name already exists!", error: error.message, };
        }
        if (error.name === "ValidationError") {
            return { success: false, status: 400, msg: "Validation error. Check the provided data.", error: error.message, };
        }
        return {
            success: false, status: 500, msg: "Server error. Please try again later.", error: error.message,
        };
    }
};

