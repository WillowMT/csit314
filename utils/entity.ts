import { revalidatePath } from "next/cache";
import { getSession } from "./auth";
import { comparePassword, encryptPassword } from "./hash";

import prisma from "./prisma";
import { PropertyInterface, UserInterface } from "./demo";

export class User {
    email = ""

    async getUserId({ email }: { email: string }): Promise<string | null> {
        const user = await prisma.user.findUnique({
            where: {
                email
                , activated: true
            }
        })

        return user?.id || null
    }

    setEmail(email: string) {
        this.email = email
    }

    //We can use this for system admin and buyer,seller, rea for their personal details. #44, #57, #72, #smth idr
    async setInfo(user: UserInterface) {
        // update user info
        return await prisma.user.update({
            where: {
                email: user.email
            },
            data: {
                firstName: user.firstName,
                lastName: user.lastName,
                phoneNumber: user.phoneNumber,
                ceaNumber: user.ceaNumber,
                agency: user.agency,
                license: user.license,
                country:user.country
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
    //#179, #180, #181, #182 For personal account info access
    async getAccountInfo({ userId }: {
        userId: string
    }) {
        return await prisma.user.findUnique({
            where: {
                id: userId
            }
        })
    }
    //showdis
    // # 70 system admin creates new user account
    async createUserAccount(user: UserInterface) {
        // Attempt to find the userProfile by role
        const profile = await prisma.userProfile.findFirst({
            where: {
                role: user.role
            },
            select: {
                id: true  // Select only the ID field
            }
        });

        // Check if a userProfile was found and extract the ID, otherwise use null
        const profileId = profile ? profile.id : null;
        const country= user.country? user.country:"";
        // Create the user with the potentially null userProfile ID
        return await prisma.user.create({
            data: {
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                passwordHash: user.passwordHash!,
                phoneNumber: user.phoneNumber,
                country: country,
                ceaNumber: user.ceaNumber,
                agency: user.agency,
                license: user.license,
                profileId: profileId
            }
        })


    }
    //showdis
    // #71, will change from getUserInfo to this
    async getAllUsers() {
        return await prisma.user.findMany({
            select: {
                id: true,
                profileId: true,
                email: true,
                firstName: true,
                lastName: true,
                phoneNumber: true,
                passwordHash: true,
                country: true,
                ceaNumber: true,
                agency: true,
                license: true,
                profile: {
                    select: {
                        role: true,
                        activated: true
                    }
                },
                activated: true,
                publicId: true
            }
        }) as UserInterface[]
    }
    //#36 buyer adds property to shortlist
    async addPropertyToShortList({ email, propertyId }: { email: string, propertyId: string }) {
        const id = await this.getUserId({ email })
        if (!id) throw new Error('User not found')

        // check if shortlist already exists

        const shortlist = await prisma.shortlist.findFirst({
            where: {
                userId: id,
                propertyId
            }
        }
        )
        if (shortlist) throw new Error('Property already in shortlist')

        return await prisma.shortlist.create({
            data: {
                userId: id,
                propertyId
            }
        })
    }
    //#49 seller search agent. (Can be reused for #49??)
    async searchAgent({ fname }: { fname: string }) {
        return await prisma.userProfile.findFirst({
            where: {
                role: "AGENT"
            },
            include:{
                user:{
                    where:{
                        firstName:{
                            contains:fname
                        },
                        activated: true,
                    }
                }
            }
        });
    }
    //get the ratingsandreviews of an agent. ratings and reviews are anonymous (this can be reused for #51)
    async getRatingsAndReviews({ email }: { email: string }) {
        const id = await this.getUserId({ email })
        if (!id) return null
        return await prisma.ratingsAndReviews.findMany({
            where: {
                userId: id
            }
        })
    }
    //we're supposed to have individual getREARating and getREAReviews, but screw that, we'll fix the diagrams #66, #67

    // anonymous rating, make it so that either rating or review is optional, since tutor tell us to split rating and review.
    // rating default 0 ,and for null review just give "".
    // or just make it a duplicate function lol
    //#53
    async createRating({ email, rating, review }: {
        email: string, rating?: number, review?: string
    }) {
        const id = await this.getUserId({ email })

        return await prisma.ratingsAndReviews.create({
            data: {
                userId: id || null,
                rating: rating || null,
                review: review || ""
            }
        })
    }
    //why do we have to do this too ...can you help figure out what to do with this one, by that i mean should we just combine them
    //54
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
    async matchUserAccount({ fname }: { fname: string }) {
        return await prisma.user.findMany({
            where: {
                firstName: {
                    contains: fname
                }
            }
        })
    }
    //#73
    async suspendUserAccount({ email }: { email: string }) {
        const agentProfile = await prisma.userProfile.findFirst({
            where: {
                role: "AGENT"
            },
            select: {
                id: true
            }
        });

        const sellerProfile = await prisma.userProfile.findFirst({
            where: {
                role: "SELLER"
            },
            select: {
                id: true
            }
        });

        const agentProfileId = agentProfile ? agentProfile.id : null;
        const sellerProfileId = sellerProfile ? sellerProfile.id : null;

        const user = await prisma.user.findFirst({
            where: {
                email: email
            },
            select: {
                id: true,
                profileId: true
            }
        });

        const userProfileId = user ? user.profileId : null;

        if (userProfileId === agentProfileId) {
            // Logic for AGENT user profile
            const userId = user ? user.id : null;
            const listings = await prisma.listing.findMany({
                where: {
                    userId: userId
                },
                select: {
                    propertyId: true
                }
            });
            const propertyIds = listings.map(listing => listing.propertyId);
            const deactivateListedProperties = await prisma.property.updateMany({
                where: {
                    id: {
                        in: propertyIds
                    }
                },
                data: {
                    activated: false
                }
            });
            const deactivateAgent = await prisma.user.update({
                where: {
                    email: email
                },
                data: {
                    activated: false
                }
            });
            return { deactivateListedProperties, deactivateAgent };
        } else if (userProfileId === sellerProfileId) {
            // Logic for SELLER user profile
            const ownerId = user ? user.id : null;
            const ownedproperties = await prisma.ownership.findMany({
                where: {
                    userId: ownerId
                },
                select: {
                    propertyId: true
                }
            });
            const propertyIds = ownedproperties.map(property => property.propertyId);
            const deactivateOwnedProperties = await prisma.property.updateMany({
                where: {
                    id: {
                        in: propertyIds
                    }
                },
                data: {
                    activated: false
                }
            });
            const deactivateSeller = await prisma.user.update({
                where: {
                    email: email
                },
                data: {
                    activated: false
                }
            });
            return { deactivateOwnedProperties, deactivateSeller };
        } else {
            // Default case for other user profiles
            return await prisma.user.update({
                where: {
                    email: email
                },
                data: {
                    activated: false
                }
            });
        }
    }
    //seller's owned properties #52 (previously getCreatedProperty ,f-ing confusing...)
    async getOwnedProperty({ email }: { email: string }) {
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
                , activated: true
            }
        });

        return properties;
    }
    //#61 changed from 'getCreatedProperty'
    async getREAListedProperty({ email }: { email: string }) {
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
                , activated: true
            }
        });

        return properties;
    }
    //#50 
    async getAgentSoldProperty({ email }: { email: string }) {
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
                onSale: false,
                activated: true
            }
        });

        return properties;
    }
    //#252 get the list of shortlisted properties
    async getShortlist({ userId }: { userId: string }) {
        const shortlistedpropid = await prisma.shortlist.findMany({
            where: {
                userId: userId
            },
            select: {
                propertyId: true
            }
        })
        const shortlistedpropids = shortlistedpropid.map(propertyId => propertyId.propertyId)
        const shortlistedprops = await prisma.property.findMany({
            where: {
                id: {
                    in: shortlistedpropids
                },
                activated: true
            }
        })
        return shortlistedprops
    }
    //#253 delete shortlist
    async deleteShortlist({ email, propertyId }: { email: string, propertyId: string }) {
        const id = await this.getUserId({ email })

        if (!id) throw new Error('User not found')

        const shortlist = await prisma.shortlist.findFirst({
            where: {
                userId: id,
                propertyId: propertyId
            }
        })

        if (!shortlist) throw new Error('Shortlist not found')
        return await prisma.shortlist.delete({
            where: {
                id: shortlist.id
            }
        })
    }

    async login({ email, password }: { email: string, password: string }) {
        // check if user exists
        const user = await prisma.user.findUnique({
            where: {
                email
            },
            include: {
                profile: {
                    select: {
                        role: true
                    }
                }
            }
        })

        if (!user) {
            throw new Error('User not found');
        }

        // check if password matches
        const passwordMatch = await comparePassword(password, user.passwordHash);

        if (!passwordMatch) {
            throw new Error('Invalid Password');
        }

        return user
    }
    async logout() {
        const session = await getSession();
        await session.destroy();
    }

}

