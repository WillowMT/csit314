import Navigation from "@/components/nav";
import './agent_acc_style.css';
import { demo } from "@/utils/demo";
import PropertyCard from "@/app/account/property-card";
import { getSession } from "@/utils/auth";
import { Chip, Tab, Tabs } from "@nextui-org/react";
import UserTabs from "./tabs";

export default async function Page({params}:{params:{id:string}}) {

    const demoUser = demo.user[0]


    return (
        <div>
            <Navigation />
            <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />

            <div className="cover">
                <div className="reveal"></div>
            </div>

            <section className="acc">
                <img src={`https://api.dicebear.com/8.x/initials/svg?seed=${demoUser.firstName}`} className='profile-pic' />
                <p className="name">{demoUser.firstName} {demoUser.lastName} ({demoUser?.profile?.role})</p>
                <div className="contact-info">
                    <p className="bx bx-phone"></p>
                    <p className="ph-no">{demoUser.phoneNumber}</p>
                    <p className='bx bxl-gmail'></p>
                    <p className="email">{demoUser.email}</p>
                </div>

                <UserTabs role={demoUser?.profile?.role || "BUYER"} />

            </section>
        </div>
    );
}
