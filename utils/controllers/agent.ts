import { propertyEntity, userEntity } from "../entity";

class ViewRealEstateAgentRatingsAndReviews {
    async getRatingsAndReviews({email}:{email:string}) {
        return await userEntity.getRatingsAndReviews({email})
    }
}

class ViewAgentAccountController {
    // used to return the information of the agent...
    async getAgentDetails({propertyId}:{propertyId:string}) {
        return await propertyEntity.getAgentDetails({propertyId})
    }
}

class SearchAgentController {
    async getAgentDetails(email: string) {
        return await userEntity.getUser({ email })
    }
}

class RateAgentController {
    // create review for agent x
    async writeReview(email: string, rating: number, review: string) {
        return await userEntity.createRating({ email, rating, review })
    }
}

class ViewRealEstateAgentRatingsAndReviewsController {
    async getRatingsAndReviews({email}:{email:string}) {
        return await userEntity.getRatingsAndReviews({email})
    }
}

const viewRealEstateAgentRatingsAndReviews = new ViewRealEstateAgentRatingsAndReviews()
const viewAgentAccountController = new ViewAgentAccountController()
const searchAgentController = new SearchAgentController()
const rateAgentController = new RateAgentController()
const viewRealEstateAgentRatingsAndReviewsController = new ViewRealEstateAgentRatingsAndReviewsController()

export {
    viewRealEstateAgentRatingsAndReviews,
    viewAgentAccountController,
    searchAgentController,
    rateAgentController,
    viewRealEstateAgentRatingsAndReviewsController
}