'use server'
import * as globalController from '@/utils/controllers/globalControllers'

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


export async function createRole(prev:any, form:FormData) {
    const role = form.get('role') as string

    return await globalController.createUserProfileController.recordUserProfile(role)
}



export async function updateRole(prev:any, form:FormData) {

    const role = form.get('role') as string
    const newrole = form.get('newrole') as string
    const activated = form.get('activated') as string

    return await globalController.updateUserProfileController.saveRoleName(role, newrole, activated === 'true')
}
