import { propertyEntity, userEntity } from "../entity";

//#48,#43 (#43 is buyer looking at agent, #48 is seller looking at agent, can split later)
export class ViewAgentAccountController {
    // used to return the information of the agent...
    async getAgentDetails({propertyId}:{propertyId:string}) {
        return await propertyEntity.getAgentDetails({propertyId})
    }
}
//#49 Seller searches for agent
export class SearchAgentController {
    async getAgentDetails(fname: string) {
        return await userEntity.searchAgent({fname})
    }
}
//#53, #40
export class RateAgentController {
    // create review for agent x
    async rate(email: string, rating: number, review?: string) {
        return await userEntity.createRating({ email, rating, review })
    }
}
//#54, #41
export class ReviewAgentController {
    // create review for agent x
    async writeReview(email: string, rating?: number, review?: string) {
        return await userEntity.createRating({ email, rating, review })
    }
}
//#51 Seller viewing the Agent's ratings and reviews
export class ViewRealEstateAgentRatingsAndReviewsController {
    async getRatingsAndReviews({email}:{email:string}) {
        return await userEntity.getRatingsAndReviews({email})
    }
}
//#181 
export class ViewREAgentAccountPersonalController{
    async getAgentPersonalAccount({userId}:{userId:string}){
        return await userEntity.getAccountInfo({userId})
    }
}
//will be removed
//#61 REA view properties he personally list
export class REAViewListedPropertyController{
    async getREAListedProperty({email}:{email:string}){
        return await userEntity.getREAListedProperty({email})
    }
}
//will be removed
//#66, #67 REA view Ratings and Reviews
export class REAViewRatingsAndReviews{
    async REAgentRatingAndReviews({email}:{email:string}){
        return await userEntity.getRatingsAndReviews({email})
    }
}

