'use client'

import { Table, TableBody, TableCell, TableHeader, TableColumn, TableRow, Button, Chip, Switch, Input } from "@nextui-org/react"
import { useCallback } from "react";
import toast from "react-hot-toast";
import EditUserAccount from "./edit-user-profile";
import { useEffect, useState } from "react";
import { UserInterface } from "@/utils/demo";
import AddUserForm from "./add-user-form";

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



export default function UserTable({ users }: { users: UserInterface[] }) {
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
                <AddUserForm />
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
                            const isActive = user.profile.activated
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
                                    <TableCell>{user.activated ? <Chip color="success">Active</Chip> : <Chip color="danger">Suspended</Chip>}</TableCell>
                                    <TableCell className=" space-x-4">
                                        <div className="flex place-content-center place-items-center space-x-2">
                                            <EditUserAccount user={user} />
                                            <Button size="sm" color="danger">
                                                <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                                </svg>

                                            </Button>
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