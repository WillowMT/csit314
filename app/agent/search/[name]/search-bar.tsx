import { Button, Input } from "@nextui-org/react"
import { redirect } from "next/navigation"

export default function SearchBar() {
    return (
        <div className="w-full py-10 bg-brand-100">
            <form action={
                async (e) => {
                    'use server'
                    const search = e.get('search')
                    redirect(`/agent/search/${search}`)
                }
            } className=" w-fit mx-auto space-y-4 min-w-[300px]">
                <Input name="search" className="" placeholder="Search Agent..." labelPlacement="outside" label="Search Agent" />
                <Button color="primary" variant="flat">Search</Button>
            </form>
        </div>
    )
}