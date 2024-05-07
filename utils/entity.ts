import { comparePassword, encryptPassword } from "./hash";

import prisma from "./prisma";

export class User {
    email = ""

    async getUserId({ email }: { email: string }): Promise<string | null> {
        const user = await prisma.user.findUnique({
            where: {
                email
            }
        })

        return user?.id || null
    }

    setEmail(email: string) {
        this.email = email
    }
    
    //We can use this for system admin and buyer,seller, rea for their personal details. #44, #57, #72, #smth idr
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
    //this was supposed to be used for login.
    async getUser({ email }: {
        email: string
    }) {
        return await prisma.user.findUnique({
            where: {
                email
            }
        })
    }
    //system admin creates new user account
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
    // #71, will change from getUserInfo to this
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
    //buyer adds property to shortlist
    async addPropertyToShortList({ email, propertyId }: { email: string, propertyId: string }) {
        const id = await this.getUserId({ email })
        return await prisma.shortlist.create({
            data: {
                userId: id,
                propertyId
            }
        })
    }
    //buyer search agent. (Can be reused for #49??)
    async searchAgent({ fname }: { fname: string }) {
        return await prisma.user.findMany({
            where: {
                firstName:fname
            }
        })
    }
    //get the ratingsandreviews of an agent. ratings and reviews are anonymous (this can be reused for #51)
    async getRatingsAndReviews({email}:{email:string}) {
        const id=await this.getUserId({email})
        if(!id) return null
        return await prisma.ratingsAndReviews.findMany({
            where:{
                userId: id
            } 
        })
    }
    //we're supposed to have individual getREARating and getREAReviews, but screw that, we'll fix the diagrams #66, #67

    // anonymous rating, make it so that either rating or review is optional, since tutor tell us to split rating and review.
    // rating default 0 ,and for null review just give "".
    async createRating({ email, rating, review }: {
        email: string, rating: number, review: string
    }) {
        const id = await this.getUserId({ email })
        if (!id) return null

        return await prisma.ratingsAndReviews.create({
            data: {
                userId: id,
                rating,
                review
            }
        })
    }
    //why do we have to do this too ...can you help figure out what to do with this one, by that i mean should we just combine them
    async createReview({ email, rating, review }: {
        email: string, rating: number, review: string
    }) {
        const id = await this.getUserId({ email })
        if (!id) return null

        return await prisma.ratingsAndReviews.create({
            data: {
                userId: id,
                rating,
                review
            }
        })
    }

//#74
    async matchUserAccount({fname}: {fname:string}) {
        return await prisma.user.findMany({
            where: {
                firstName: fname
            }
        })
    }
//#73
    async suspendUserAccount({email}:{email:string}){
        return await prisma.user.update({
            where:{
                email:email
            },
            data:{
                activated:false
            }
        })    
    }
    //seller's owned properties #52 (previously getCreatedProperty ,f-ing confusing...)
    async getOwnedProperty({email}:{email:string}) {
        const user = await prisma.user.findUnique({
            where: {
                email: email
            }
        });
        
        if (!user) {
            throw new Error('User not found');
        }
        
            // Fetch all property IDs associated with the user from the Listing model
        const listings = await prisma.listing.findMany({
            where: {
                userId: user.id
            },
            select: {
                propertyId: true  // Only fetch propertyId
            }
        });
        
            // Extract property IDs from listings
        const propertyIds = listings.map(listing => listing.propertyId);
        
            // Get all Properties using the retrieved property IDs from the Property model
        const properties = await prisma.property.findMany({
            where: {
               id: {
                    in: propertyIds
                }
            }
        });
        
        return properties;
    }
    //#61 changed from 'getCreatedProperty'
    async getREAListedProperty({email}:{email:string}){
            // Retrieve user ID from the User model using the email
        const user = await prisma.user.findUnique({
            where: {
                email: email
            }
        });
        
        if (!user) {
            throw new Error('User not found');
        }
        
            // Fetch all property IDs associated with the user from the Ownership model
        const ownedproperties = await prisma.ownership.findMany({
            where: {
                userId: user.id
            },
            select: {
                propertyId: true  // Only fetch propertyId
            }
        });
        
            // Extract property IDs from ownedproperties
        const propertyIds = ownedproperties.map(ownedproperty => ownedproperty.propertyId);
        
            // Get all Properties using the retrieved property IDs from the Property model
        const properties = await prisma.property.findMany({
            where: {
               id: {
                    in: propertyIds
                }
            }
        });
        
        return properties;
    }
    //#50 
    async getSoldOwnedProperty({email}:{email:string}) {
        const user = await prisma.user.findUnique({
            where: {
                email: email
            }
        });
        
        if (!user) {
            throw new Error('User not found');
        }
        
            // Fetch all property IDs associated with the user from the Listing model
        const listings = await prisma.listing.findMany({
            where: {
                userId: user.id
            },
            select: {
                propertyId: true  // Only fetch propertyId
            }
        });
        
            // Extract property IDs from listings
        const propertyIds = listings.map(listing => listing.propertyId);
        
            // Get all Properties using the retrieved property IDs from the Property model
        const properties = await prisma.property.findMany({
            where: {
               id: {
                    in: propertyIds
                },
                onSale:false
            }
        });
        
        return properties;
    }
    
    
}

