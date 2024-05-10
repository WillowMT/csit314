import PropertyBox from "../user-acc/property-box";
import Navigation from "@/components/nav";
import './user_acc_style.css'
import { demo } from "@/utils/demo";

export default async function UserAccountPage() {

    const user = demo.user[0]

    return (
        <div className=''>
            <Navigation />
            <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />

            {/* cover photo */}
            <div className="cover">
                <div className="reveal"></div>
            </div>

            <section className="acc">

                <img src={`https://api.dicebear.com/8.x/initials/svg?seed=${"Jhon Doe"}`} className='profile-pic' />

                <p className="name">{user.firstName} {user.lastName}</p>

                <div className="contact-info">
                    <p className="bx bx-phone"></p>
                    <p className="ph-no">{user.phoneNumber}</p>
                    <p className='bx bxl-gmail' ></p>
                    <p className="email">{user.email}</p>
                </div>

                <div className="tabs">

                    <input type="radio" name="tab" id="tab1" defaultChecked />
                    <label htmlFor="tab1" className="tab-title">My Listings</label>

                    <input type="radio" name="tab" id="tab2" />
                    <label htmlFor="tab2" className="tab-title">Short Listed</label>

                    <div className="line"></div>

                    <div className="tab-content">
                        <div className="tab-panel" id="tab1-panel">
                            {/* Content for My Listings tab */}
                            <div>
                                {/* My Listings Content */}
                                <PropertyBox></PropertyBox>
                            </div>
                        </div>

                        <div className="tab-panel" id="tab2-panel">
                            {/* Content for Short Lists */}
                            <div>
                                {/* Short Listed Content */}
                                <PropertyBox></PropertyBox>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </div>
    )
}