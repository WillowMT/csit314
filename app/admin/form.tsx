'use client'

import { useFormStatus } from "react-dom";
import { deleteUser, setRole } from "./_action";
import { ChangeEvent } from "react";

export default function UserRow({id, email, role}:{id:string, email:string,role:string}) {

    return(
        <div>
            <form className="mb-2" action={deleteUser}>
                <label className="" htmlFor="id">{email}</label>
                <input type="hidden" name="id" value={id} />
                <Button />
                <select onChange={async (e) => {
                    await setRole(id, e.target.value)
                }} name="role" id="role" defaultValue={role} className=" bg-green-500 text-white rounded-md w-fit ml-2">
                    <option value="USER">USER</option>
                    <option value="AGENT">AGENT</option>
                    <option value="ADMIN">ADMIN</option>
                </select>
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
