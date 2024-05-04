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
