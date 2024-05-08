import { expect, test, describe } from 'vitest'
import prisma from '@/utils/prisma'
import * as globalController from '@/utils/controllers/globalControllers'
import { createRandomUser, createRandomProperty, createRandomUserProfile } from '@/utils/demo'
import { encryptPassword } from '@/utils/hash'

describe("User Controller Test", async () => {

    test("Get User Profile", async () => {

        const profile = await globalController.viewUserProfileController.getUserProfile()

        expect(profile).toBeDefined()
    })

    test('Get User Profile Prisma', async () => {
        const profile = await prisma.userProfile.findUnique({
            where: {
                role: 'BUYER'
            }
        })
        expect(profile?.id).toBeDefined()
    })

})