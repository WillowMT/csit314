import Navigation from "@/components/nav";
import { getSession } from "@/utils/auth";
import Link from "next/link";

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const session = await getSession();

    return (
        <div className="  inset-0 absolute flex flex-col">
            <Navigation />
            <div className="  flex-grow">
                <div className="  h-full flex flex-col">
                    <div className=" flex flex-col w-full">
                        <div className=" bg-brand-400 p-6 flex flex-col">
                            <div className="profile mb-6 flex space-x-4">
                                <img className=" w-10 h-10 rounded-full mb-4" src={`https://api.dicebear.com/8.x/initials/svg?seed=${session.firstName || "Demo"}`} />
                                <div>
                                    <h2 className=" text-2xl">{session.firstName || "Demo User"} (Admin)</h2>
                                    <p className=" font-normal">{session.email || "demo@gmail.com"}</p>
                                </div>
                            </div>
                            <nav className=" flex place-items-end space-x-4 text-white">
                                <Link className=" underline mb-2 hover:cursor-pointer" href={"/admin/useraccount/all"}>User Accounts</Link>
                                <Link className=" underline mb-2 hover:cursor-pointer" href={"/admin/userprofile/all"}>User Profiles</Link>
                            </nav>
                        </div>
                        <div className="p-4">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
