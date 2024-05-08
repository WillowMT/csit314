'use client'
import React from "react";
import {Button, Image, Chip} from "@nextui-org/react";

export default function ShortList() {
  const [isFollowed, setIsFollowed] = React.useState(false);

  return (
        <Button
          className={isFollowed ? " text-foreground border-default-200" : ""}
          color="warning"
          radius="md"
          size="sm"
          variant={isFollowed ? "solid" : "bordered"}
          onPress={() => setIsFollowed(!isFollowed)}
        >
            <Image className=" size-6" src="https://icons.veryicon.com/png/o/object/material-design-icons/add-49.png"></Image>
        </Button>
  );
}
