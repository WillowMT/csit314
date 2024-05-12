'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import { usePathname } from "next/navigation"

export default function AccountNav() {
    const pathName = usePathname()
    const router = useRouter()
    const [active, setActive] = useState(pathName)
    
    return(
        <div className="">
            <nav className=" list-none flex space-x-8 md:space-x-0 md:block md:space-y-5 font-extrabold">
                    <li className=" hover:cursor-pointer">
                        <a onClick={() => {
                            setActive("/account/personal")
                            router.push("/account/personal")
                        }} className={active === "/account/personal" ? "active" : ""}>Personal</a>
                    </li>
                    <li className=" hover:cursor-pointer">
                        <a onClick={() => {
                            setActive("/account/password")
                            router.push("/account/password")
                        }} className={active === "/account/password" ? "active" : ""}>Password</a>
                    </li>
                    <li className=" hover:cursor-pointer">
                        <a onClick={() => {
                            setActive("/account/json")
                            router.push("/account/json")
                        }} className={active === "/account/json" ? "active" : ""}>JSON</a>
                    </li>
            </nav>
        </div>
    )
}