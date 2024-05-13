'use server'

import { ShortlistController } from "@/utils/controllers/user";
import { PropertyInterface } from "@/utils/demo";
import { getSession } from "@/utils/auth";


export async function shortlist(propertyId: string) {
    const session = await getSession()

    if (!session.email) {
        return { success: false, message: "Please login first" }
    }

    const email = session.email

    const shortlistController = new ShortlistController()

    try {
        const result = await shortlistController.shortlist(email, propertyId)
        return { success: true, message: "Property added to shortlist" }
        
    } catch (error) {
        return { success: false, message: "Failed to add property to shortlist" }
    }

}