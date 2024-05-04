'use server'

import prisma from "@/utils/prisma";
import { getSession } from "@/utils/auth";
import { revalidatePath } from "next/cache";
import { editAccountInfo } from "@/utils/controller"

// form to update user info in db

export async function submit(prev: any, formData: FormData) {

    const email = formData.get("email") as string;
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const phoneNumber = formData.get("phoneNumber") as string;
    const agency = formData.get("agency") as string | ""
    const license = formData.get("license") as string | ""
    const ceaNumber = formData.get("ceaNumber") as string | ""

    const userObj = {
        email,firstName, lastName, phoneNumber, ceaNumber, agency, license, country:""
    }

    // update user info in db

    const result = await editAccountInfo.saveInfoChange(userObj)

    return result

}