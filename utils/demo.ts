
import { faker } from '@faker-js/faker';

export function createRandomUser() {
    return {
        id: faker.string.uuid(),
        profileId: faker.string.uuid(),
        email: faker.internet.email(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        phoneNumber: faker.phone.number(),
        passwordHash: faker.internet.password(),
        country: faker.location.country(),
        ceaNumber: faker.string.nanoid(),
        agency: faker.company.name(),
        license: faker.string.nanoid(),
        profile: {
            role: faker.helpers.arrayElement(['USER', 'AGENT', 'ADMIN']),
            activated: faker.helpers.arrayElement([true, false])
        },
        activated:faker.helpers.arrayElement([true, false])
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
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        address: faker.location.streetAddress(),
        description: faker.commerce.productDescription(),
        onSale: faker.helpers.arrayElement([true, false]),
        views: faker.number.int(),
        bedroom: faker.number.int(),
        bathroom: faker.number.int(),
        leaseYear: faker.number.int(),
        squareFt: faker.number.int(),
        builtYear: faker.number.int(),
        price: faker.number.int({min: 100000, max: 1000000}),
        imageUrl: faker.image.url(),
        activated: faker.helpers.arrayElement([true, false]),
    };

}

export function createRatingsAndReviews () {
    return {
        id: faker.string.nanoid(),
        userId: faker.string.nanoid(),
        rating: faker.number.int({min: 1, max: 5}),
        review: faker.lorem.sentence()
    }

}


type UserInterface = ReturnType<typeof createRandomUser>

type UserProfileInterface = ReturnType<typeof createRandomUserProfile>

type PropertyInterface = ReturnType<typeof createRandomProperty>

const user = [
    createRandomUser(),
    createRandomUser(),
    createRandomUser(),
    createRandomUser(),
    createRandomUser(),
    createRandomUser(),
    createRandomUser(),
    createRandomUser(),
    createRandomUser(),
    createRandomUser(),
    createRandomUser(),
    createRandomUser(),
    createRandomUser(),
    createRandomUser(),
]


const userProfiles = [
    createRandomUserProfile(),
    createRandomUserProfile(),
    createRandomUserProfile(),
    createRandomUserProfile(),
    createRandomUserProfile(),
]


const properties = [
    createRandomProperty(),
    createRandomProperty(),
    createRandomProperty(),
    createRandomProperty(),
    createRandomProperty(),
    createRandomProperty(),
    createRandomProperty(),
    createRandomProperty(),
    createRandomProperty(),
    createRandomProperty(),
    createRandomProperty(),
    createRandomProperty(),
    createRandomProperty(),
    createRandomProperty(),
    createRandomProperty(),
    createRandomProperty(),
    createRandomProperty(),
    createRandomProperty(),
]

const ratingsAndReviews = []

const shortlist = []

const listing = []

const ownership = []

export const demo = {
    user, userProfiles, properties
}

export type {
    UserInterface,
    UserProfileInterface,
    PropertyInterface
}