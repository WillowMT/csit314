import { Button, Input } from "@nextui-org/react"
import UserTable from "./table"
import AddUserForm from "./add-user-form"
import { ViewUserProfileController, UserProfileSearchController } from "@/utils/controllers/userProfile"
import { getSession } from "@/utils/auth"
import { redirect } from "next/navigation"

export default async function Page({ params }: { params: { slug: string[] } }) {

    // check if admin
    const session = await getSession()

    if (!session || session?.role !== 'ADMIN') {
        redirect('/buy')
        return;
    }


    var profiles;

    if (params.slug.length > 0) {

        // search controller by URL
        let search = params.slug[0]

        if (search != "all") {

            const searchController = new UserProfileSearchController()
            profiles = await searchController.SearchUserProfile(search.toUpperCase())
        } else {
            const viewUserProfileController = new ViewUserProfileController()
            profiles = await viewUserProfileController.getUserProfile()
        }
    } else {
        redirect('/admin/userprofile/all')
    }


    // view controller



    return (
        <div>
            <h2 className=" text-2xl">Manage User Profile</h2>
            <div className="button-group">
                <form action={
                    async (data) => {
                        'use server'
                        const search = data.get('search') as string
                        redirect(`/admin/userprofile/${search}`)
                    }
                }
                >
                    <Input name="search" className="my-4 max-w-[400px]" placeholder="Search..." />
                </form>

                <div className="button-row space-x-2 mb-4">
                    <AddUserForm />
                </div>
            </div>
            <UserTable userProfiles={profiles} />
        </div>
    )
}

export const revalidate = 60