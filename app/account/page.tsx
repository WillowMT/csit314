import { redirect } from "next/navigation"

export default function Page() {
    redirect('/account/personal')

    return (
        <div>
            Redirect Page
        </div>
    )
}