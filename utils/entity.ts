import { comparePassword } from "./hash";
import prisma from "./prisma";

export class User {
    static async SetInfo({ email, firstName, lastName, phoneNumber }: {
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

    static async login(email:string, password: string, role: string) {
        // check if user exists
        const user = await prisma.user.findUnique({
            where: {
                email,
                role: role as 'USER' | 'AGENT'
            }
        })

        if (!user) {
            return { error: true, message: "User does not exist" }
        }

        // check if password matches
        const passwordMatch = await comparePassword(password, user.passwordHash);

        if (!passwordMatch) {
            return { error: true, message: "Password is incorrect" }
        }

        return {
            error: false, message: "Login Success!", user: {
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                country: user.country,
                phoneNumber: user.phoneNumber,
                role: user.role
            }
        }
    }
}

