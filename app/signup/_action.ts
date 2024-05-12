'use server'
import { revalidatePath } from "next/cache";
import { create } from "@/utils/lib";

export async function signup(form: FormData) {
    'use server'

    // extract data from form
    const email = form.get('email') as string
    const password = form.get('password') as string
    const passwordConfirm = form.get('passwordConfirm') as string
    const firstName = form.get('firstName') as string
    const lastName = form.get('lastName') as string
    const country = form.get('country') as string
    const phoneNumber = form.get('phoneNumber') as string
    const ceaNumber = form.get('ceaNumber') as string | null
    const agency = form.get('agency') as string | null
    const license = form.get('license') as string | null
    const role = form.get('role') as string

    const userObj = {
        email,
        password,
        passwordConfirm,
        firstName,
        lastName,
        country,
        phoneNumber,
        ceaNumber,
        agency,
        license,
        role
    }

    // call user object
    try {
        await create(userObj)
        return {success:true}
    } catch (error:any) {
        return {success:false, error:error.message}
    }

}