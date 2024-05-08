import { expect, test, describe } from 'vitest'
import prisma from '@/utils/prisma'
import * as globalController from '@/utils/controllers/globalControllers'
import { createRandomUser, createRandomProperty, createRandomUserProfile } from '@/utils/demo'
import { encryptPassword } from '@/utils/hash'

describe("Property Controller Test", async () => {

    test("View Seller Property Controller", async () => {
        const properties = await globalController.viewSellerPropertyController.getOwnedProperty({ email: "" })

    })

})