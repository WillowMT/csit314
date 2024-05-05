import prisma from "@/utils/prisma"
import UserRow from "./form"
// import "./admin.css"
import { Button, Input, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, User } from "@nextui-org/react"
// import { viewUserProfile } from "@/utils/controller"
import * as controller from '@/utils/controllers/globalControllers'
import Navigation from "@/components/nav"
import UserTable from "./table"
import AddUserForm from "./add-user-form"
import { getSession } from "@/utils/auth"

const columns = [
    { name: "ID", uid: "id" },
    { name: "EMAIL", uid: "role" },
    { name: "ROLE", uid: "status" },
    { name: "ACTION", uid: "actions" },
];


export default async function Page() {
    // const users = await viewUserProfile.getUserProfiles()
    const users = await controller.viewUserAccountController.getUserInfo()
    const session = await getSession()

    if (!users) {
        return;
    }


    return (
        <div className="  inset-0 absolute flex flex-col">
            <Navigation />
            <div className="  flex-grow">
                <div className="  h-full flex flex-col">
                    <div className=" bg-brand-500 text-white text-4xl py-4 px-4">Admin Page</div>
                    <div className=" flex  h-full">
                        <div className=" bg-brand-400 p-6 hidden md:block">
                            <div className="profile mb-6">
                                <img className=" w-10 h-10 rounded-full mb-4" src={`https://api.dicebear.com/8.x/initials/svg?seed=${session.firstName || "Demo"}`} />
                                <h2 className=" text-2xl">{session.firstName || "Demo User"}</h2>
                                <p className=" font-normal">{session.email || "demo@gmail.com"}</p>
                            </div>
                            <nav className=" flex flex-col space-y-2">
                                <Button className=" bg-brand-200">Dashboard</Button>
                                <Button className=" bg-brand-200">Manage User</Button>
                                <Button className=" bg-brand-200">Manage Agent</Button>
                                <Button className=" bg-brand-200">Manage Property</Button>
                            </nav>
                        </div>
                        <div className="p-4 right">
                            <h2 className=" text-2xl">Manage Users</h2>
                            <div className="button-group">
                                <Input className="my-4" placeholder="Search..." />

                                <div className="button-row space-x-2 mb-4">
                                    <AddUserForm />
                                </div>
                            </div>
                            <UserTable users={users} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const revalidate = 60