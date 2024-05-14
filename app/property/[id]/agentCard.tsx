'use client'
import React from "react";
import { Card, CardHeader, CardBody, Avatar, Button, Chip } from "@nextui-org/react";
import Link from "next/link";
import { UserInterface } from "@/utils/demo";

export default function AgentCard({user}: {user: UserInterface}) {

  if (!user) {
    return
  }
  

  return (
    <Card className="max-w-[300px]">
      <CardHeader className="justify-between">
        <div className="flex gap-4">
          <Avatar isBordered radius="full" size="lg" src={`https://api.dicebear.com/8.x/initials/svg?seed=${user.firstName}`} />
          <div>
            <h4 className="text-medium font-semibold">{user.firstName} {user.lastName}</h4>
            <Link href={`/agent/${user.publicId}`}>
              <Button
                className={"border-default-200"}
                color="default"
                radius="full"
                size="sm"
                variant={"solid"}
              >
                View Profile
              </Button>
            </Link>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
}
