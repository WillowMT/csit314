import { comparePassword, encryptPassword } from "./hash";

import prisma from "./prisma";

export class User {

    // create
    static async createReview() {}

    static async createRating() {}

    // read

    static async getRatingsAndReviews() { }

    static async matchUserAccount(email: string) {
        const user = await prisma.user.findUnique({
            where: {
                email
            }
        })

        return user

    }

    // update

    static async setInfo({ email, firstName, lastName, phoneNumber }: {
        email: string;
        firstName: string;
        lastName: string;
        phoneNumber: string;

    }) {
        const user = await prisma.user.update({
            where: {
                email: email
            },
            data: {
                firstName,
                lastName,
                phoneNumber
            }
        })

        return user
    }




}



export class Property {

    // read 
    
    static async getOnSaleProperty() {
        const properties = await prisma.property.findMany({
            where: {
                onSale: true
            }
        })

        return properties
    }
}
