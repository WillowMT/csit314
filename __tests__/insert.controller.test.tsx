import { expect, test, describe } from 'vitest'
import { createRandomProperty, demo } from '@/utils/demo'
import prisma from '@/utils/prisma'
import { encryptPassword } from '@/utils/hash'
import { CreateUserAccController } from '@/utils/controllers/user'
import { CreatePropertyListingController } from '@/utils/controllers/property'
import { faker } from '@faker-js/faker'
import { createRandomUser, createRatingsAndReviews } from '@/utils/demo'
import { ShortlistController } from '@/utils/controllers/user'
import { RateAgentController, ReviewAgentController } from '@/utils/controllers/agent'


describe("Insert Demo Data", async () => {

    const agents = new Array(10).fill(0).map(() => createRandomUser("AGENT"))
    const buyers = new Array(10).fill(0).map(() => createRandomUser("BUYER"))
    const sellers = new Array(10).fill(0).map(() => createRandomUser("SELLER"))
    const admin = new Array(3).fill(0).map(() => createRandomUser("ADMIN"))
    const reviews = new Array(10).fill(0).map(() => createRatingsAndReviews())

    let globalPassword = "test"

    // controllers
    const createUserAccController = new CreateUserAccController()

    test("Insert AGENTS", async () => {
        for (const usr of agents) {
            const passwordHash = await encryptPassword(globalPassword)
            const result = await createUserAccController.createUserAccount({
                ...usr,
                passwordHash,
                role: "AGENT"
            })
            expect(result).toBeDefined()
        }
    })

    test("Insert BUYERS", async () => {
        for (const usr of buyers) {
            const passwordHash = await encryptPassword(globalPassword)
            const result = await createUserAccController.createUserAccount({
                ...usr,
                passwordHash,
                role: "BUYER"
            })
            expect(result).toBeDefined()
        }
    })

    test("Insert SELLERS", async () => {
        for (const usr of sellers) {
            const passwordHash = await encryptPassword(globalPassword)
            const result = await createUserAccController.createUserAccount({
                ...usr,
                passwordHash,
                role: "SELLER"
            })
            expect(result).toBeDefined()
        }
    })

    test("Insert ADMIN", async () => {
        for (const usr of admin) {
            const passwordHash = await encryptPassword(globalPassword)
            const result = await createUserAccController.createUserAccount({
                ...usr,
                passwordHash,
                role: "ADMIN"
            })
            expect(result).toBeDefined()
        }
    })

    test("Insert Properties", async () => {
        expect(agents.length).toBe(sellers.length)
        for (let i = 0; i < agents.length; i++) {
            const property = createRandomProperty()
            const createPropertyListingController = new CreatePropertyListingController()
            const result = await createPropertyListingController.RecordPropertyDetails(agents[i].email,sellers[i].email,property)
            expect(result).toBeDefined()
        }
    })

    // create shortlist
    test("Create Shortlist", async () => {
        for (let i = 0; i < agents.length; i++) {
            const shortlistController = new ShortlistController()
            const properties = await prisma.property.findMany()
            const result = await shortlistController.shortlist(buyers[i].email, properties[i].id)
            expect(result).toBeDefined()
        }
    })

    // create ratings and reviews
    test("Create Ratings and Reviews", async () => {
        const rateAgentController = new RateAgentController()
        const reviewAgentController = new ReviewAgentController()

        for (let i = 0; i < agents.length; i++) {
            const result = await rateAgentController.rate(agents[i].email, reviews[i].rating,"")
            expect(result).toBeDefined()
            const result2 = await reviewAgentController.writeReview(agents[i].email, 0, reviews[i].review)
            expect(result2).toBeDefined()
        }
    })

})

