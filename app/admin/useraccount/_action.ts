'use server'

import * as globalController from '@/utils/controllers/globalControllers'
import { encryptPassword } from '@/utils/hash'

import prisma from "@/utils/prisma"
import { revalidatePath } from "next/cache"

export async function createUser(prev:any, form:FormData) {
    const email = form.get('email') as string
    const password = form.get('password') as string
    const passwordConfirm = form.get('passwordConfirm') as string
    const firstName = form.get('firstName') as string
    const lastName = form.get('lastName') as string
    const country = form.get('country') as string
    const phoneNumber = form.get('phoneNumber') as string
    const ceaNumber = form.get('ceaNumber') as string | undefined
    const agency = form.get('agency') as string | undefined
    const license = form.get('license') as string | undefined
    const role = form.get('role') as string

    // check if password match

    if (password !== passwordConfirm) {
        return {success:false, message:'Passwords do not match'}
    }

    // create hash

    const passwordHash = await encryptPassword(password)

    const userObj = {
        email,
        passwordHash,
        firstName,
        lastName,
        country,
        phoneNumber,
        ceaNumber,
        agency,
        license,
        role
    }

    console.log(userObj);
    
    // pass object to controller
    const result = await globalController.createUserAccController.createUserAccount(userObj)

    revalidatePath('/admin/useraccount')

    return result
   
}