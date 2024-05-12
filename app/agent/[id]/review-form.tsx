import { Button, Textarea } from "@nextui-org/react"
import { Rate } from "antd"
import { useState } from "react"
import { rateAgent, reviewAgent } from "./action"
import toast from "react-hot-toast"

export default function RatingForm({ email }: { email: string }) {
    const [review, setReview] = useState("")

    return (
        <form className=" flex flex-col" action={
            async (e) => {
                await reviewAgent(email, review).then(() => {
                    toast.success("Rating submitted")
                })
                    .catch(() => {
                        toast.error("Rating failed")
                    })
            }
        }>
            <Textarea onChange={(e) => {
                setReview(e.target.value)
            }} className="max-w-[400px] mb-4" />
            <Button className="text-white w-fit" color="success" size="sm" type="submit">Submit</Button>
        </form>
    )
}