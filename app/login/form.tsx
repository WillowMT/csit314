'use client'

import { useFormStatus, useFormState } from "react-dom";
import { checkUser } from "./_action";

export default function Form() {
    const [state, formAction] = useFormState(checkUser, null);

    return (
        <form action={formAction} className=" space-y-4">
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" />
            </div>
            <Button />
            {state?.message && <p>{state.message}</p>}
        </form>
    );
    
    
}



function Button() {
    const { pending } = useFormStatus();
    return (
        <button type="submit" className=" border px-4 py-1 border-black border-1 rounded-md">
            {pending ? 'Loading...' : 'Submit'}
        </button>
    );
}
