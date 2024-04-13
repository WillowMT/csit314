import { useState, useEffect } from "react"
import {useLocalStorage} from '@uidotdev/usehooks'
import { getSession } from "@/utils/actions"
import Navigation from "@/components/nav"

export default async function Page() {

    const session = await getSession()


    if (!session.email) return <div>loading...</div>
    


    return (
        <div>
            <Navigation />
            <pre>
                {JSON.stringify(session,null,2)}
            </pre>

        </div>
    )
}