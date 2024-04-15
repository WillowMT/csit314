'use server'

import prisma from "@/utils/prisma";
import { getSession } from "@/utils/actions";
import { revalidatePath } from "next/cache";

// form to update user info in db

export async function submit(prev: any, formData: FormData) {

    const email = formData.get("email") as string;

    // update user info in db

    try {

        const session  = await getSession()

        const result = await prisma.user.update({
            where: {
                email: email
            },
            data: {
                firstName: formData.get("firstName") as string,
                lastName: formData.get("lastName") as string,
                phoneNumber: formData.get("phoneNumber") as string
            }
        })

        session.firstName = formData.get("firstName") as string
        session.lastName = formData.get("lastName") as string
        session.phoneNumber = formData.get("phoneNumber") as string

        session.save()

        revalidatePath('/account/personal')


        return { success: true, message: "User info updated" };

    } catch (e) {
        return { success: false, message: "Error updating user info" };
    }

}