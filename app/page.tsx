import Navigation from "@/components/nav"
import { redirect } from "next/navigation"


export default async function Page() {
  redirect('/buy')

  return (
    <div>
      <Navigation />
      <div>
        Redirect Page
      </div>
    </div>
  )
}