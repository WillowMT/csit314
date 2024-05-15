import { redirect } from "next/navigation";
import { getSession } from "@/utils/auth";
import { revalidatePath } from "next/cache";
import { LogoutAccountController } from "@/utils/controllers/user";

const logoutAccountController= new LogoutAccountController()

export async function GET() {
    await logoutAccountController.logout()
    console.log('logout success');
    
    redirect("/") 

}

function sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}