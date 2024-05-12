'use client'

import { Dropdown, DropdownTrigger, Avatar, DropdownMenu, DropdownSection, DropdownItem, User } from "@nextui-org/react";
// import a from "next/link";
import { SessionData } from "@/utils/lib";
import { logout } from "@/utils/auth";

export default function Profile({ email, firstName, role }: { email: string, firstName: string, role: string }) {
    console.log(role);
    
    return (
        <Dropdown
            radius="sm"
            classNames={{
                content: "p-0 border-small border-divider bg-background",
            }}
        >
            <DropdownTrigger>
                <Avatar src={`https://api.dicebear.com/8.x/initials/svg?seed=${firstName}`} />
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
                                src: `https://api.dicebear.com/8.x/initials/svg?seed=${firstName}`,
                            }}
                        />
                    </DropdownItem>
                    <DropdownItem key="">
                        <a href={'/account'}>
                            Account
                        </a>
                    </DropdownItem>
                    <DropdownItem key="">
                        <a href={'/account/edit'}>
                            Edit Profile
                        </a>
                    </DropdownItem>
                    <DropdownItem
                        key="new_project"
                        color="danger"
                        className=" text-red-500"
                    >
                        <a href={"/logout"}>Logout</a>
                    </DropdownItem>
                </DropdownSection>
            </DropdownMenu>
        </Dropdown>
    )
}