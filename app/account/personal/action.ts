'use server'

import prisma from "@/utils/prisma";
import { getSession } from "@/utils/actions";
import { revalidatePath } from "next/cache";
import { EdiAccountInfoController } from "@/utils/controller"

// form to update user info in db

export async function submit(prev: any, formData: FormData) {

    const email = formData.get("email") as string;
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const phoneNumber = formData.get("phoneNumber") as string;
    const agency = formData.get("agency") as string | null
    const license = formData.get("license") as string | null
    const jobDesignation = formData.get("jobDesignation") as string | null
    const ceaNumber = formData.get("ceaNumber") as string | null

    const userObj = {
        email,firstName, lastName, phoneNumber, ceaNumber, agency, license, jobDesignation
    }

    // update user info in db

    const result = await EdiAccountInfoController.SaveInfoChange(userObj)

    return result

}