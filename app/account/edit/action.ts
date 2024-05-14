'use server'

import { EditAccountInfoController } from "@/utils/controllers/user";
import { getSession } from "@/utils/auth";


// form to update user info in db

export async function submit(prev: any, formData: FormData) {

    const session = await getSession()

    const email = formData.get("email") as string;
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const phoneNumber = formData.get("phoneNumber") as string;
    const agency = formData.get("agency") as string | ""
    const license = formData.get("license") as string | ""
    const ceaNumber = formData.get("ceaNumber") as string | ""
    const country=formData.get("country") as string | ""

    const userObj = {
        email:session.email,firstName, lastName, phoneNumber, ceaNumber, agency, license, country
    }

    // console.log(userObj);

    // return

    // update user info in db

    const editAccountInfoController = new EditAccountInfoController()

    const result = await editAccountInfoController.saveInfoChange(userObj)

    session.firstName = firstName
    session.lastName = lastName
    session.phoneNumber = phoneNumber
    session.license = license
    session.ceaNumber = ceaNumber
    session.agency = agency
    session.country=country

    await session.save()

    return result

}