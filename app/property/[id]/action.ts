'use server'

import { ShortlistController } from "@/utils/controllers/user";
import { PropertyInterface } from "@/utils/demo";
import { getSession } from "@/utils/auth";
import { CalculateMortgageController } from "@/utils/controllers/property";


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

export async function calculateMonthlyPayment(prev:any, form: FormData) {
    
    const calculateMortgageController = new CalculateMortgageController()

    const price = parseInt(form.get("price") as string)
    const interest = parseInt(form.get("interest") as string)
    const years = parseInt(form.get("years") as string)

    console.log({
        price,
        interest,
        years
    });
    
    
    const result = await calculateMortgageController.calculateMortgage({price, loantermyears:years, monthlyinterest:interest})

    return result
    
}