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
<<<<<<< Updated upstream
                    <input type="radio" name="tab" id="tab1" defaultChecked />
                    <label htmlFor="tab1" className="tab-title">Account Information</label>

                    <input type="radio" name="tab" id="tab2" />
                    <label htmlFor="tab2" className="tab-title">My Listings</label>

                    <input type="radio" name="tab" id="tab3" />
                    <label htmlFor="tab3" className="tab-title">Short Listed</label>
=======
                    <input type="radio" name="tab" id="tab1" defaultChecked/>
                    <label htmlFor="tab1" className="tab-title">My Listings</label>

                    <input type="radio" name="tab" id="tab2" />
                    <label htmlFor="tab2" className="tab-title">Short Listed</label>
>>>>>>> Stashed changes

                    <div className="line"></div>

                    <div className="tab-content">
                        <div className="tab-panel" id="tab1-panel">
<<<<<<< Updated upstream
                            {/* Content for My Listings tab */}
                            <div>
                                {/* My Listings Content */}
                                <h2>First Name</h2>
                                <p>{user.firstName}</p>

                                <h2>Last Name</h2>
                                <p>{user.lastName}</p>

                                <h2>Phone Number</h2>
                                <p>{user.phoneNumber}</p>

                                <h2>Email</h2>
                                <p>{user.email}</p>

                                <h2>Country</h2>
                                <p>{user.country}</p>
                            </div>
                        </div>

                        <div className="tab-panel" id="tab2-panel">
=======
>>>>>>> Stashed changes
                            {/* Content for Short Lists */}
                            <div>
                                {/* Short Listed Content */}
                                <p>My Listed Content</p>
                            </div>
                        </div>

<<<<<<< Updated upstream
                        <div className="tab-panel" id="tab3-panel">
=======
                        <div className="tab-panel" id="tab2-panel">
>>>>>>> Stashed changes
                            {/* Content for Short Lists */}
                            <div>
                                {/* Short Listed Content */}
                                <p>Short Listed Content</p>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </div>
    )
}