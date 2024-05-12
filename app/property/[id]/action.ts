'use server'

import { ShortlistController } from "@/utils/controllers/user";
import { PropertyInterface } from "@/utils/demo";
import { getSession } from "@/utils/auth";


export async function shortlist(propertyId: string) {
    const session = await getSession()

    if (!session) {
        return { success: false, message: "Please login first" }
    }

    const email = session.email

    const shortlistController = new ShortlistController()
    const result = await shortlistController.shortlist(email, propertyId)

    if (result) {
        return { success: true, message: "Property added to shortlist" }
    } else {
        return { success: false, message: "Failed to add property to shortlist" }
    }
    
}