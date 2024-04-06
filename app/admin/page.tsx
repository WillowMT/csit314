import prisma from "@/utils/prisma"
import UserRow from "./form"

export default async function Page() {
    const users = await prisma.user.findMany({
        select: {
            id: true,
            email: true,
            firstName: true,
            lastName: true,
            role:true
        }
    })


return (
    <div className="">
        <div className=" bg-slate-700 text-white text-4xl py-4 px-4">Admin Page</div>
        <div className="p-4">
            <h2 className=" text-2xl">Users</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <UserRow id={user.id} email={user.email} role={user.role} />
                    </li>
                ))}
            </ul>
        </div>
    </div>
)
}

export const revalidate = 60