
import { faker } from '@faker-js/faker';

function createRandomUser() {
    return {
        id: faker.string.uuid(),
        profileId: faker.string.uuid(),
        email: faker.internet.email(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        phoneNumber: faker.number.int(),
        passwordHash: faker.internet.password(),
        country: faker.location.country(),
        ceaNumber: faker.number.int(),
        agency: faker.company.name(),
        license: faker.number.int(),
        profile: {
            role: faker.helpers.arrayElement(['USER', 'AGENT', 'ADMIN']),
            activated: faker.helpers.arrayElement([true, false])
        },
        activated:faker.helpers.arrayElement([true, false])
    };
}

function createRandomUserProfile() {
    return {
        id: faker.string.uuid(),
        role: faker.helpers.arrayElement(['USER', 'AGENT', 'ADMIN']),
        activated: faker.helpers.arrayElement([true, false]),
    };
}

function createRandomProperty() {
    return {
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        address: faker.location.streetAddress(),
        description: faker.commerce.productDescription(),
        onSale: faker.helpers.arrayElement([true, false]),
        bedrooms: faker.number.int(),
        bathrooms: faker.number.int(),
        leaseYears: faker.number.int(),
        squareFt: faker.number.int(),
        builtYear: faker.number.int(),
        price: faker.commerce.price(),
        views: faker.number.int(),
        imageUrl: faker.image.url(),
        activated: faker.helpers.arrayElement([true, false]),
    };

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