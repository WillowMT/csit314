import Navigation from "@/components/nav";
import { Input, Button } from "@nextui-org/react";
import UserForm from "./form";
import { getSession } from "@/utils/auth";
import prisma from "@/utils/prisma";

export default async function Page() {
    const { email } = await getSession()

    const user = await prisma.user.findUnique({
        where: {
            email: email
        },
        include: {
            agent: true
        }
    })

    if (!user) return <div>loading...</div>

    return (
        <div>
            <h1 className=" text-4xl">Personal Page</h1>
            <UserForm fname={user.firstName} lname={user.lastName} email={email} phone={user.phoneNumber} agent={user.agent} />
        </div>
    )
}