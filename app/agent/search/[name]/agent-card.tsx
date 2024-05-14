// import { Card } from "@nextui-org/react"
import { UserInterface } from "@/utils/demo"
import Link from "next/link"

export default function AgentCard({ user }: { user: UserInterface }) {
    return (
        <div className=" border  m-4 rounded-lg shadow-md max-w-3xl overflow-hidden mx-auto">
            <Link href={`/agent/${user.publicId}`}>
                <div className="flex gap-4 h-[150px]">
                    <img src={`https://api.dicebear.com/8.x/initials/svg?seed=${user.firstName}`} className=" aspect-square h-full " />
                    <div className="space-y-3">
                        <h4 className=" text-lg font-semibold">{user.firstName} {user.lastName}</h4>
                        <p>{user.email}</p>
                        <p>{user.phoneNumber}</p>
                        {
                            <Rating rating={3} />
                        }
                    </div>
                </div>
            </Link>
        </div>
    )
}

function StarFilled() {
    return (
        <svg viewBox="64 64 896 896" focusable="false" data-icon="star" width="1em" height="1em" fill="rgb(250, 219, 20)" aria-hidden="true"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path></svg>
    )
}

function StarEmpty() {
    return (
        <svg viewBox="64 64 896 896" focusable="false" data-icon="star" width="1em" height="1em" fill="rgba(0, 0, 0, 0.06)" aria-hidden="true"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path></svg>
    )
}

function Rating({ rating}: { rating: number }) {
    return (
        <div className="flex gap-1">
            {
                Array.from({ length: 5 }, (_, i) => {
                    return i < rating ? <StarFilled key={i} /> : <StarEmpty key={i} />
                })
            }
        </div>
    )
    
}