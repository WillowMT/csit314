'use server'

import { ShortlistController } from "@/utils/controllers/user"
import prisma from "@/utils/prisma"
import { CreatePropertyListingController } from "@/utils/controllers/property"
import { getSession } from "@/utils/auth"


export async function submit(formData: FormData) {

        const session = await getSession()

        const name = formData.get("name") as string
        const address = formData.get("address") as string
        const description = formData.get("description") as string
        const bedroom = formData.get("bedroom") as string
        const bathroom = formData.get("bathroom") as string
        const leaseYear = formData.get("leaseYear") as string
        const squareFt = formData.get("squareFt") as string
        const builtYear = formData.get("builtYear") as string
        const price = formData.get("price") as string
        const imageUrl = formData.get("imageUrl") as string
        const propertyType = formData.get("propertyType") as string
        const ownerEmail = formData.get("ownerEmail") as string

        const createPropertyListingController = new CreatePropertyListingController()
        return await createPropertyListingController.RecordPropertyDetails(session.email, ownerEmail, { name, address, description, bedroom: parseInt(bedroom), bathroom: parseInt(bathroom), leaseYear: parseInt(leaseYear), squareFt: parseInt(squareFt), builtYear: parseInt(builtYear), price: parseInt(price), imageUrl, propertyType,onSale: true, activated: true})


}