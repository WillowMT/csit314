import Link from "next/link"
import { Button, Avatar, Dropdown, DropdownTrigger, DropdownItem, DropdownMenu, DropdownSection, User } from "@nextui-org/react"
import { getSession } from "@/utils/actions"
import Profile from "./profile"

export default async function Navigation() {
    const session = await getSession()
    

    return (
        <div className="border-b bg-brand-200">
            <nav className=" flex p-4">
                <div className=" grid place-content-center mr-auto sm:mr-0">
                    <Link href={"/"}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                    </Link>
                </div>
                <div className=" sm:flex list-none space-x-10 hidden mr-auto ml-8 text-sm underline">
                    <Link className="grid place-items-center hover:underline" href={"/buy"}>Buy</Link>
                    <Link className="grid place-items-center hover:underline" href={"/mortage"}>Calculate Mortage</Link>
                    <Link className="grid place-items-center hover:underline" href={"/mongodb"}>Mongodb</Link>
                </div>
                <div className="">
                    {
                        session.isLoggedIn ? 
                        <Profile email={session.email} firstName={session.firstName} />
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
