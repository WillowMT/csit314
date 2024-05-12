import { Button } from "@nextui-org/react"
import { Rate } from "antd"
import { useState } from "react"
import { rateAgent,reviewAgent } from "./action"
import toast from "react-hot-toast"

export default function RatingForm({email}:{email:string}) {
    const [rating, setRating] = useState(0)

    return (
        <form className=" inline-flex place-items-center space-x-4" action={
            async (e) => {
                await rateAgent(email, rating).then(() => {
                    toast.success("Rating submitted")
                })
                .catch(() => {
                    toast.error("Rating failed")
                })
            }
        }>
            <Rate defaultValue={rating} onChange={(e) => {
                setRating(e)
            }} />
            <Button className="text-white" color="success" size="sm" type="submit">Submit</Button>
        </form>
    )
}