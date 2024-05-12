import { redirect } from "next/navigation";
import { getSession } from "@/utils/auth";
import { revalidatePath } from "next/cache";

export async function GET() {
    const session = await getSession()
    session.destroy()
    revalidatePath("/")
    redirect("/")

}