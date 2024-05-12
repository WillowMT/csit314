'use server'

import { SuspendPropertyListingController } from "@/utils/controllers/property"
import { EditPropertyListingController } from "@/utils/controllers/property"
import { PropertyInterface } from "@/utils/demo"

export async function editProperty(formData: FormData, id:string) {
    const name = formData.get('name') as string
    const address = formData.get('address') as string
    const description = formData.get('description') as string
    const onSale = formData.get('onSale') === 'true' ? true : false
    const leaseYear = parseInt(formData.get('leaseYear') as string)
    const squareFt = parseInt(formData.get('squareFt') as string)
    const builtYear = parseInt(formData.get('builtYear') as string)
    const price = parseInt(formData.get('price') as string)
    const imageUrl = formData.get('imageUrl') as string
    const bedroom = parseInt(formData.get('bedroom') as string)
    const bathroom = parseInt(formData.get('bathroom') as string)
    const activated = formData.get('activated') === 'true' ? true : false
    const propertyType = formData.get('propertyType') as string

    
    const propertyObj: PropertyInterface = {
        id,name, address, description, onSale, leaseYear, squareFt, builtYear, price, imageUrl, bedroom, bathroom, activated, propertyType
    }

    console.log(propertyObj);

    const editPropertyListingController = new EditPropertyListingController()
    return await editPropertyListingController.SavePropInfoChange(propertyObj)
}


export async function suspendProperty(id: string) {
    const suspendPropertyListingController = new SuspendPropertyListingController()
    return await suspendPropertyListingController.suspendListedProperty({ propertyId: id })
}