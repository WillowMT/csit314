
import { redirect } from "next/navigation";

export default async function Page() {

    redirect('/')

    return(
        <div>Rediect Page</div>
    )
}