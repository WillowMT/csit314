import { userEntity, propertyEntity } from "../entity"
import { PropertyInterface, UserInterface } from "../demo";
//seller views the properties he owns
class ViewSellerPropertyController {
    async getOwnedProperty({email}:{email:string}) {
        return await userEntity.getOwnedProperty({email})
    }
}
class BuyerViewOnSalePropertyController {
    async getOnSaleProperty() {
        return await propertyEntity.getOnSaleProperty()
    }
}

class BuyerViewSoldPropertyController {
    async getSoldProperty() {
        return await propertyEntity.getSoldProperty()
    }
}
//buyer search sold property
class SoldPropertySearchController {
    async searchSoldProperty(location:string) {    
        return await propertyEntity.getSoldPropertybyLoc({ address: location })
    }

}
//buyer search on sale property
class OnSalePropertySearchController {
    async searchOnSaleProperty(location:string) {
        return await propertyEntity.getOnSalePropertybyLoc({ address: location })
    }
}
//#60 REA creates property listing
class CreatePropertyListingController{
    async RecordPropertyDetails(lister_email: string, owner_email: string, property: PropertyInterface){
        return await propertyEntity.createPropertyListing(lister_email,owner_email,property)
    }
}
//#64 REA search from his 
class SearchListedPropertyListingController{
    async SearchListedPropertyByAddress({email,address}:{email:string,address:string}){
        return await propertyEntity.searchListedPropertyByAddress({email,address})
    }
}
//#62 REA edit property listing
class EditPropertyListingController{
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
class SuspendPropertyListingController{
    async suspendListedProperty({propertyId}:{propertyId:string}){
        return await propertyEntity.suspendListedProperty({propertyId})
    }
}
//#55 Seller views the number of shortlists in his property
class SellerPropertyShortlistCountController{
    async getPropertyShortlistCount({propertyid}:{propertyid:string}){
        return await propertyEntity.getPropertyShortlistCount({propertyid})
    }
}
//#56 Seller views the number of views in his property
class SellerPropertyViewsController{
    async getPropertyViews({propertyid}:{propertyid:string}){
        return await propertyEntity.getPropertyViews({propertyid})
    }
}
//#243 REA view individual property info
class REAViewPropertyInfoController{
    async getPropertyInfo({propertyid}:{propertyid:string}){
        return await propertyEntity.getPropertyInfo({propertyid})
    }
}
//#241 Buyer view individual property info
class BuyerViewPropertyInfoController{
    async getPropertyInfo({propertyid}:{propertyid:string}){
        return await propertyEntity.getPropertyInfo({propertyid})
    }
}
//#242 Seller view individual property info
class SellerViewPropertyInfoController{
    async getPropertyInfo({propertyid}:{propertyid:string}){
        return await propertyEntity.getPropertyInfo({propertyid})
    }
}
//#45 Calculate Property Mortgage Value
class CalculateMortgageController{
    async calculateMortgage({propertyid, loantermyears, monthlyinterest}:{propertyid:string,loantermyears:number,monthlyinterest:number}){
        return await propertyEntity.calculateMortgage({propertyid, loantermyears, monthlyinterest})
    }
}

const viewSellerPropertyController = new ViewSellerPropertyController()
const buyerViewOnSalePropertyController = new BuyerViewOnSalePropertyController()
const buyerViewSoldPropertyController = new BuyerViewSoldPropertyController()
const soldPropertySearchController = new SoldPropertySearchController()
const onSalePropertySearchController = new OnSalePropertySearchController()

export {
    viewSellerPropertyController,
    buyerViewOnSalePropertyController,
    buyerViewSoldPropertyController,
    soldPropertySearchController,
    onSalePropertySearchController
}