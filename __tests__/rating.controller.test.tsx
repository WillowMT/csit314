import { expect, test, describe } from 'vitest'
import { RateAgentController, ReviewAgentController } from '@/utils/controllers/agent'
import { demo } from '@/utils/demo'
import { CreateUserAccController } from '@/utils/controllers/user'
import { faker } from '@faker-js/faker'

describe("Rating and Review Controller Test", async () => {

    const demoUser = demo.user[0]

    test("Rate Agent Controller", async () => {
        const rateAgentController = new RateAgentController()
        const ratings = await rateAgentController.rate("", faker.number.int({min:1, max:5}), faker.lorem.sentence())
        expect(ratings).toBeDefined()
    })

    test("Review Agent Controller", async () => {
        const reviewAgentController = new ReviewAgentController()
        const review = await reviewAgentController.writeReview("", faker.number.int({ min: 1, max: 5 }), faker.lorem.sentence())
        expect(review).toBeDefined()
    })

})

