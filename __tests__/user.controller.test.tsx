import { expect, test, describe, beforeEach } from 'vitest'
import prisma from '@/utils/prisma'
import { createRandomUser, createRandomProperty, UserInterface } from '@/utils/demo'
import { encryptPassword } from '@/utils/hash'
import * as UserController from '@/utils/controllers/user'
import { faker } from '@faker-js/faker'

describe("User Controller Test", async () => {
    let demoUser: UserInterface
    let passwordHash: string, userid: string, firstName:string

    beforeEach(async () => {
        demoUser = createRandomUser("BUYER")
        passwordHash = await encryptPassword(demoUser.passwordHash as string)
        firstName = faker.person.firstName()
    })

    test("Create BUYER Account Controller Test", async () => {

        const createUserAccController = new UserController.CreateUserAccController()
        const newUser = await createUserAccController.createUserAccount({
            email: demoUser.email,
            passwordHash: passwordHash,
            firstName: demoUser.firstName,
            lastName: demoUser.lastName,
            country: demoUser.country,
            phoneNumber: demoUser.phoneNumber,
            role: demoUser.role
        })
    
        expect(newUser.id).toBeDefined()
        userid = newUser.id
    })

    test('Edit Account Info Controller Test', async () => { 
        const editAccountInfoController = new UserController.EditAccountInfoController()
        const result = await editAccountInfoController.saveInfoChange({
            email: "admin@admin",
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            phoneNumber: faker.phone.number(),
            country: faker.location.country()
        })

        expect(result).toBeDefined()
    })
    
    test("User Account Search Controller Test", async () => {

        const userAccountSearchController = new UserController.UserAccountSearchController()
        const user = await userAccountSearchController.SearchUserAcount("")
        expect(user).toBeDefined()
        expect(user.length).toBeGreaterThan(0)
    })
})