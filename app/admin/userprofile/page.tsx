import { Input } from "@nextui-org/react"
import UserTable from "./table"
import AddUserForm from "./add-user-form"
import { ViewUserProfileController } from "@/utils/controllers/userProfile"

export default async function Page() {

    const viewUserProfileController = new ViewUserProfileController()
    const profiles = await viewUserProfileController.getUserProfile()

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