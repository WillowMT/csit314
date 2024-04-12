'use server'

import prisma from "@/utils/prisma";
import { comparePassword } from "@/utils/hash";

export async function checkUser(previousState:any, form: FormData) {

    const email = form.get('email') as string
    const password = form.get('password') as string
    
    const user = await prisma.user.findUnique({
        where:{
            email: email
        }
    })

    if (!user) {
        return {success:false, message: "User not found"}
    }

    const passwordMatch = await comparePassword(password, user.passwordHash)

    if (!passwordMatch) {
        return {success:false, message: "Incorrect password"}
    }

    return {success:true, message: `User ${user.id} logged in successfully!`}
}