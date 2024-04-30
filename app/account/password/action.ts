'use server'

import prisma from "@/utils/prisma"
import { comparePassword, encryptPassword } from "@/utils/hash";
import { getSession } from "@/utils/auth";

export async function submit(prev: any, formData: FormData) {

    try {

        const { email } = await getSession()

        const user = await prisma.user.findUnique({
            where: {
                email: email
            }
        })

        if (!user) return { success: false, message: "User not found." }


        const oldPassword = formData.get("oldPassword") as string;
        const newPassword = formData.get("newPassword") as string;
        const repeatPassword = formData.get("newPassword2") as string;



        // check if old password is true

        const isPasswordCorrect = await comparePassword(oldPassword, user.passwordHash)

        if (!isPasswordCorrect) return { success: false, message: "Old password is incorrect." }

        // check if new password is the same as repeat password

        if (newPassword !== repeatPassword) return { success: false, message: "Passwords do not match." }

        // change password in db

        const hash = await encryptPassword(newPassword);

        await prisma.user.update({
            where: {
                email: email
            },
            data: {
                passwordHash: hash
            }
        })

        return { success: true, message: "Password updated" }


    } catch (e) {
        return { success: false, message: "Something went wrong." }
    }

}