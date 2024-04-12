import prisma from "@/utils/prisma";
import { encryptPassword } from "@/utils/hash";
import Form from "./form";
import Link from "next/link";


export default async function Page() {

    return (
        <div className="">
            <div className="bg-brand-200 text-center py-4 text-2xl font-bold text-black relative">
                <Link href="/" className=" grid place-items-center mr-auto md:ml-8 sm:ml-4 ml-2 absolute top-1/2 -translate-y-1/2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                </Link>
                <h1 className="  align-middle">Sign In</h1>
            </div>
            <Form />
        </div>
    );
}

