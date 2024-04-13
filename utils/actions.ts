'use server'

import { SessionData } from "./lib";
import { defaultSession, sessionOptions, sleep } from "./lib";
import { getIronSession, IronSession } from "iron-session";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import prisma from "./prisma";
import { User } from "./controller";
import { redirect } from "next/navigation";

export async function getSession(shouldSleep = true) {
    const session = await getIronSession<SessionData>(cookies(), sessionOptions);

    if (!session.isLoggedIn) {
        session.isLoggedIn = defaultSession.isLoggedIn;
        session.email = defaultSession.email;
        session.firstName = defaultSession.firstName;
        session.lastName = defaultSession.lastName;
        session.role = defaultSession.role;
        session.country = defaultSession.country;
        session.phoneNumber = defaultSession.phoneNumber;
    }


    return session;
}

export async function logout() {

    const session = await getSession(false);
    session.destroy();
    redirect("/")
}

export async function login(prevState:any, formData: FormData) {

    const session = await getSession();

    // look for user in db
    const role = formData.get("role") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const usr = new User(email)

    const result = await usr.login(password, role.toUpperCase())

    if (result.error) {
        return result;
    }

    const userInfo = await usr.getInfo();

    

    session.email = userInfo?.email || ""
    session.firstName = userInfo?.firstName || ""
    session.lastName = userInfo?.lastName || ""
    session.role = userInfo?.role || ""
    session.country = userInfo?.country || ""
    session.isLoggedIn = true;
    await session.save();
    redirect("/")
}