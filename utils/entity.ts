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
                id: true,
                email: true,
                firstName: true,
                lastName: true,
                phoneNumber: true,
                country: true,
                ceaNumber: true,
                agency: true,
                license: true,
                profile:{
                    select:{
                        role:true
                    }
                },
                shortList: {
                    select: {
                        propertyId: true
                    }
                },
                ratingAndReview: {
                    select: {
                        rating: true,
                        review: true
                    }
                },
                ownership: {
                    select: {
                        propertyId: true
                    }

                }
            }
        })
    }

    async addPropertyToShortList({ email, propertyId }: { email: string, propertyId: string }) {
        const id = await userProfile.getUserId({ email })
        return await prisma.shortlist.create({
            data: {
                userId: id,
                propertyId
            }
        })
    }

    async searchAgent({ email }: { email: string }) {
        return await prisma.user.findFirst({
            where: {
                email
            }
        })
    }

    async getRatingsAndReviews() {
        return await prisma.ratingsAndReviews.findMany()
    }

    // anonymous rating
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
                role,
                activated: true
            }
        })
    }

    async getUserProfile() {
        return await prisma.userProfile.findMany()
    }

    // TODO: implement this
    async setRoleName({ email, role }: { email: string, role: string }) {

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
