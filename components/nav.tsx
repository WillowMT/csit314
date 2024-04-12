'use client'

import { usePathname } from "next/navigation"
import Link from "next/link"
import { Button, Avatar, Dropdown, DropdownTrigger, DropdownItem, DropdownMenu, DropdownSection, User } from "@nextui-org/react"
import { useRouter } from "next/navigation"

const hiddenRoutes = ['/signup', '/signin']

export default function Navigation() {
    const router = useRouter()
    const pathname = usePathname()

    if (hiddenRoutes.includes(pathname)) return null

    const user = true

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
                    {/* <Link className="grid place-items-center hover:underline" href={"/agent"}>Agent</Link>
                    <Link className="grid place-items-center hover:underline" href={"/admin"}>Admin</Link>
                    <Link className="grid place-items-center hover:underline" href={"/property"}>Property</Link> */}
                    <Link className="grid place-items-center hover:underline" href={"/mongodb"}>Mongodb</Link>
                </div>
                <div className="">
                    {
                        !user ? (
                            <div className=" flex space-x-2">

                                <Link href={"/signup"}>
                                    <Button className="">
                                        Sign Up
                                    </Button>
                                </Link>
                                <Link href={"/signin"}>
                                    <Button className="">
                                        Sign In
                                    </Button>
                                </Link>
                            </div>

                        ) : (
                            <Dropdown
                                radius="sm"
                                classNames={{
                                    content: "p-0 border-small border-divider bg-background",
                                }}
                            >
                                <DropdownTrigger>
                                    <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                                </DropdownTrigger>
                                <DropdownMenu
                                    aria-label="Custom item styles"
                                    disabledKeys={["profile"]}
                                    className="p-3"
                                    itemClasses={{
                                        base: [
                                            "rounded-md",
                                            "text-default-500",
                                            "transition-opacity",
                                            "data-[hover=true]:text-foreground",
                                            "data-[hover=true]:bg-default-100",
                                            "dark:data-[hover=true]:bg-default-50",
                                            "data-[selectable=true]:focus:bg-default-50",
                                            "data-[pressed=true]:opacity-70",
                                            "data-[focus-visible=true]:ring-default-500",
                                        ],
                                    }}
                                >
                                    <DropdownSection aria-label="Profile & Actions" showDivider>
                                        <DropdownItem
                                            isReadOnly
                                            key="profile"
                                            className="h-14 gap-2 opacity-100"
                                        >
                                            <User
                                                name="Junior Garcia"
                                                description="@jrgarciadev"
                                                classNames={{
                                                    name: "text-default-600",
                                                    description: "text-default-500",
                                                }}
                                                avatarProps={{
                                                    size: "sm",
                                                    src: "https://avatars.githubusercontent.com/u/30373425?v=4",
                                                }}
                                            />
                                        </DropdownItem>
                                        <DropdownItem key="dashboard">
                                            Dashboard
                                        </DropdownItem>
                                        <DropdownItem key="settings">
                                            <Link href={'/account'}>
                                                Settings
                                            </Link>
                                        </DropdownItem>
                                        <DropdownItem
                                            key="new_project"
                                        >
                                            New Project
                                        </DropdownItem>
                                    </DropdownSection>

                                    <DropdownSection aria-label="Preferences" showDivider>
                                        <DropdownItem key="quick_search" shortcut="⌘K">
                                            Quick search
                                        </DropdownItem>
                                        <DropdownItem
                                            isReadOnly
                                            key="theme"
                                            className="cursor-default"
                                            endContent={
                                                <select
                                                    className="z-10 outline-none w-16 py-0.5 rounded-md text-tiny group-data-[hover=true]:border-default-500 border-small border-default-300 dark:border-default-200 bg-transparent text-default-500"
                                                    id="theme"
                                                    name="theme"
                                                >
                                                    <option>System</option>
                                                    <option>Dark</option>
                                                    <option>Light</option>
                                                </select>
                                            }
                                        >
                                            Theme
                                        </DropdownItem>
                                    </DropdownSection>

                                    <DropdownSection aria-label="Help & Feedback">
                                        <DropdownItem key="help_and_feedback">
                                            Help & Feedback
                                        </DropdownItem>
                                        <DropdownItem key="logout">Log Out</DropdownItem>
                                    </DropdownSection>
                                </DropdownMenu>
                            </Dropdown>
                        )
                    }

                </div>
            </nav>
        </div>
    )
}
