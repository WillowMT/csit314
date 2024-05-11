import { userEntity, propertyEntity } from "../entity"
import { PropertyInterface, UserInterface } from "../demo";
//seller views the properties he owns
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
//#64 REA search from his 
export class SearchListedPropertyListingController{
    async SearchListedPropertyByAddress({email,address}:{email:string,address:string}){
        return await propertyEntity.searchListedPropertyByAddress({email,address})
    }
}
//#62 REA edit property listing
export class EditPropertyListingController{
    async SavePropInfoChange({id,name,address,description,onSale,
        leaseYear,squareFt,builtYear,price,imageUrl}:
    {id:string,name:string,address:string,description:string,onSale:boolean,
        leaseYear:number,squareFt:number,builtYear:number,price:number,imageUrl:string
    }){
        return await propertyEntity.setPropInfoChange({id,name,address,description,onSale,
            leaseYear,squareFt,builtYear,price,imageUrl})
    }
}
//#63 REA suspend property listing
export class SuspendPropertyListingController{
    async suspendListedProperty({propertyId}:{propertyId:string}){
        return await propertyEntity.suspendListedProperty({propertyId})
    }
}
//#55 Seller views the number of shortlists in his property
export class SellerPropertyShortlistCountController{
    async getPropertyShortlistCount({propertyid}:{propertyid:string}){
        return await propertyEntity.getPropertyShortlistCount({propertyid})
    }
}
//#56 Seller views the number of views in his property
export class SellerPropertyViewsController{
    async getPropertyViews({propertyid}:{propertyid:string}){
        return await propertyEntity.getPropertyViews({propertyid})
    }
}
//#243 REA view individual property info
export class REAViewPropertyInfoController{
    async getPropertyInfo({propertyid}:{propertyid:string}){
        return await propertyEntity.getPropertyInfo({propertyid})
    }
}
//#241 Buyer view individual property info
export class BuyerViewPropertyInfoController{
    async getPropertyInfo({propertyid}:{propertyid:string}){
        return await propertyEntity.getPropertyInfo({propertyid})
    }
}
//#242 Seller view individual property info
export class SellerViewPropertyInfoController{
    async getPropertyInfo({propertyid}:{propertyid:string}){
        return await propertyEntity.getPropertyInfo({propertyid})
    }
}
//#45 Calculate Property Mortgage Value
export class CalculateMortgageController{
    async calculateMortgage({propertyid, loantermyears, monthlyinterest}:{propertyid:string,loantermyears:number,monthlyinterest:number}){
        return await propertyEntity.calculateMortgage({propertyid, loantermyears, monthlyinterest})
    }
}