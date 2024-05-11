'use client'

import { Table, TableBody, TableCell, TableHeader, TableColumn, TableRow, Chip } from "@nextui-org/react"
import EditUserProfile from "./edit-user-profile";
import { UserProfileInterface } from "@/utils/demo";
import SuspendButton from "./suspend-button";

const columns = [
    { name: "ID", uid: "id" },
    { name: "ROLE", uid: "status" },
    { name: "STATUS", uid: "active" },
    { name: "ACTION", uid: "actions" },
];



export default function UserTable({ userProfiles }: { userProfiles: UserProfileInterface[] }) {


    return (
        <div className=" max-w-[500px]">
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
                        userProfiles.map((uP: UserProfileInterface, i: any) => {
                            return (
                                <TableRow key={i}>
                                    <TableCell>{i + 1}</TableCell>
                                    <TableCell>{uP.role}</TableCell>
                                    <TableCell>
                                        <Chip className=" text-white" color={uP.activated ? "success" : "danger"}>{uP.activated ? "Active" : "Suspended"}</Chip>
                                    </TableCell>
                                    <TableCell className=" space-x-4">
                                        <div className="flex place-content-center place-items-center space-x-2">
                                            <EditUserProfile profile={uP} />
                                            <SuspendButton role={uP.role} />
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