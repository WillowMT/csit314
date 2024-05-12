import Navigation from "@/components/nav";
import UserForm from "./form";
import { getSession } from "@/utils/auth";
import { demo } from "@/utils/demo";


export default async function EditUserAccountPage() {
    const session = await getSession()

    const filteredSession = {
        firstName: session.firstName,
        lastName: session.lastName,
        email: session.email,
        phoneNumber: session.phoneNumber,
        role: session.role,
        country: session.country,
        license: session.license,
        ceaNumber: session.ceaNumber,
        agency: session.agency,
        activated: session.activated
    }

    const user = demo.user[0]
    
    if (!user) return <div>loading...</div>

    return (
        <div>
            <Navigation />
            <UserForm session={filteredSession}/>
        </div>
    )
}