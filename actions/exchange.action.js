"use server"

import { connect } from "@/models/mongodb";
import Exchange from "@/models/exchange.model";
import { revalidatePath } from "next/cache";
import { uploadImageToNodejs } from "./image.action";



export async function addExchange(data) {
    try {
        await connect()
        console.log("data : data :",data);
        const result = await Exchange.create(data)
        console.log("result :",result);
        return { success: true, status: 201 };
    } catch (error) {
        console.log(error);
        return { success: false, status: 404, error }
    }
}

