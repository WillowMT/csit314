import { Button, Input, Textarea } from "@nextui-org/react";

export default function ReviewForm() {
    return (
        <form className=" flex flex-col" action="">
            <Textarea className="max-w-[400px] mb-4" />
            <Button color="success" className="w-fit text-white" size="sm" type="submit">Submit</Button>
        </form>
    )
}