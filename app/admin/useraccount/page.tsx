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



export default async function Page() {
    // const users = await viewUserProfile.getUserProfiles()
    // const users = await controller.viewUserAccountController.getUserInfo()
    const users = demo.user
    const session = await getSession()

    if (!users) {
        return;
    }


    return (
        <div>
            <h2 className=" text-2xl">Manage User Account</h2>
            <div className="button-group">
            </div>
            <UserTable users={users} />
        </div>
    )
}

export const revalidate = 60