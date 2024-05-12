'use client'
import React from "react";
import { Button, Tooltip } from "@nextui-org/react";
import toast from "react-hot-toast";
import { shortlist } from "./action";

export default function ListingButton({propertyId}: {propertyId: string}) {

  return (
    <Tooltip showArrow={true} content={"Add to shortlist"}>
      <Button
        radius="sm"
        size="sm"
        color="secondary"
        variant={"flat"}
        isIconOnly
        onPress={async () => {
          const { success, message } = await shortlist(propertyId)
          if (success) {
            toast.success('Property added to shortlist')
          }
          else {
            toast.error(message)
          }
        }}
      >
        <BookmarkIcon isFollowed={false} />
      </Button>
    </Tooltip>

  );
}


function BookmarkIcon({ isFollowed }: { isFollowed: boolean }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`w-4 h-4`}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
    </svg>
  )
}