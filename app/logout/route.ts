import { redirect } from "next/navigation";
import { getSession } from "@/utils/auth";
import { revalidatePath } from "next/cache";
import { LogoutAccountController } from "@/utils/controllers/user";

export async function GET() {
    const logoutAccountController= new LogoutAccountController()
    logoutAccountController.logout()
    revalidatePath("/")
    redirect("/")

}

function sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}