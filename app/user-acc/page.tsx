import Navigation from "@/components/nav";
import './user_acc_style.css'
export default function UserAccountPage() {

    return(
        <div className=''>
            <Navigation />
            <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
            
            {/* cover photo */}
            <div className="cover">
                <div className="reveal"></div>
            </div>
            
            <section className="acc">
                
                <img src={`https://api.dicebear.com/8.x/initials/svg?seed=${"Jhon Doe"}`} className='profile-pic' /> 
                
                <p className="name">First Name Last Name</p>
                
                <div className="contact-info">
                    <p className="bx bx-phone"></p>
                    <p className="ph-no">+65-123-456</p>
                    <p className='bx bxl-gmail' ></p>
                    <p className="email">email@gmail.com</p>
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
                            <div className="listing-content">
                                {/* My Listings Content */}
                                <p>My Listed Content</p>
                            </div>
                        </div>

                        <div className="tab-panel" id="tab2-panel">
                            {/* Content for Short Lists */}
                            <div className="short-listed-content">
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