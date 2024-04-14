import { useState, useEffect } from "react"
import { useLocalStorage } from '@uidotdev/usehooks'
import { getSession } from "@/utils/actions"
import Navigation from "@/components/nav"
import prisma from "@/utils/prisma"

export default async function Page() {

    const session = await getSession()


    if (!session.email) return <div>loading...</div>

    const data = await prisma.user.findUnique({
        where: {
            email: session.email
        },
        include: {
            agent: true
        }
    })


    return (
        <div>
            <h2 className=" text-4xl mb-8">(Hidden in Production)</h2>
            <pre>
                {JSON.stringify(data, null, 2)}
            </pre>

        </div>
    )
}