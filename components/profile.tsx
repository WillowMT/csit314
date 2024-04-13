'use client'

import { Dropdown, DropdownTrigger, Avatar, DropdownMenu, DropdownSection, DropdownItem, User } from "@nextui-org/react";
import Link from "next/link";
import { SessionData } from "@/utils/lib";
import { logout } from "@/utils/actions";

export default function Profile({ email, firstName }: { email:string, firstName:string }) {
    return (
        <Dropdown
            radius="sm"
            classNames={{
                content: "p-0 border-small border-divider bg-background",
            }}
        >
            <DropdownTrigger>
                <Avatar src={`https://api.dicebear.com/8.x/adventurer/svg?seed=${email}`} />
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
                <DropdownSection aria-label="Profile & Actions">
                    <DropdownItem
                        isReadOnly
                        key="profile"
                        className="h-14 gap-2 opacity-100"
                    >
                        <User
                            name={firstName}
                            description={email}
                            classNames={{
                                name: "text-default-600",
                                description: "text-default-500",
                            }}
                            avatarProps={{
                                size: "sm",
                                src: `https://api.dicebear.com/8.x/adventurer/svg?seed=${email}`,
                            }}
                        />
                    </DropdownItem>
                    <DropdownItem key="settings">
                        <Link href={'/account'}>
                            Settings
                        </Link>
                    </DropdownItem>
                    <DropdownItem
                        key="new_project"
                        color="danger"
                        className=" text-red-500"
                    >
                        <form action={logout}>
                            <button type="submit">Logout</button>
                        </form>
                    </DropdownItem>
                </DropdownSection>
            </DropdownMenu>
        </Dropdown>
    )
}