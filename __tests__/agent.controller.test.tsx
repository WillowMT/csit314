import { expect, test, describe } from 'vitest'
import * as globalController from '@/utils/controllers/globalControllers'
import { createRandomUser, createRandomProperty, createRatingsAndReviews } from '@/utils/demo'
import { encryptPassword } from '@/utils/hash'

describe("Agent Controller Test", async () => {
    const demoUser = createRandomUser()
    const passwordHash = await encryptPassword(demoUser.passwordHash)

    const demoProperty = createRandomProperty()
    var userid: string

    const demoRating = createRatingsAndReviews()

    test("Create Agent Controller",async () => {
        const newUser = await globalController.createUserAccController.createUserAccount({
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

        userid = newUser.user?.id as string

        expect(newUser.user).toBeDefined()
    })

    test("Rate Agent Controller Test", async () => {
        const newRating = await globalController.rateAgentController.writeReview(demoUser.email, demoRating.rating, demoRating.review)
        expect(newRating).toBeDefined()
    })

    test("View Real Estate Agent Ratings And Reviews Controller Test", async () => {
        const ratings = await globalController.viewRealEstateAgentRatingsAndReviewsController.getRatingsAndReviews({
            email: demoUser.email
        })

        expect(ratings).toBeDefined()
    })

    test("Search Agent Controller Test", async () => {
        const agent = await globalController.searchAgentController.getAgentDetails(demoUser.email)
        expect(agent).toBeDefined()
    })
})