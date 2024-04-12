import prisma from "@/utils/prisma";
import { encryptPassword } from "@/utils/hash";
import Form from "./form";


export default async function Page() {

    return (
        <div className="">
            <h1 className=" bg-brand-200 text-center py-4 text-2xl font-bold text-black">Sign In</h1>
            <Form />
        </div>
    );
}

