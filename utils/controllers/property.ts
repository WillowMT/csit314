import { userEntity, propertyEntity } from "../entity"
import { PropertyInterface, UserInterface } from "../demo";
//seller views the properties he owns
//#52 will be removed
export class ViewSellerPropertyController {
    async getOwnedProperty({email}:{email:string}) {
        return await userEntity.getOwnedProperty({email})
    }
}
export class BuyerViewOnSalePropertyController {
    async getOnSaleProperty() {
        return await propertyEntity.getOnSaleProperty()
    }
}

export class BuyerViewSoldPropertyController {
    async getSoldProperty() {
        return await propertyEntity.getSoldProperty()
    }
}
//#37 buyer search sold property
export class SoldPropertySearchController {
    async searchSoldProperty(location:string) {    
        return await propertyEntity.getSoldPropertybyLoc({ address: location })
    }

}
//#35 buyer search on sale property
export class OnSalePropertySearchController {
    async searchOnSaleProperty(location:string) {
        return await propertyEntity.getOnSalePropertybyLoc({ address: location })
    }
}
//#60 REA creates property listing
export class CreatePropertyListingController{
    async RecordPropertyDetails(lister_email: string, owner_email: string, property: PropertyInterface){
        return await propertyEntity.createPropertyListing(lister_email,owner_email,property)
    }
}
//will be removed
//#64 REA search from his 
export class SearchListedPropertyListingController{
    async SearchListedPropertyByAddress({email,address}:{email:string,address:string}){
        return await propertyEntity.searchListedPropertyByAddress({email,address})
    }
}
//#62 REA edit property listing
export class EditPropertyListingController{
    async SavePropInfoChange(property:PropertyInterface){
        return await propertyEntity.setPropInfoChange(property)
    }
}
//#63 REA suspend property listing
export class SuspendPropertyListingController{
    async suspendListedProperty({propertyId}:{propertyId:string}){
        return await propertyEntity.suspendListedProperty({propertyId})
    }
}
//will be removed
//#55 Seller views the number of shortlists in his property
export class SellerPropertyShortlistCountController{
    async getPropertyShortlistCount({propertyid}:{propertyid:string}){
        return await propertyEntity.getPropertyShortlistCount({propertyid})
    }
}
//will be removed
//#56 Seller views the number of views in his property
export class SellerPropertyViewsController{
    async getPropertyViews({propertyid}:{propertyid:string}){
        return await propertyEntity.getPropertyViews({propertyid})
    }
}

export class ViewAllPropertiesController{
    async getAllProperties(){
        return await propertyEntity.getAllProperties()
    }
}
//#241,#242,#243 view individual property info
export class ViewPropertyInfoController{
    async getPropertyInfo(publicid:string){
        const publicId={publicid}
        return await propertyEntity.getPropertyInfo(publicId)
    }
}


//#45 Calculate Property Mortgage Value
export class CalculateMortgageController{
    async calculateMortgage({price, loantermyears, monthlyinterest}:{price:number,loantermyears:number,monthlyinterest:number}){
        return await propertyEntity.calculateMortgage({price, loantermyears, monthlyinterest})
    }
}