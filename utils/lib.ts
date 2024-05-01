import { SessionOptions } from "iron-session";
import prisma from "./prisma";
import { comparePassword, encryptPassword } from "./hash";

export interface SessionData {
    email: string;
    firstName: string;
    lastName: string;
    role: string;
    country: string;
    phoneNumber: string;
    license?: string;
    ceaNumber?: string;
    agency?: string;
    jobDesignation?: string;
    isLoggedIn: boolean;
}

export interface UserFormData {
    email: string;
    password: string;
    passwordConfirm: string;
    firstName: string;
    lastName: string;
    country: string;
    phoneNumber: string;
    ceaNumber: string | null;
    agency: string | null;
    license: string | null;
    jobDesignation: string | null;
}

export const defaultSession: SessionData = {
    email: "",
    isLoggedIn: false,
    firstName: "",
    lastName: "",
    role: "",
    country: "",
    phoneNumber: ""
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


export async function create(formObj: UserFormData): Promise<{ success: boolean, message: string }> {

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