'use client'
import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Avatar, Button, Chip} from "@nextui-org/react";

export default function AgentCard() {

  return (
    <Card className="max-w-[300px]">
      <CardHeader className="justify-between">
        <div className="flex gap-3">
          <Avatar isBordered radius="full" size="lg" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
          <div>
            <h4 className="text-medium font-semibold">Willy Wonker</h4>
            <Chip size="sm" radius="md" color="default" variant={"bordered"} className="text-xs">★ 4.1 / 5</Chip>
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400">
        <Button
          className={"border-default-200"}
          color="default"
          radius="full"
          size="sm"
          variant={"solid"}
        >
          View Profile
        </Button>
        <br/>
      </CardBody>
    </Card>
  );
}
