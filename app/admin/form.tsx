'use client'

import { useFormStatus } from "react-dom";
import { deleteUser } from "./_action";

export default function UserRow({id, email}:{id:string, email:string}) {
    return(
        <div>
            <form className="mb-2" action={deleteUser}>
                <label className="" htmlFor="id">{email}</label>
                <input type="hidden" name="id" value={id} />
                <Button />
            </form>
        </div>
    )
}

function Button() {
    const { pending } = useFormStatus();
    return (
        <button className=" bg-red-500 text-white rounded-md px-2 ml-2">{pending ? "loading..." : "remove"}</button>
    );
}
