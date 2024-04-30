import { comparePassword, encryptPassword } from "./hash";
import { UserFormData } from "./lib";
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

     
    static async create(formObj: UserFormData): Promise<{ success: boolean, message: string }> {

        const { email, password, passwordConfirm, firstName, lastName, country, phoneNumber, ceaNumber, agency, license, jobDesignation } = formObj;

        if (password !== passwordConfirm) {
            return { success: false, message: "Passwords do not match" }
        }

        // check if user exists already
        const userExists = await prisma.user.findUnique({
            where: {
                email: email
            }
        })

        if (userExists) {
            return { success: false, message: "User already exists" }
        }

        // hash raw password
        const passwordHash = await encryptPassword(password);


        const user = await prisma.user.create({
            data: {
                email: email,
                passwordHash: passwordHash,
                firstName: firstName,
                lastName: lastName,
                country: country,
                phoneNumber: phoneNumber,
                role: ceaNumber && agency && license && jobDesignation ? 'AGENT' : 'USER'
            }
        })

        // check if agent
        if (ceaNumber && agency && license && jobDesignation) {
            await prisma.agent.create({
                data: {
                    ceaNumber: ceaNumber,
                    agency: agency,
                    license: license,
                    jobDesignation: jobDesignation,
                    User: {
                        connect: {
                            id: user.id
                        }
                    }
                }
            })
        }

        return { success: true, message: "User created successfully" };
    }

}

