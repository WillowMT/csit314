import { SessionOptions } from "iron-session";

export interface SessionData {
    email: string;
    firstName: string;
    lastName: string;
    role: string;
    country:string;
    phoneNumber:string;
    license?:string;
    ceaNumber?:string;
    agency?:string;
    jobDesignation?:string;
    isLoggedIn: boolean;
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