import { expect, test, describe } from 'vitest'
import prisma from '@/utils/prisma'
import * as globalController from '@/utils/controllers/globalControllers'
import { createRandomUser, createRandomProperty } from '@/utils/demo'
import { encryptPassword } from '@/utils/hash'

describe("User Controller Test", async () => {
    const demoUser = createRandomUser()
    const passwordHash = await encryptPassword(demoUser.passwordHash)

    const demoProperty = createRandomProperty()
    var userid:string

    test("Create User Account Controller Test", async () => {
    
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
            role: "BUYER"
        })

        userid = newUser.user?.id as string
    
        expect(newUser.user).toBeDefined()
    })
    
    test("View User Account Controller Test" , async () => {
        const users = await globalController.viewUserAccountController.getUserInfo()
        expect(users).toBeDefined()
    })
    
    test("Edit Account Info Controller Test", async () => {
    
        const newUser = await globalController.createUserAccController.createUserAccount({
            email: demoUser.email,
            passwordHash,
            firstName: demoUser.firstName,
            lastName: demoUser.lastName,
            country: demoUser.country,
            phoneNumber: demoUser.phoneNumber,
            role: "USER"
        })
    
        const updatedUser = await globalController.ediAccountInfoController.saveInfoChange({
            email: demoUser.email,
            firstName: "User",
            lastName: "Doe",
            country: "Singapore",
            phoneNumber: "12345678"
        })
    
        expect(updatedUser.user).toBeDefined()
        expect(updatedUser.user?.firstName).toBe("User")
    })
    
    test("User Account Search Controller Test", async () => {
        const user = await globalController.userAccountSearchController.SearchUserAcount(demoUser.email)
        expect(user).toBeDefined()
        expect(user?.email).toBe(demoUser.email)
    })
    
    test("Shortlist Controller Test", async () => {
        // create property 
        const property = await prisma.property.create({
            data: {
                name: demoProperty.name,
                address: demoProperty.address,
                description: demoProperty.description,
                onSale: demoProperty.onSale,
                views: demoProperty.views,
                bedroom: demoProperty.bedroom,
                bathroom: demoProperty.bathroom,
                leaseYear: demoProperty.leaseYear,
                squareFt: demoProperty.squareFt,
                builtYear: demoProperty.builtYear,
                price: demoProperty.price,
                imageUrl: demoProperty.imageUrl,
                activated: demoProperty.activated
            }
        })


        // shortlist property
        const shortlist = await globalController.shortlistController.shortlist(demoUser.email, property.id)

        expect(shortlist).toBeDefined()
        expect(shortlist.id).toBeDefined()
    })

})