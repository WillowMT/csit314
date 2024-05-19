import Link from "next/link"
import { Button, Avatar, Dropdown, DropdownTrigger, DropdownItem, DropdownMenu, DropdownSection, User } from "@nextui-org/react"
import { getSession } from "@/utils/auth"
import Profile from "./profile"

const roles = ["BUYER", "SELLER", "ADMIN", "AGENT"]

const routes = {
    "BUYER": [
        {
            name: "Buy",
            route: "/buy"
        }
    ],
    "SELLER": [
        {
            name: "Sell",
            route: "/sell"
        }
    ],
    "ADMIN": [
        {
            name: "Admin",
            route: "/admin"
        }
    ],
    "AGENT": [{
        name: "Create Shortlist",
        route: "/property/shortlist"
    }]
}

export default async function Navigation() {
    const session = await getSession()

    return (
        <div className=" bg-brand-200">
            <nav className=" flex p-4">
                <div className=" grid place-content-center mr-auto sm:mr-0">
                </div>
                <div className="flex list-none space-x-10 mr-auto ml-8 text-sm underline">
                    <Link className="grid place-items-center hover:underline" href={"/buy"} style={{ width: "100px", height: "30px" }}>
                        <img src="/logo-nav.png" />
                    </Link>

                    {
                        session.role === "SELLER" && (
                            <Link className="grid place-items-center hover:underline" href={"/sell"}>Sell</Link>
                        )
                    }
                    <Link className={`place-items-center hover:underline ${session.role.includes("ADMIN") ? "grid" : "hidden"}`} href={"/admin"}>Admin</Link>
                    <Link className={`place-items-center hover:underline ${session.role.includes("AGENT") ? "grid" : "hidden"}`} href={"/property/shortlist"}>Create Property Listing</Link>
                </div>
                <div className="">
                    {
                        session.email ?
                            <Profile role={session.role} email={session.email} firstName={session.firstName} />
                            :
                            <div>
                                <Link href={"/signup"}>
                                    <Button className="mr-2">Sign Up</Button>
                                </Link>
                                <Link href={"/signin"}>
                                    <Button className="mr-2">Sign In</Button>
                                </Link>
                            </div>
                    }
                </div>
            </nav>
        </div>
    )
}
