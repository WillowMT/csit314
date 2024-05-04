import { comparePassword, encryptPassword } from "./hash";

import prisma from "./prisma";

export class User {
    email = ""

    setEmail(email: string) {
        this.email = email
    }

    async getAgentDetails() {
        return await prisma.user.findMany({
            where: {
                ceaNumber: {
                    not: null
                }
            }
        })
    }

    async setInfo({
        email, firstName, lastName, phoneNumber, country, ceaNumber, agency, license
    }: {
        email: string, firstName: string, lastName: string, phoneNumber: string, country: string, ceaNumber?: string, agency?: string, license?: string

    }) {
        // update user info
        return await prisma.user.update({
            where: {
                email
            },
            data: {
                firstName,
                lastName,
                phoneNumber,
                country,
                ceaNumber: ceaNumber || "",
                agency: agency || "",
                license: license || ""
            }
        })
    }

    async getUser({ email }: {
        email: string
    }) {
        return await prisma.user.findUnique({
            where: {
                email
            }
        })
    }

    async createUserAccount({
        email, firstName, lastName, passwordHash, phoneNumber, country, ceaNumber, agency, license
    }: {
        email: string, firstName: string, lastName: string, passwordHash: string, phoneNumber: string, country: string, ceaNumber?: string, agency?: string, license?: string
    }) {
        return await prisma.user.create({
            data: {
                email,
                firstName,
                lastName,
                passwordHash,
                phoneNumber,
                country,
                ceaNumber: ceaNumber || "",
                agency: agency || "",
                license: license || ""
            }
        })

    }

    async getAllUsers() { 
        return await prisma.user.findMany({
            select: {
                email: true,
                firstName: true,
                lastName: true,
                phoneNumber: true,
                country: true,
                ceaNumber: true,
                agency: true,
                license: true
            }
        })
    }

    async addPropertyToShortList() { }

    async searchAgent() { }

    async getRatingsAndReviews() {
        return await prisma.ratingsAndReviews.findMany()
    }

    async createRating({ email, rating, review }: {
        email: string, rating: number, review: string
    }) {
        const id = await userProfile.getUserId({ email })
        if (!id) return null

        return await prisma.ratingsAndReviews.create({
            data: {
                userId: id,
                rating,
                review
            }
        })
    }

    async matchUserAccount({ email }: { email: string }) {
        const id = await userProfile.getUserId({ email })
        return await prisma.ratingsAndReviews.findFirst({
            where: {
                userId: id
            }
        })
    }

}

export class UserProfile {

    async getUserId({ email }: { email: string }): Promise<string | null> {
        const user = await prisma.user.findUnique({
            where: {
                email
            }
        })

        return user?.id || null
    }

    async createUserProfile({
        email, role
    }: { email: string, role: string }) {
        const id = await this.getUserId({ email })

        return await prisma.userProfile.create({
            data: {
                userId: id,
                role,
                activated: true
            }
        })
    }

    async getUserProfile({ email }: { email: string }) {
        const id = await this.getUserId({ email })
        if (!id) return null
        const up = await prisma.userProfile.findFirst({
            where: {
                userId: id
            }
        })

        return up
    }

    async setRoleName({ email, role }: { email: string, role: string }) {

        const id = await this.getUserId({ email })
        if (!id) return null

        const userProfile = await prisma.userProfile.findFirst({
            where: {
                userId: id
            }
        })

        if (!userProfile) return null

        return await prisma.userProfile.update({
            where: {
                id: userProfile.id
            },
            data: {
                role
            }
        })
    }

}

export class Property {

    async getCreatedProperty() {
        return await prisma.property.findMany()
    }

    async getSoldProperty() {
        return await prisma.property.findMany({
            where: {
                onSale: false
            }
        })
    }

    async getOnSaleProperty() {
        return await prisma.property.findMany({
            where: {
                onSale: true
            }
        })
    }

    async getSoldPropertybyLoc({ address }: { address: string }) {
        return await prisma.property.findMany({
            where: {
                onSale: false,
                address: {
                    contains: address
                }
            }
        })
    }

    async getOnSalePropertybyLoc({ address }: { address: string }) {
        return await prisma.property.findMany({
            where: {
                onSale: true,
                address: {
                    contains: address
                }
            }
        })
    }

}

export const user = new User()
export const userProfile = new UserProfile()
export const property = new Property()
