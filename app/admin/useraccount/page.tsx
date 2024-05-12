
import { ViewUserAccountController } from "@/utils/controllers/user";
import UserTable from "./table"
import { ViewUserProfileController } from "@/utils/controllers/userProfile";
import { getSession } from "@/utils/auth";
import { redirect } from "next/navigation";

export default async function Page() {    
    
    // check if admin
    const session = await getSession()

    if (!session || session?.role !== 'ADMIN') {
        redirect('/buy')
        return;
    }


    const viewUserAccountController = new ViewUserAccountController()
    const users = await viewUserAccountController.getUserInfo()

    const viewUserProfileController = new ViewUserProfileController()
    const roles = await viewUserProfileController.getUserProfile()

    if (!users) {
        return;
    }


    return (
        <div>
            <h2 className=" text-2xl">Manage User Account</h2>
            <div className="button-group">
            </div>
            <UserTable users={users} roles={roles} />
        </div>
    )
}