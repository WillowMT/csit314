import Navigation from "@/components/nav";
import './agent_acc_style.css';
import { demo } from "@/utils/demo";
import PropertyCard from "@/app/account/property-card";
import { getSession } from "@/utils/auth";
import { Chip, Tab, Tabs } from "@nextui-org/react";
import UserTabs from "./tabs";
import prisma from "@/utils/prisma";

export default async function Page({params}:{params:{id:string}}) {

    const agent = await prisma.user.findUnique({
        where: {
            publicId: params.id
        },
        include: {
            profile: true,
            listing:{
                select:{
                    property:true
                }
            },
            ratingAndReview: true
        }
    })

    if (!agent) {
        return <div>Agent not found</div>
    }

    return (
        <div>
            <Navigation />
            <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />

            <div className="cover">
                <div className="reveal"></div>
            </div>

            <section className="acc">
                <img src={`https://api.dicebear.com/8.x/initials/svg?seed=${agent.firstName}`} className='profile-pic' />
                <p className="name">{agent.firstName} {agent.lastName}</p>
                <div className="contact-info">
                    <p className="bx bx-phone"></p>
                    <p className="ph-no">{agent.phoneNumber}</p>
                    <p className='bx bxl-gmail'></p>
                    <p className="email">{agent.email}</p>
                </div>
                <UserTabs email={agent.email} properties={agent.listing} role={agent?.profile?.role || "BUYER"} ratingAndReview={agent.ratingAndReview} />

            </section>
        </div>
    );
}
