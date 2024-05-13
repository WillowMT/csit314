import Navigation from "@/components/nav";
import './contact-style.css'
export default function Page() {
    return(
        <div>
            <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'/>
            <Navigation />
            <section className="contact">
                <p className="title">Contact Us</p>
                <div className="box">
                    <div className="left">
                        <img src="https://images.pexels.com/photos/5331968/pexels-photo-5331968.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                    </div>
                    <div className="right">
                        <div className="icons">
                            <p class='bx bxl-facebook'></p>
                            <p class='bx bxl-instagram' ></p>
                            <p class='bx bxl-twitter' ></p>
                        </div>
                        <p>eliteestate@gmail.com</p>
                        <p>https://www.facebook.com/EliteEstate</p>
                        <p>https://www.instagram.com/elite_estate</p>
                        <p>https://twitter.com/EliteEstateHQ</p>
                    </div>
                </div>
            </section>
        </div>
    )
}