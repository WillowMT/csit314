'use server'
import * as controller from '@/utils/controllers/globalControllers'

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



export async function updateRole(prev:any, form:FormData) {
    console.log('holka');
    const email = form.get('email') as string
    const isActive = form.get('isActive') as string
    
    return {success:true}
}
