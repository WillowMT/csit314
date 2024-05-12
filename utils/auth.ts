'use server'

import { SessionData } from "./types";
import { defaultSession, sessionOptions, sleep } from "./lib";
import { getIronSession, IronSession } from "iron-session";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import prisma from "./prisma";
import { User } from "./entity";
import { redirect } from "next/navigation";
import { loginUser, create } from "./lib"

export async function getSession() {
    const session = await getIronSession<SessionData>(cookies(), sessionOptions);

    if (!session.email) {
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

    const session = await getSession();
    session.destroy();
    redirect("/")
}

export async function login(prevState: any, formData: FormData) {

    try {

        const session = await getSession();

        // look for user in db
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;


        const result = await loginUser(email, password)

        if (!result) {
            return null;
        }

        const userInfo = await prisma.user.findUnique({
            where: {
                email: email
            },
            select: {
                email: true,
                firstName: true,
                lastName: true,
                country: true,
                phoneNumber: true,
                profile: true,
                agency: true,
                license: true,
                activated: true,
                ceaNumber: true
            }
        })



        session.email = userInfo?.email || ""
        session.firstName = userInfo?.firstName || ""
        session.lastName = userInfo?.lastName || ""
        session.country = userInfo?.country || ""
        session.phoneNumber = userInfo?.phoneNumber || ""
        session.role = userInfo?.profile?.role || ""
        session.activated = userInfo?.profile?.activated || true
        session.agency = userInfo?.agency || ""
        session.license = userInfo?.license || ""
        session.ceaNumber = userInfo?.ceaNumber || ""
        session.activated = userInfo?.activated || true

        await session.save();

        redirect("/")
    } catch (error) {
        console.log(error);
        
    }

}