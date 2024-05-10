import { expect, test, describe } from 'vitest'
import prisma from '@/utils/prisma'
import * as UserProfile from '@/utils/controllers/userProfile'

describe("User Controller Test", async () => {

    test("Create User Profile", async () => {
        const createUserProfileController = new UserProfile.CreateUserProfileController()
        const profile = await createUserProfileController.recordUserProfile("FAKE_ROLE")
        expect(profile).toBeDefined()
    })

    test("View User Profile Controller", async () => {

        const viewUserProfileController = new UserProfile.ViewUserProfileController()

        const profile = await viewUserProfileController.getUserProfile()

        expect(profile).toBeDefined()
    })

    test('User Profile Search Controller', async () => {

        const userProfileSearchController = new UserProfile.UserProfileSearchController()
        const profile = await userProfileSearchController.SearchUserProfile('BUYER')
        expect(profile?.id).toBeDefined()
    })

    test("Suspend User Profile Controller",async () => {

        const suspendProfileController = new UserProfile.SuspendProfileController()
        const profile = await suspendProfileController.SuspendProfile("FAKE_ROLE")
        expect(profile).toBeDefined()
    } )

    test("Update User Profile Controller", async () => {
        const updateUserProfileController = new UserProfile.UpdateUserProfileController()
        const profile = await updateUserProfileController.saveRoleName("FAKE_ROLE", "FAKE_ROLE", false)
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