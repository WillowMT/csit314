import { userEntity, propertyEntity } from "../entity"

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

class SoldPropertySearchController {
    async searchSoldProperty(location:string) {    
        return await propertyEntity.getSoldPropertybyLoc({ address: location })
    }

}

class OnSalePropertySearchController {
    async searchOnSaleProperty(location:string) {
        return await propertyEntity.getOnSalePropertybyLoc({ address: location })
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