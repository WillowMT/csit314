import { expect, test, describe } from 'vitest'
import { demo } from '@/utils/demo'
import prisma from '@/utils/prisma'

describe.skip("Delete Database Records", async () => {

    //delete shortlists
    test("Delete Shortlists", async () => {
        const shortlists = await prisma.shortlist.findMany()
        for (const shortlist of shortlists) {
            const result = await prisma.shortlist.delete({
                where: {
                    id: shortlist.id
                }
            })
            expect(result).toBeDefined()
        }
    })

    // delete ownership
    test("Delete Ownership", async () => {
        const ownership = await prisma.ownership.findMany()
        for (const owner of ownership) {
            const result = await prisma.ownership.delete({
                where: {
                    id: owner.id
                }
            })
            expect(result).toBeDefined()
        }
    })

    // delete listing
    test("Delete Listings", async () => {
        const listings = await prisma.listing.findMany()
        for (const listing of listings) {
            const result = await prisma.listing.delete({
                where: {
                    id: listing.id
                }
            })
            expect(result).toBeDefined()
        }
    })

    // delete properties
    test("Delete Properties", async () => {
        const properties = await prisma.property.findMany()
        for (const property of properties) {
            const result = await prisma.property.delete({
                where: {
                    id: property.id
                }
            })
            expect(result).toBeDefined()
        }
    })

    // delete users
    test("Delete Users", async () => {
        const users = await prisma.user.findMany()
        for (const user of users) {
            const result = await prisma.user.delete({
                where: {
                    id: user.id
                }
            })
            expect(result).toBeDefined()
        }
    })

    // delete reviews
    test("Delete Reviews", async () => {
        const reviews = await prisma.ratingsAndReviews.findMany()
        for (const review of reviews) {
            const result = await prisma.ratingsAndReviews.delete({
                where: {
                    id: review.id
                }
            })
            expect(result).toBeDefined()
        }
    })

    

})

