import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import prisma from '@/utils/prisma'
import * as globalController from '@/utils/controllers/globalControllers'
import { createRandomUser } from '@/utils/demo'
import { encryptPassword } from '@/utils/hash'


test("create new user controller", async () => {
    const demoUser = createRandomUser()
    
    const passwordHash = await encryptPassword(demoUser.passwordHash)

    const newUser = await globalController.createUserAccController.createUserAccount({
        email: demoUser.email,
        passwordHash,
        firstName: demoUser.firstName,
        lastName: demoUser.lastName,
        country: demoUser.country,
        phoneNumber: demoUser.phoneNumber,
        ceaNumber: demoUser.ceaNumber,
        agency: demoUser.agency,
        license: demoUser.license
    })

    expect(newUser.message).toBe("User created")
})

test.only("view users controller" , async () => {
    const users = await globalController.viewUserAccountController.getUserInfo()
    expect(users).toBeDefined()
})

// TODO: delete user

// TODO: update role 

