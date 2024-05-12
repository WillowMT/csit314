
import { ViewUserAccountController, UserAccountSearchController } from "@/utils/controllers/user";
import UserTable from "./table"
import { ViewUserProfileController } from "@/utils/controllers/userProfile";
import { getSession } from "@/utils/auth";
import { redirect } from "next/navigation";
import { UserInterface } from "@/utils/demo";

export default async function Page({ params }: { params: { slug: string[] } }) {

    var users:UserInterface[];
    if (params.slug.length > 0) {

        // search controller by URL
        let search = params.slug[0]

        if (search != "all") {
            // call search controller
            const searchController = new UserAccountSearchController()
            users = await searchController.SearchUserAcount(search) as UserInterface[]

        } else {
            // call view controller
            const viewUserAccountController = new ViewUserAccountController()
            users = await viewUserAccountController.getUserInfo()
        }
    } else {
        redirect('/admin/useraccount/all')
    }

    // check if admin
    const session = await getSession()

    if (!session || session?.role !== 'ADMIN') {
        redirect('/buy')
    }

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