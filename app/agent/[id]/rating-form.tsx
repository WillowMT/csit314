import { Button } from "@nextui-org/react"
import { Rate } from "antd"

export default function RatingForm() {
    return (
        <form className=" inline-flex place-items-center space-x-4" action="">
            <Rate />
            <Button className="text-white" color="success" size="sm" type="submit">Submit</Button>
        </form>
    )
}