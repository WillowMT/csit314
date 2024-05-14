import { expect, test, describe } from 'vitest'
import prisma from '@/utils/prisma'
import { createRandomUser, createRandomProperty } from '@/utils/demo'
import { encryptPassword } from '@/utils/hash'
import * as UserController from '@/utils/controllers/user'
import { faker } from '@faker-js/faker'

describe("User Controller Test", async () => {
    const demoUser = createRandomUser()
    const passwordHash = await encryptPassword(demoUser.passwordHash as string)

    const demoProperty = createRandomProperty()
    let userid:string
    let firstName = faker.name.firstName()

    test("Create User Account Controller Test", async () => {

        const createUserAccController = new UserController.CreateUserAccController()
    
        const newUser = await createUserAccController.createUserAccount({
            email: demoUser.email,
            passwordHash,
            firstName: demoUser.firstName,
            lastName: demoUser.lastName,
            country: demoUser.country as string,
            phoneNumber: demoUser.phoneNumber,
            ceaNumber: demoUser.ceaNumber,
            agency: demoUser.agency,
            license: demoUser.license,
            role: "BUYER"
        })

        userid = newUser.id as string
    
        expect(newUser.id).toBeDefined()
    })
    
    test("View User Account Controller Test" , async () => {
        const viewUserAccountController = new UserController.ViewUserAccountController()
        const users = await viewUserAccountController.getUserInfo()
        expect(users).toBeDefined()
    })
    
    test("Edit Account Info Controller Test", async () => {
        const ediAccountInfoController = new UserController.EditAccountInfoController()
        const createUserAccController = new UserController.CreateUserAccController()
    
        const newUser = await createUserAccController.createUserAccount({
            email: demoUser.email,
            passwordHash,
            firstName: demoUser.firstName,
            lastName: demoUser.lastName,
            country: demoUser.country as string,
            phoneNumber: demoUser.phoneNumber,
            role: "USER"
        })
    
        const updatedUser = await ediAccountInfoController.saveInfoChange({
            email: demoUser.email,
            firstName: firstName,
            lastName: "Doe",
            country: "Singapore",
            phoneNumber: "12345678"
        })
    
        expect(updatedUser).toBeDefined()
        expect(updatedUser.firstName).toBe(firstName)
    })
    
    test("User Account Search Controller Test", async () => {

        const userAccountSearchController = new UserController.UserAccountSearchController()
        const user = await userAccountSearchController.SearchUserAcount(firstName)
        expect(user).toBeDefined()
        expect(user.length).toBeGreaterThan(0)
    })
    
    test("Shortlist Controller Test", async () => {

        const shortlistController = new UserController.ShortlistController()

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
        const shortlist = await shortlistController.shortlist(demoUser.email, property.id)

        expect(shortlist).toBeDefined()
        expect(shortlist.id).toBeDefined()
    })

})