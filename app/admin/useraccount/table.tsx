'use client'

import { Table, TableBody, TableCell, TableHeader, TableColumn, TableRow, Chip, Input } from "@nextui-org/react"
import EditUserAccount from "./edit-user-profile";
import { useState } from "react";
import { UserInterface, UserProfileInterface } from "@/utils/demo";
import AddUserForm from "./add-user-form";
import SuspendButton from "./suspend-button";

const columns = [
    { name: "ID" },
    { name: "EMAIL" },
    { name: "FIRSTNAME" },
    { name: "LASTNAME" },
    { name: "PHNUMBER" },
    { name: "CEANUMBER" },
    { name: "AGENCY" },
    { name: "LICENSE" },
    { name: "STATUS" },
    { name: "ACTIONS" },
];



export default function UserTable({ users, roles }: { users: UserInterface[], roles: UserProfileInterface[]}) {
    const [filteredName, setFilteredName] = useState("")
    const [filteredUsers, setFilteredUsers] = useState(users)
    

    return (
        <div className="">
            <Input className="my-4 max-w-[400px]" placeholder="Search..." onChange={(e) => {
                const value = e.target.value
                setFilteredName(value)
                if (value === "") {
                    setFilteredUsers(users)
                    return
                }
                const filtered = users.filter((user) => {
                    return user.firstName.toLowerCase().includes(value.toLowerCase())
                })
                setFilteredUsers(filtered)
            }} />
            <div className=" mb-4">
                <AddUserForm roles={roles} />
            </div>

            <Table aria-label="Example table with custom cells">
                <TableHeader>
                    {
                        columns.map((column, i) => (
                            <TableColumn key={i}>{column.name}</TableColumn>
                        ))

                    }
                </TableHeader>
                <TableBody>
                    {
                        filteredUsers.map((user: UserInterface, i: any) => {
                            return (
                                <TableRow key={i}>
                                    <TableCell>{i + 1}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell>{user.firstName}</TableCell>
                                    <TableCell>{user.lastName}</TableCell>
                                    <TableCell>{user.phoneNumber}</TableCell>
                                    <TableCell>{user.ceaNumber}</TableCell>
                                    <TableCell>{user.agency}</TableCell>
                                    <TableCell>{user.license}</TableCell>
                                    <TableCell>{user.activated ? <Chip className="text-white" color="success">Active</Chip> : <Chip className="text-white" color="danger">Suspended</Chip>}</TableCell>
                                    <TableCell className=" space-x-4">
                                        <div className="flex place-content-center place-items-center space-x-2">
                                            <EditUserAccount user={user} />
                                            <SuspendButton email={user.email} />
                                        </div>
                                    </TableCell>
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
            </Table>
        </div>
    )

}