import { user, property } from "../entity"

class ViewSellerPropertyController {
    async getOwnedProperty({email}:{email:string}) {
        return await user.getOwnedProperty({email})
    }
}


class BuyerViewOnSalePropertyController {
    async getOnSaleProperty() {
        return await property.getOnSaleProperty()
    }
}

class BuyerViewSoldPropertyController {
    async getSoldProperty() {
        return await property.getSoldProperty()
    }
}

class SoldPropertySearchController {
    async searchSoldProperty(location:string) {    
        return await property.getSoldPropertybyLoc({ address: location })
    }

}

class OnSalePropertySearchController {
    async searchOnSaleProperty(location:string) {
        return await property.getOnSalePropertybyLoc({ address: location })
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