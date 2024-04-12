'use client'

import { usePathname } from "next/navigation"
import Link from "next/link"
import { Button } from "@nextui-org/react"

const hiddenRoutes = ['/signup', '/signin']

export default function Navigation() {
    const pathname = usePathname()
    console.log(pathname);

    if (hiddenRoutes.includes(pathname)) return null

    return (
        <div className="border-b">
            <nav className=" flex justify-between p-4">
                <div className=" grid place-content-center"><Link href={"/"}>PropertyGuru</Link></div>
                <div className=" sm:flex list-none space-x-10 hidden">
                    <Link className="grid place-items-center hover:underline" href={"/user"}>User</Link>
                    <Link className="grid place-items-center hover:underline" href={"/agent"}>Agent</Link>
                    <Link className="grid place-items-center hover:underline" href={"/admin"}>Admin</Link>
                    <Link className="grid place-items-center hover:underline" href={"/property"}>Property</Link>
                    <Link className="grid place-items-center hover:underline" href={"/mongodb"}>Mongodb</Link>
                </div>
                <div className="flex space-x-2">
                    <Button className="" ><Link href={"/signup"}>Sign Up</Link></Button>
                    <Button className="" ><Link href={"/signin"}>Sign In</Link></Button>

                </div>
            </nav>
        </div>
    )
}