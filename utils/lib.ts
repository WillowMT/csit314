import { SessionOptions } from "iron-session";
import prisma from "./prisma";
import { comparePassword, encryptPassword } from "./hash";
import { SessionData, UserFormData } from "./types";

export const role = ['USER','SELLER','BUYER','REA_AGENT']

export const defaultSession: SessionData = {
    email: "",
    isLoggedIn: false,
    firstName: "",
    lastName: "",
    role: "",
    country: "",
    phoneNumber: "",
    activated: true
};

export const sessionOptions: SessionOptions = {
    password: "FihLkJFG19/fsNeUJFE5I1k7Rqwk3Q5IfCYyHrh/CaE=",
    cookieName: "iron-session-user-auth",
    cookieOptions: {
        secure: process.env.NODE_ENV === "production"
    },
};

export function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}



export async function loginUser(email: string, password: string, role: string) {
    // check if user exists
    const user = await prisma.user.findUnique({
        where: {
            email
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
        }
    }
}


export async function create(formObj: UserFormData): Promise<{ success: boolean, message: string }> {

    const { email, password, passwordConfirm, firstName, lastName, country, phoneNumber, ceaNumber, agency, license } = formObj;

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
            email,
            passwordHash,
            firstName,
            lastName,
            country,
            phoneNumber,
            ceaNumber,
            agency,
            license,
        }
    })

    // assign default role of USER
    // await prisma.userProfile.create({
    //     data: {
    //         role: "USER",
    //         activated: true
    //     }
    // })

    return { success: true, message: "User created successfully" };
}

export type { SessionData };
