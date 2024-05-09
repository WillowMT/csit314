import * as globalController from '@/utils/controllers/globalControllers'
import UserTable from "./table"

export default async function Page() {      
    const users = await globalController.viewUserAccountController.getUserInfo()
    
    const roles = await globalController.viewUserProfileController.getUserProfile()

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