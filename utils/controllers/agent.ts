import { user } from "../entity";

class ViewRealEstateAgentRatingsAndReviews {
    async getRatingsAndReviews() {
        return await user.getRatingsAndReviews()
    }
}

class ViewAgentAccountController {
    // returns all agents
    async getAgentDetails() {
        return await user.getAgentDetails()
    }
}

class SearchAgentController {
    async getAgentDetails(email: string) {
        return await user.getUser({ email })
    }
}

class RateAgentController {
    // create review for agent x
    async writeReview(email: string, rating: number, review: string) {
        return await user.createRating({ email, rating, review })
    }
}

class ViewRealEstateAgentRatingsAndReviewsController {
    async getRatingsAndReviews() {
        return await user.getRatingsAndReviews()
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