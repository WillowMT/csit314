import prisma from "@/utils/prisma";
import { encryptPassword } from "@/utils/hash";
import Form from "./form";


export default async function Page() {

    return (
        <div className="">
            <h1 color="primary" className=" mb-4 bg-brand-200 text-center py-4 text-2xl font-bold text-black">Sign Up</h1>
            <p className=" text-center text-xs sm:text-sm mb-4 text-black/60">Choose the role you want to Sign up as</p>
            <Form />
        </div>
    );
}

