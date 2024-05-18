import { expect, test, describe, beforeEach } from 'vitest'
import {CreateUserAccController} from '@/utils/controllers/user'
import {RateAgentController, ViewRealEstateAgentRatingsAndReviewsController, SearchAgentController} from '@/utils/controllers/agent'
import { createRandomUser, createRandomProperty, createRatingsAndReviews, UserInterface } from '@/utils/demo'
import { encryptPassword } from '@/utils/hash'

describe("Agent Controller Test", async () => {
    let demoUser : UserInterface
    let passwordHash:string, userid:string
    
    beforeEach(async () => {
        demoUser = createRandomUser("AGENT")
        passwordHash = await encryptPassword(demoUser.passwordHash as string)
    })

    test("Create Agent Controller",async () => {
        const createUserAccController= new CreateUserAccController()
        const newUser = await createUserAccController.createUserAccount({
            email: demoUser.email,
            passwordHash,
            firstName: demoUser.firstName,
            lastName: demoUser.lastName,
            country: demoUser.country,
            phoneNumber: demoUser.phoneNumber,
            ceaNumber: demoUser.ceaNumber,
            agency: demoUser.agency,
            license: demoUser.license,
            role: "AGENT"
        })

        userid = newUser.id as string

        expect(newUser.id).toBeDefined()
    })

    test("Rate Agent Controller Test", async () => {
        const demoRating = createRatingsAndReviews()
        const rateAgentController=new RateAgentController()
        const newRating = await rateAgentController.rate(demoUser.email, demoRating.rating, demoRating.review)
        expect(newRating).toBeDefined()
    })

    test("View Real Estate Agent Ratings And Reviews Controller Test", async () => {
        const viewRealEstateAgentRatingsAndReviewsController= new  ViewRealEstateAgentRatingsAndReviewsController()
        const ratings = await viewRealEstateAgentRatingsAndReviewsController.getRatingsAndReviews({
            email: demoUser.email
        })

        expect(ratings).toBeDefined()
    })

    test("Search Agent Controller Test", async () => {
        const searchAgentController= new SearchAgentController()
        const agent = searchAgentController.getAgentDetails(demoUser.email)
        expect(agent).toBeDefined()
    })
})