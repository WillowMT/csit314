'use server'
import prisma from "@/utils/prisma";
import { encryptPassword } from "@/utils/hash";

export async function submit(previousState:any, form: FormData) {
    'use server'
    const email = form.get('email') as string
    const password = form.get('password') as string
    const passwordConfirm = form.get('passwordConfirm') as string
    const firstName = form.get('firstName') as string
    const lastName = form.get('lastName') as string
    const country = form.get('country') as string
    const phoneNumber = form.get('phoneNumber') as string
    const ceaNumber = form.get('ceaNumber') as string | null
    const agency = form.get('agency') as string | null
    const license = form.get('license') as string | null
    const jobDesignation = form.get('jobDesignation') as string | null


    if (password !== passwordConfirm) {
        return {success:false, message: "Passwords do not match"}
    }

    // check if user exists already
    const userExists = await prisma.user.findUnique({
        where:{
            email: email
        }
    })

    if (userExists) {
        return {success:false, message: "User already exists"}
    }

    const passwordHash = await encryptPassword(password);


    const user = await prisma.user.create({
        data: {
            email: email,
            passwordHash: passwordHash,
            firstName: firstName,
            lastName: lastName,
            country: country,
            phoneNumber: phoneNumber
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

    return {success:true, message: `User ${user.id} created successfully!`}

}