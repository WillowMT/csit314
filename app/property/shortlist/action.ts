'use server'


export async function submit(prev: any, formData: FormData) {

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


}