export class UserProfile {
    //search for a user profile using the rolename
    async getUserProfileId({ role }: { role: string }): Promise<string | null> {
        const userProfile = await prisma.userProfile.findFirst({
            where: {
                role: role
            }
        })

        return userProfile?.id || null
    }
    //admin makes new user profile
    async createUserProfile({ role }:
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
    async matchUserProfile({ role }: { role: string }) {
        return await prisma.userProfile.findMany({
            where: {
                role: {
                    contains: role
                }
            }
        })
    }
    // TODO: implement this
    async setRoleName({ role, newrole, activated }: { role: string, newrole: string, activated: boolean }) {
        return await prisma.userProfile.updateMany({
            where: {
                role: role
            },
            data: {
                role: newrole,
                activated
            }
        });
    }
    //#78
    async suspendProfile({ role }: { role: string }) {
        return await prisma.userProfile.updateMany({
            where: {
                role: role
            },
            data: {
                activated: false
            }
        })
    }

}

export class Property {
    //buyer view, properties with onSale false. 
    async getSoldProperty() {
        return await prisma.property.findMany({
            where: {
                onSale: false,
                activated: true
            }
        })
    }
    //buyer view, properties with onSale true.
    async getOnSaleProperty() {
        return await prisma.property.findMany({
            where: {
                activated: true,
                onSale: true
            }
        })
    }
    //buyer search for sold property by location.
    async getSoldPropertybyLoc({ address }: { address: string }) {
        return await prisma.property.findMany({
            where: {
                activated: true,
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
                activated: true,
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


    //just a few more entity functions... (8 more, from the property)
    //#60 
    async createPropertyListing(lister_email: string, owner_email: string, property: PropertyInterface) {

        const lister = await prisma.user.findUnique({
            where: {
                email: lister_email
            }
        })

        if (!lister?.id) return null

        const owner = await prisma.user.findUnique({
            where: {
                email: owner_email
            }
        })

        if (!owner?.id) return null

        const propertyListing = await prisma.property.create({
            data: {
                name: property.name,
                address: property.address,
                description: property.description,
                onSale: property.onSale,
                leaseYear: property.leaseYear,
                squareFt: property.squareFt,
                builtYear: property.builtYear,
                price: property.price,
                imageUrl: property.imageUrl,
                bedroom: property.bedroom,
                bathroom: property.bathroom,
                views: property.views,
                propertyType: property.propertyType
            }
        })

        const Listing = await prisma.listing.create({
            data: {
                userId: lister.id,
                propertyId: propertyListing.id
            }
        })

        const Ownership = await prisma.ownership.create({
            data: {
                userId: owner.id,
                propertyId: propertyListing.id
            }
        })

        return { propertyListing, Listing, Ownership }
    }
    //#63
    async suspendListedProperty({ propertyId }: { propertyId: string }) {
        return await prisma.property.update({
            where: {
                id: propertyId
            },
            data: {
                activated: false
            }
        })
    }
    //#64
    async searchListedPropertyByAddress({ email, address }: { email: string, address: string }) {
        const lister = await prisma.user.findUnique({
            where: {
                email: email
            },
            select: {
                id: true
            }
        })
        const listerID = lister ? lister.id : undefined
        const listedPropIds = await prisma.listing.findMany({
            where: {
                userId: listerID
            },
            select: {
                propertyId: true
            }
        })
        const listedPropIdList = listedPropIds.map(listing => listing.propertyId);
        return await prisma.property.findMany({
            where: {
                address: address,
                id: {
                    in: listedPropIdList
                }
            }
        })
    }
    //#62
    async setPropInfoChange(property: PropertyInterface) {
        return await prisma.property.update({
            where: {
                id: property.id as string
            },
            data: {
                name: property.name,
                address: property.address,
                description: property.description,
                onSale: property.onSale,
                leaseYear: property.leaseYear,
                squareFt: property.squareFt,
                builtYear: property.builtYear,
                price: property.price,
                imageUrl: property.imageUrl,
                bedroom: property.bedroom,
                bathroom: property.bathroom,
                propertyType: property.propertyType,
                activated: property.activated
            }
        })
    }
    //#55
    async getPropertyShortlistCount({ propertyid }: { propertyid: string }) {
        return await prisma.shortlist.count({
            where: {
                propertyId: propertyid
            }
        })
    }
    //#56
    async getPropertyViews({ propertyid }: { propertyid: string }) {
        return await prisma.property.findFirst({
            where: {
                id: propertyid
            },
            select: {
                views: true
            }
        })
    }
    //#45
    async calculateMortgage({ price, loantermyears, monthlyinterest }: { price: number, loantermyears: number, monthlyinterest: number }) {
    
        const numerator = monthlyinterest * Math.pow(1 + (monthlyinterest / 100), loantermyears * 12)
        const denominator = Math.pow(1 + (monthlyinterest / 100), loantermyears * 12) - 1
        const monthlyPayment = price * (numerator / denominator)
        return monthlyPayment
    }
    //#243, 242, 241 - >you can use for buyer, seller, or real estate agent.
    async getPropertyInfo({ propertyid }: { propertyid: string }) {
        return await prisma.property.findFirst({
            where: {
                id: propertyid
            }
        })
    }

    async getAllProperties() {
        return await prisma.property.findMany({take:20})
    }
}
//showdis
export const userEntity = new User()
export const userProfileEntity = new UserProfile()
export const propertyEntity = new Property()
