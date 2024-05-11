'use client'
import React from "react";
import { Card, CardHeader, CardBody, Avatar, Button, Chip } from "@nextui-org/react";
import Link from "next/link";

export default function AgentCard() {

  return (
    <Card className="max-w-[300px]">
      <CardHeader className="justify-between">
        <div className="flex gap-4">
          <Avatar isBordered radius="full" size="lg" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
          <div>
            <h4 className="text-medium font-semibold">Willy Wonker</h4>
            <Link href="/agent/12312">
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