export class UserProfile {
    //search for a user profile using the rolename
    async getUserProfileId({ role }: { role: string }): Promise<string | null> {
        const userProfile = await prisma.userProfile.findUnique({
            where: {
                role:role
            }
        })

        return userProfile?.id || null
    }
    //admin makes new user profile
    async createUserProfile({role}: 
        { role: string }) {
        return await prisma.userProfile.create({
            data: {
                role,
                activated: true
            }
        })
    }
    //gets all user profiles
    async getUserProfile() {
        return await prisma.userProfile.findMany()
    }
    //get a single user profile #79
    async matchUserProfile({role}:{role:string}){
        return await prisma.userProfile.findFirst({
            where:{
                role:role
            }
        })
    }
    // TODO: implement this
    async setRoleName({ role, newrole }: { role: string, newrole: string }) {
        return await prisma.userProfile.update({
            where: {
                role: role
            },
            data: {
                role: newrole
            }
        });
    }
    //#78
    async suspendProfile({role}:{role:string}){
        return await prisma.userProfile.update({
            where:{
                role:role
            },
            data:{
                activated:false
            }
        })
    }

}

export class Property {
    //buyer view, properties with onSale false. 
    async getSoldProperty() {
        return await prisma.property.findMany({
            where: {
                onSale: false
            }
        })
    }
    //buyer view, properties with onSale true.
    async getOnSaleProperty() {
        return await prisma.property.findMany({
            where: {
                onSale: true
            }
        })
    }
    //buyer search for sold property by location.
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
    //buyer search for on sale property by location.
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
    //supposed to be to open agent account info by buyer or seller...this is called from the property info page.
    async getAgentDetails({ propertyId }: { propertyId: string }) {
        // Retrieve the listing that matches the propertyId and extract the userId
        const listing = await prisma.listing.findFirst({
            where: {
                propertyId: propertyId
            },
            select: {
                userId: true  // Select only the userId
            }
        });
    
        // Check if a listing was found and if it has a userId
        if (!listing || !listing.userId) {
            throw new Error('No agent found for this property');
        }
    
        // Retrieve and return the user details using the userId from the listing
        return await prisma.user.findUnique({
            where: {
                id: listing.userId
            }
        });
    }
    //this function is to view individual account information, should alr have their id in session because of login right? #179-#182 (decided to make them all into one function)
    async getUserAccountInfo({userId}:{userId:string}){
        return await prisma.user.findUnique({
            where:{
                id:userId
            }
        })
    }

    //just a few more entity functions... (8 more, from the property)

    

}

export const user = new User()
export const userProfile = new UserProfile()
export const property = new Property()
