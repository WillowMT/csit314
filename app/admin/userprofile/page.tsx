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
import { demo } from "@/utils/demo"

const columns = [
    { name: "ID", uid: "id" },
    { name: "EMAIL", uid: "role" },
    { name: "ROLE", uid: "status" },
    { name: "ACTION", uid: "actions" },
];


export default async function Page() {
    // const users = await viewUserProfile.getUserProfiles()
    // const users = await controller.viewUserAccountController.getUserInfo()
    const session = await getSession()

    const profiles = demo.userProfiles

    if (!profiles) {
        return;
    }


    return (
        <div>
            <h2 className=" text-2xl">Manage User Profile</h2>
            <div className="button-group">
                <Input className="my-4 max-w-[400px]" placeholder="Search..." />

                <div className="button-row space-x-2 mb-4">
                    <AddUserForm />
                </div>
            </div>
            <UserTable userProfiles={profiles} />
        </div>
    )
}

export const revalidate = 60