import PropertyBox from "../user-acc/property-box";
import Navigation from "@/components/nav";
import './agent_acc_style.css';

export default function AgentAccountPage() {

    return (
        <div>
            <Navigation />
            <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />

            <div className="cover">
                <div className="reveal"></div>
            </div>

            <section className="acc">
                <img src={`https://api.dicebear.com/8.x/initials/svg?seed=${"Jhon Doe"}`} className='profile-pic' />
                <p className="name">First Name Last Name</p>
                <div className="contact-info">
                    <p className="bx bx-phone"></p>
                    <p className="ph-no">+65-123-456</p>
                    <p className='bx bxl-gmail'></p>
                    <p className="email">email@gmail.com</p>
                </div>

                <div className="tabs">

                    <input type="radio" name="tab" id="tab1" defaultChecked />
                    <label htmlFor="tab1" className="tab-title">My Listings</label>

                    <input type="radio" name="tab" id="tab2" />
                    <label htmlFor="tab2" className="tab-title">Ratings and Reviews</label>

                    <div className="line"></div>

                    <div className="tab-content">
                        
                        <div className="tab-panel" id="tab1-panel">
                            {/* Content for My Listings tab */}
                            <div className="listing-content">
                                <PropertyBox></PropertyBox>
                            </div>
                        </div>
                        
                        <div className="tab-panel" id="tab2-panel">
                            {/* Content for Ratings and Reviews tab */}

                            {/* form for user to rate and review agent*/}
                            <div className="rate-and-review-content">
                                <form action="" className="rate-review">
                                    <div className="container">
                                        <p className="title">Write a Review</p>
                                        <div className="rating-stars">
                                            <input type="radio" name="rating" id="rs0"  defaultChecked/><label htmlFor="rs0"></label>
                                            <input type="radio" name="rating" id="rs1" /><label htmlFor="rs1"></label>
                                            <input type="radio" name="rating" id="rs2" /><label htmlFor="rs2"></label>
                                            <input type="radio" name="rating" id="rs3" /><label htmlFor="rs3"></label>
                                            <input type="radio" name="rating" id="rs4" /><label htmlFor="rs4"></label>
                                            <input type="radio" name="rating" id="rs5" /><label htmlFor="rs5"></label>
                                            <span className="rating-counter"></span>
                                        </div>
                                    </div>
                                    <textarea name="review" id="review" placeholder="Review this agent..."></textarea>
                                    <button type="submit" className="submit">Submit</button>
                                </form>
                            </div>

                            {/* ratings and reviews that agent got */}
                        </div>

                    </div>

                </div>
            </section>
        </div>
    );
}
