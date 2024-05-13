import Navigation from "@/components/nav";
import './agent_acc_style.css';
import { demo } from "@/utils/demo";
import PropertyCard from "@/app/account/property-card";
import { getSession } from "@/utils/auth";
import { Chip, Tab, Tabs } from "@nextui-org/react";
import UserTabs from "./tabs";
import prisma from "@/utils/prisma";

export default async function Page() {

    const session = await getSession()

    if (!session) {
        return <div>Access Denied</div>
    }

    const agent = await prisma.user.findUnique({
        where:{
            email:session.email
        },
        select:{
            listing:{
                select:{
                    property:true
                }
            },
            ratingAndReview:true,
            shortList:{
                select:{
                    property:true
                }
            },
            ownership:{
                select:{
                    property:true
                }
            }
        }
    })

    console.log(agent);
    


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

                <UserTabs ownership={agent?.ownership} shortListings={agent?.shortList} listings={agent?.listing} role={session.role} ratingsAndReviews={agent?.ratingAndReview} />

            </section>
        </div>
    );
}
