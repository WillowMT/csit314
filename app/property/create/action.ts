'use server'


export async function submit(prev: any, formData: FormData) {

    try {

        // const name = formData.get("name") as string
        // const address = formData.get("address") as string
        // const description = formData.get("description") as string
        // const bedroom = formData.get("bedroom") as string
        // const bathroom = formData.get("bathroom") as string
        // const leaseYear = formData.get("leaseYear") as string
        // const squareFt = formData.get("squareFt") as string
        // const builtYear = formData.get("builtYear") as string
        // const price = formData.get("price") as string
        // const imageUrl = formData.get("imageUrl") as string

        console.log(prev);
        console.log(formData);
        
        

        return { success: true, message: "Property created successfully" }

    } catch (error) {
        return { success: false, message: "An error occurred. Please try again." }
    }

}