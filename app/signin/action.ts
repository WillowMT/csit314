'use server'

import prisma from "@/utils/prisma";
import { comparePassword } from "@/utils/hash";
import { getSession } from "@/utils/auth";
import { redirect } from "next/navigation";
import { LoginAccountController } from "@/utils/controllers/user";

export async function login(formData: FormData) {

    try {
        const email = formData.get('email') as string
        const password = formData.get('password') as string

        const loginAccountController = new LoginAccountController()
        const user = await loginAccountController.getUser(email, password)

        const session = await getSession()


        session.email = user.email
        session.firstName = user.firstName
        session.lastName = user.lastName
        session.country = user.country
        session.phoneNumber = user.phoneNumber
        session.activated = user.activated
        session.role = user.profile?.role || ""
        session.activated = user.activated
        session.agency = user.agency || ""
        session.license = user.license || ""
        session.ceaNumber = user.ceaNumber || ""

        await session.save()

        return { success: true }
    } catch (error: any) {
        console.log(error);
        return { success: false }
    }


}