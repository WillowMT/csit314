import Navigation from "@/components/nav";
import './about-style.css'
export default function Page() {
    return(
        <div>
            <Navigation />
            <section className="header">
                <div className="pic">
                    <div className="text-container">
                        <p>Elite Estate</p>
                        <p>Matching Sellers with Agents for Buyers&apos; Dream Homes</p>
                    </div>
                </div>
            </section>
            <section className="our-founder">
                <div className="left">
                    <div className="logo"><img src="/logo.png" alt="Company logo"/></div>
                    <div className="text-container">
                        <p className="title">Our Founder</p>
                        <p className="description">Elite Estate was born from a simple idea and a burning 
                        passion for real estate. It all started when our founder, Mewlyn Greene, 
                        encountered the daunting challenges of selling her own home. Frustrated by the 
                        lack of support and guidance in the traditional real estate market, Mewlyn saw an 
                        opportunity to revolutionize the industry.</p>
                    </div> 
                </div>
                <div className="right">
                    <img src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Our Founder" className="founder" />
                </div>
            </section>
            <section className="achievements">
                <div className="awards">
                    <div className="content">
                        <p>Elite Estate proudly secured the &apos;2024 Real Estate Agency of the Year&apos; award, a testament to our unwavering commitment to excellence, exceptional client service, and outstanding performance in the competitive real estate market.</p>
                    </div>
                </div>
                <div className="buildings">
                    <div className="content">
                        <p>Sold 500 condominiums and HDBs within a span of just five years. This remarkable achievement reflects not only our proficiency in the real estate market but also the trust and satisfaction of our valued clients. At Elite Estate, excellence isn&apos;t just a goal—it&apos;s our standard.</p>
                    </div>
                </div>
            </section>
            <section className="customer">
                <div className="logo"><img src="/logo.png" alt="Company logo"/></div>
                <p className="title">
                    Customers are the heart of everything we do at Elite Estate.
                </p>
                <p className="description">
                    Your satisfaction and success drive our every decision and action. We prioritize building long-lasting relationships based on trust, transparency, and exceptional service. 
                </p>
                <button className="contact-us">
                    <a href="/contact">
                        Contact Us Now!
                    </a>
                </button>
            </section>
        </div>
    )
}