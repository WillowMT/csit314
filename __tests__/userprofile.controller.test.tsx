import { expect, test, describe } from 'vitest'
import prisma from '@/utils/prisma'
import * as globalController from '@/utils/controllers/globalControllers'

describe("User Controller Test", async () => {

    test("Create User Profile", async () => {
        const profile = await globalController.createUserProfileController.recordUserProfile("FAKE_ROLE")
        expect(profile).toBeDefined()
    })

    test("View User Profile Controller", async () => {

        const profile = await globalController.viewUserProfileController.getUserProfile()

        expect(profile).toBeDefined()
    })

    test('User Profile Search Controller', async () => {
        const profile = await globalController.userProfileSearchController.SearchUserProfile('BUYER')
        expect(profile?.id).toBeDefined()
    })

    test("Suspend User Profile Controller",async () => {
        const profile = await globalController.suspendProfileController.SuspendProfile("FAKE_ROLE")
        expect(profile).toBeDefined()
    } )

    test("Update User Profile Controller", async () => {
        const profile = await globalController.updateUserProfileController.saveRoleName("FAKE_ROLE", "FAKE_ROLE", false)
        expect(profile).toBeDefined()
    })

    test("Delete User Profile Prisma", async () => {
        const deleted = await prisma.userProfile.delete({
            where: {
                role:"FAKE_ROLE"
            }
        })
        expect(deleted).toBeDefined()
    })

})