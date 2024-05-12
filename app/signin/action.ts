'use server'

import prisma from "@/utils/prisma";
import { comparePassword } from "@/utils/hash";
import { getSession } from "@/utils/auth";
import { redirect } from "next/navigation";

export async function login(formData: FormData) {

    try {
        const email = formData.get('email') as string
        const password = formData.get('password') as string

        const user = await prisma.user.findUnique({
            where: {
                email
            },
            include: {
                profile: {
                    select: {
                        role: true
                    }
                }
            }
        })

        if (!user) {
            throw new Error("User not found")
        }

        const passwordMatch = await comparePassword(password, user.passwordHash)

        if (!passwordMatch) {
            throw new Error("Password does not match")
        }

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
        // redirect('/buy')
        return { success: true }
    } catch (error: any) {
        console.log(error);

        return { success: false }
    }


}