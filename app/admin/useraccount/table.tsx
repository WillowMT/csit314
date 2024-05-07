'use client'

import { Table, TableBody, TableCell, TableHeader, TableColumn, TableRow, Button, Chip, Switch, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react"
import { useCallback } from "react";
import toast from "react-hot-toast";
import EditUserAccount from "./edit-user-profile";
import { useEffect, useState } from "react";
import { UserInterface } from "@/utils/demo";
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
                            const isActive = user.activated || false
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
                                            <SuspendButton />
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