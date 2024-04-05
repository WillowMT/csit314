'use client'
import { submit } from "./_action"
import { useFormStatus, useFormState } from "react-dom";
import { Tab } from '@headlessui/react'


export default function FF() {
    const [state, formAction] = useFormState(submit, null);

    return (
        <div>
            <Tab.Group>
                <Tab.List>
                    <Tab className={" text-black mr-2 px-4 py-2 rounded-md border border-1 border-black"}>User</Tab>
                    <Tab className={" text-black mr-2 px-4 py-2 rounded-md border border-1 border-black"}>Agent</Tab>
                </Tab.List>
                <Tab.Panels>
                    <Tab.Panel>
                        {/* form for user */}
                        <form action={formAction} className=" space-y-4">
                            <label htmlFor="email">Email:</label>
                            <input type="text" id="email" name="email" required />
                            <br />
                            <label htmlFor="firstName">First Name:</label>
                            <input type="text" id="firstName" name="firstName" required />
                            <br />

                            <label htmlFor="lastName">Last Name:</label>
                            <input type="text" id="lastName" name="lastName" required />
                            <br />

                            <label htmlFor="country">Country:</label>
                            <input type="text" id="country" name="country" required />
                            <br />

                            <label htmlFor="phoneNumber">Phone Number:</label>
                            <input type="tel" id="phoneNumber" name="phoneNumber" required />
                            <br />
                            <label htmlFor="password">Password:</label>
                            <input type="password" id="password" name="password" required />
                            <br />
                            <label htmlFor="passwordConfirm">Confirm Password:</label>
                            <input type="passwordConfirm" id="passwordConfirm" name="passwordConfirm" required />
                            <br />
                            <Button />
                            {state?.message && <p>{state.message}</p>}
                        </form>
                    </Tab.Panel>
                    <Tab.Panel>
                        {/* form for agent */}
                        <form action={formAction} className=" space-y-4">

                            <label htmlFor="email">Email:</label>
                            <input type="text" id="email" name="email" required />
                            <br />
                            <label htmlFor="firstName">First Name:</label>
                            <input type="text" id="firstName" name="firstName" required />
                            <br />

                            <label htmlFor="lastName">Last Name:</label>
                            <input type="text" id="lastName" name="lastName" required />
                            <br />

                            <label htmlFor="country">Country:</label>
                            <input type="text" id="country" name="country" required />
                            <br />

                            <label htmlFor="phoneNumber">Phone Number:</label>
                            <input type="tel" id="phoneNumber" name="phoneNumber" required />
                            <br />
                            <label htmlFor="ceaNumber">CEA Number:</label>
                            <input type="tel" id="ceaNumber" name="ceaNumber" required />
                            <br />
                            <label htmlFor="agency">Agency:</label>
                            <input type="tel" id="agency" name="agency" required />
                            <br />
                            <label htmlFor="license">License Number:</label>
                            <input type="tel" id="license" name="license" required />
                            <br />
                            <label htmlFor="jobDesignation">Job Designation:</label>
                            <input type="tel" id="jobDesignation" name="jobDesignation" required />
                            <br />
                            <label htmlFor="password">Password:</label>
                            <input type="password" id="password" name="password" required />
                            <br />
                            <label htmlFor="passwordConfirm">Confirm Password:</label>
                            <input type="passwordConfirm" id="passwordConfirm" name="passwordConfirm" required />
                            <br />
                            <Button />
                            {state?.message && <p>{state.message}</p>}
                        </form>
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </div>

    )
}

function Button() {
    const { pending } = useFormStatus();
    return (
        <button type="submit" className=" border px-4 py-1 border-black border-1 rounded-md">
            {pending ? 'Loading...' : 'Submit'}
        </button>
    );
}
