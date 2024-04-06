'use server'

import prisma from "@/utils/prisma"
import { revalidatePath } from "next/cache"

export async function deleteUser(form:FormData) {
    const id = form.get('id') as string
    await prisma.user.delete({
        where: {
            id: id
        }
    })

    revalidatePath('/admin')

}

export async function setRole(id:string, role:string) {
    await prisma.user.update({
        where: {
            id: id
        },
        data: {
            role: role as "USER" | "AGENT" | "ADMIN"
        }
    })
}