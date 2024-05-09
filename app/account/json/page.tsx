import { getSession } from "@/utils/auth"
import prisma from "@/utils/prisma"

export default async function Page() {

    const session = await getSession()


    if (!session.email) return <div>loading...</div>

    const data = await prisma.user.findUnique({
        where: {
            email: session.email
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