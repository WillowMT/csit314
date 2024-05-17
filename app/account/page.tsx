import Navigation from "@/components/nav";
import './agent_acc_style.css';
import { UserInterface, demo } from "@/utils/demo";
import PropertyCard from "@/app/account/property-card";
import { getSession } from "@/utils/auth";
import { Chip, Tab, Tabs } from "@nextui-org/react";
import UserTabs from "./tabs";
import prisma from "@/utils/prisma";
import {ViewAdminAccountPersonalController, ViewSellerAccountPersonalController, ViewBuyerAccountPersonalController} from "@/utils/controllers/user"
import { ViewAgentAccountController } from "@/utils/controllers/agent";

export default async function Page() {

    const session = await getSession()

    if (!session) {
        return <div>Access Denied</div>
    }

    let user: UserInterface | null = null

    if (session.role === 'SELLER') {
        const sellerController = new ViewSellerAccountPersonalController()
        user = await sellerController.getSellerPersonalAccount({ email: session.email })
    }

    if (session.role === 'BUYER') {
        const buyerController = new ViewBuyerAccountPersonalController()
        user = await buyerController.getBuyerPersonalAccount({ email: session.email })
    }

    if (session.role === 'ADMIN') {
        const adminController = new ViewAdminAccountPersonalController()
        user = await adminController.getAdminPersonalAccount({ email: session.email })
    }

    if (session.role === 'AGENT') {
        const agentController = new ViewAgentAccountController()
        user = await agentController.getAgentDetails({ email: session.email })
    }
    

    return (
        <div>
            <Navigation />
            <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />

            <div className="cover">
                <div className="reveal"></div>
            </div>

            <section className="acc">
                <img src={`https://api.dicebear.com/8.x/initials/svg?seed=${session.firstName}`} className='profile-pic' />
                <p className="name">{session.firstName} {session.lastName} ({session.role})</p>
                <div className="contact-info">
                    <p className="bx bx-phone"></p>
                    <p className="ph-no">{session.phoneNumber}</p>
                    <p className='bx bxl-gmail'></p>
                    <p className="email">{session.email}</p>
                </div>

                {
                    user != null && (
                        <UserTabs ownership={user?.ownership} shortListings={user?.shortList} listings={user?.listing} role={session.role} ratingsAndReviews={user?.ratingAndReview} />
                    )
                }


            </section>
        </div>
    );
}
