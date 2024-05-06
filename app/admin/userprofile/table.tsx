'use client'

import { Table, TableBody, TableCell, TableHeader, TableColumn, TableRow, Button, Chip, Switch } from "@nextui-org/react"
import { useCallback } from "react";
import toast from "react-hot-toast";
import EditUserProfile from "./edit-user-profile";
import { useEffect, useState } from "react";
import { UserProfileInterface } from "@/utils/demo";

const columns = [
    { name: "ID", uid: "id" },
    { name: "ROLE", uid: "status" },
    { name: "STATUS", uid: "active" },
    { name: "ACTION", uid: "actions" },
];



export default function UserTable({ userProfiles }: { userProfiles: UserProfileInterface[] }) {
    const handleDelete = useCallback(async () => {
        toast.success("User deleted")
    }, [])


    return (
        <div className=" max-w-[400px]">
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
                        userProfiles.map((user: UserProfileInterface, i: any) => {
                            return (
                                <TableRow key={i}>
                                    <TableCell>{i + 1}</TableCell>

                                    <TableCell>{user.role}</TableCell>
                                    <TableCell>
                                        <Chip className=" text-white" color={user.activated ? "success" : "danger"}>{user.activated ? "Active" : "Suspended"}</Chip>
                                    </TableCell>
                                    <TableCell className=" space-x-4">
                                        <div className="flex place-content-center place-items-center">
                                            <EditUserProfile profile={user} />
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