'use server'

import { CreateUserAccController, EditAccountInfoController, SuspendUserAccountController } from '@/utils/controllers/user'
import { encryptPassword } from '@/utils/hash'

import prisma from "@/utils/prisma"
import { revalidatePath } from "next/cache"
import { redirect } from 'next/navigation'

//showdis
export async function createUser(form:FormData) {
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
    
    try {
        const createUserAccController = new CreateUserAccController()
        const result = await createUserAccController.createUserAccount(userObj)
        return {success:true, message:'User created'}
    } catch (error) {
        return {success:false, message:`User creation failed`}
    }
   
}


export async function suspendUser(prev:any, formData:FormData) {
    'use server'
    const email = formData.get('email') as string

    const suspendUserAccountController = new SuspendUserAccountController()

    return await suspendUserAccountController.suspendUserAccount(email)
}

export async function editUser(prev:any, formData: FormData) {
    const firstName = formData.get('firstName') as string
    const lastName = formData.get('lastName') as string
    const phoneNumber = formData.get('phoneNumber') as string
    const email = formData.get('email') as string
    const agency = formData.get('agency') as string | undefined
    const license = formData.get('license') as string | undefined
    const ceaNumber = formData.get('ceaNumber') as string | undefined

    const editAccountInfoController = new EditAccountInfoController()
    return await editAccountInfoController.saveInfoChange({firstName, lastName, phoneNumber, email, agency, license, ceaNumber})

}


export async function push(form:FormData) {
    const search = form.get('search') as string
    redirect(`/admin/useraccount/${search}`)
}