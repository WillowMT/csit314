
import { ViewUserAccountController } from "@/utils/controllers/user";
import UserTable from "./table"
import { ViewUserProfileController } from "@/utils/controllers/userProfile";

export default async function Page() {      

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