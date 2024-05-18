import { expect, test, describe } from 'vitest'
import { CreateUserAccController } from '@/utils/controllers/user'
import { createRandomUser, createRatingsAndReviews } from '@/utils/demo'


describe("Insert Demo Data", () => {
    test("Insert AGENTS", async () => {
        const agents = new Array(2).fill(0).map(() => createRandomUser("AGENT"))
        const createUserAccController = new CreateUserAccController()
        for (const usr of agents) {
            const result = await createUserAccController.createUserAccount({
                email: usr.email,
                firstName: usr.firstName,
                lastName: usr.lastName,
                country: usr.country,
                phoneNumber: usr.phoneNumber,
                license: usr.license,
                agency: usr.agency,
                ceaNumber: usr.ceaNumber,
                passwordHash: usr.passwordHash,
                role: "AGENT"
            })
            expect(result).toBeDefined()
        }
    })

    test("Insert BUYERS", async () => {
        const buyers = new Array(2).fill(0).map(() => createRandomUser("BUYER"))
        const createUserAccController = new CreateUserAccController()
        for (const usr of buyers) {
            const result = await createUserAccController.createUserAccount({
                email: usr.email,
                firstName: usr.firstName,
                lastName: usr.lastName,
                country: usr.country,
                phoneNumber: usr.phoneNumber,
                passwordHash: usr.passwordHash,
                role: "BUYER"
            })
            expect(result).toBeDefined()
        }
    })

    test("Insert SELLERS", async () => {
        const sellers = new Array(2).fill(0).map(() => createRandomUser("SELLER"))
        const createUserAccController = new CreateUserAccController()
        for (const usr of sellers) {
            const result = await createUserAccController.createUserAccount({
                email: usr.email,
                firstName: usr.firstName,
                lastName: usr.lastName,
                country: usr.country,
                phoneNumber: usr.phoneNumber,
                passwordHash: usr.passwordHash,
                role: "SELLER"
            })
            expect(result).toBeDefined()
        }
    })

    test("Insert ADMIN", async () => {
        const admin = new Array(3).fill(0).map(() => createRandomUser("ADMIN"))
        const createUserAccController = new CreateUserAccController()
        for (const usr of admin) {
            const result = await createUserAccController.createUserAccount({
                email: usr.email,
                firstName: usr.firstName,
                lastName: usr.lastName,
                country: usr.country,
                phoneNumber: usr.phoneNumber,
                passwordHash: usr.passwordHash,
                role: "ADMIN"
            })
            expect(result).toBeDefined()
        }
    })

    // test("Insert Properties", async () => {
    //     expect(agents.length).toBe(sellers.length)
    //     for (let i = 0; i < agents.length; i++) {
    //         const property = createRandomProperty()
    //         const createPropertyListingController = new CreatePropertyListingController()
    //         const result = await createPropertyListingController.RecordPropertyDetails(agents[i].email, sellers[i].email, property)
    //         expect(result).toBeDefined()
    //     }
    // })

    // // create shortlist
    // test("Create Shortlist", async () => {
    //     for (let i = 0; i < agents.length; i++) {
    //         const shortlistController = new ShortlistController()
    //         const properties = await prisma.property.findMany()
    //         const result = await shortlistController.shortlist(buyers[i].email, properties[i].id)
    //         expect(result).toBeDefined()
    //     }
    // })

    // // create ratings and reviews
    // test("Create Ratings and Reviews", async () => {
    //     const rateAgentController = new RateAgentController()
    //     const reviewAgentController = new ReviewAgentController()

    //     const reviews = new Array(2).fill(0).map(() => createRatingsAndReviews())

    //     for (let i = 0; i < agents.length; i++) {
    //         const result = await rateAgentController.rate(agents[i].email, reviews[i].rating, "")
    //         expect(result).toBeDefined()
    //         const result2 = await reviewAgentController.writeReview(agents[i].email, 0, reviews[i].review)
    //         expect(result2).toBeDefined()
    //     }
    // })

})

