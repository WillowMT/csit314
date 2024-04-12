import prisma from "@/utils/prisma";
import { encryptPassword } from "@/utils/hash";
import Form from "./form";


export default async function Page() {

    return (
        <div className="">
            <h1 className=" mb-4 bg-orange-800 text-center py-4 text-2xl font-bold text-white">Sign In</h1>
            <Form />
        </div>
    );
}

