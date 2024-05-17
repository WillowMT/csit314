
import { faker } from '@faker-js/faker';
import { encryptPassword } from './hash';

export function createRandomUser(role?: string): UserInterface {
    return {
        id: faker.string.uuid(),
        profileId: faker.string.uuid(),
        email: faker.internet.email(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        phoneNumber: faker.phone.number(),
        passwordHash: faker.internet.password(),
        country: faker.location.country(),
        ceaNumber: faker.string.nanoid() as string | undefined,
        agency: faker.company.name() as string | undefined,
        license: faker.string.nanoid() as string | undefined,
        profile: {
            role: role || faker.helpers.arrayElement(['BUYER', 'SELLER', 'AGENT', 'ADMIN']),
            activated: faker.helpers.arrayElement([true, false])
        } as { role: string, activated: boolean } | undefined,
        activated: faker.helpers.arrayElement([true, false]),
        publicId: faker.string.nanoid()
    };
}

export function createRandomUserProfile() {
    return {
        id: faker.string.uuid(),
        role: faker.helpers.arrayElement(['USER', 'AGENT', 'ADMIN']),
        activated: faker.helpers.arrayElement([true, false]),
    };
}

export function createRandomProperty() {
    return {
        id: faker.string.nanoid() as string | undefined | null,
        name: faker.location.secondaryAddress(),
        address: faker.location.streetAddress(),
        description: faker.lorem.sentence(),
        onSale: faker.helpers.arrayElement([true, false]),
        views: faker.number.int({ min: 100, max: 10000 }) as number | null,
        bedroom: faker.number.int({ min: 1, max: 4 }),
        bathroom: faker.number.int({ min: 1, max: 3 }),
        leaseYear: faker.number.int({ min: 1900, max: 2024 }),
        squareFt: faker.number.int({ min: 30, max: 50 }),
        builtYear: faker.number.int({ min: 1900, max: 2024 }),
        price: faker.number.int({ min: 100000, max: 1000000 }),
        imageUrl: faker.image.url(),
        activated: faker.helpers.arrayElement([true, false]),
        propertyType: faker.helpers.arrayElement(['HDB', 'CONDO', 'LANDED']),
        publicId: faker.string.nanoid() as string | undefined | null
    };
}

export function createRatingsAndReviews() {
    return {
        id: faker.string.nanoid(),
        userId: faker.string.nanoid(),
        rating: faker.number.int({ min: 1, max: 5 }),
        review: faker.lorem.sentence()
    }

}


type UserInterface = {
    id?: string;
    profileId?: string | null;
    email: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    passwordHash?: string;
    country?: string;
    ceaNumber?: string | undefined | null;
    agency?: string | undefined | null;
    license?: string | undefined | null;
    profile?: {
        role: string, activated: boolean
    } | undefined;
    activated?: boolean;
    publicId?: string;
    role?: string
    ownership?: any[] | undefined | null
    shortList?: any[] | undefined | null
    listing?: any[] | undefined | null
    ratingAndReview?: any[] | undefined | null
}

type PropertyInterface = {
    id?: string | undefined | null;
    name: string;
    address: string;
    description: string;
    onSale: boolean;
    views?: number | null;
    bedroom: number;
    bathroom: number;
    leaseYear: number;
    squareFt: number;
    builtYear: number;
    price: number;
    imageUrl: string;
    activated: boolean;
    propertyType: string;
    publicId?: string | undefined | null;
    shortList?:any[]
}

type UserProfileInterface = ReturnType<typeof createRandomUserProfile>

// type PropertyInterface = ReturnType<typeof createRandomProperty>

type RatingsAndReviewsInterface = ReturnType<typeof createRatingsAndReviews>


// generate demo data

const user = [...new Array(10)].map(() => createRandomUser());

const userProfiles = [...new Array(5)].map(() => createRandomUserProfile());

const properties = [...new Array(20)].map(() => createRandomProperty());

const ratingsAndReviews = [...new Array(20)].map(() => createRatingsAndReviews());

const shortlist = []

const listing = []

const ownership = []

export const demo = {
    user, userProfiles, properties, ratingsAndReviews
}

export type {
    UserInterface,
    UserProfileInterface,
    PropertyInterface
}