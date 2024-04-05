import prisma from "@/utils/prisma";
import { encryptPassword } from "@/utils/hash";
import Form from "./form";


export default async function Page() {

    return (
        <div className=" p-4">
            <h1 className=" text-4xl mb-4">Registration</h1>
            <Form />
        </div>
    );
}

