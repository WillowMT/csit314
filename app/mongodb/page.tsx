import Navigation from "@/components/nav";
import prisma from "@/utils/prisma"

export default async function Page() {
    const users = await prisma.user.findMany();
    return (
        <div>
            <Navigation />
            <h1 className="text-4xl bg-slate-600 text-white p-4">Backend Database View (While Development)</h1>
            <pre className="p-4">
                {JSON.stringify(users, null, 2)}
            </pre>
        </div>
    );
}



export const revalidate = 5