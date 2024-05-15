import Navigation from "@/components/nav";
import './sell_style.css'
import { redirect } from "next/navigation";

export default function SearchAgentPage() {
    return (
        <div className="">
            <Navigation />
            <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />

            {/* header starts */}
            <section className="header">
                <div className="text-container">
                    <h1>Maximize Your Property&apos;s Potential</h1>
                    <p>Let us connect you with experienced agents, ensuring a smooth and successful
                        transaction every step of the way
                    </p>
                </div>
                <form className="search-container" action={
                    async (e) => {
                        'use server'
                        const search = e.get('search')
                        redirect(`/agent/search/${search}`)
                    }
                }>
                    <input name='search' type="text" placeholder="Enter Agent Name..." />
                    <button type="submit">
                        <i className='bx bx-search' ></i>
                    </button>
                </form>
            </section>
            {/* header ends */}

            {/* three steps starts */}
            <section className="three-steps">
                <h1>Three Easy Steps to Market Success</h1>
                <div className="steps">
                    <div className="first-step">
                        <img src="data:image/png;base64,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
                        WgJtgBpBnwgQSA1Anwjyyv7GyKPwDtwQ4gFcFpEgB5J5D/yILNxwSABMUNqt041p7CvID5Y3g1OEECcOWwgTg2LgEk5IqQV7BbegfQMh/XABJyRcm4lvmYAjAWY6EbtfgXQeSEgA9PAW0AAAAASUVORK5CYII="
                            alt="agent"></img>
                        <div className="text-container">
                            <p className="title">Search Agent</p>
                            <p className="description">Type in the name of the agent.</p>
                        </div>
                    </div>
                    <div className="second-step">
                        <img src="agent_sell_house.png" alt="agent sell house" />
                        <div className="text-container">
                            <p className="title">List and Manage</p>
                            <p className="description">Sit back and relax while your agent handle
                                everything from listing your property to managing potential buyers.</p>
                        </div>
                    </div>
                    <div className="third-step">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFQ0lEQVR4nO2aX2hbVRjALyRdGwYKPuxBNxD7MGErC0wnOB1DnSioUG3TJ4eF1b3OFB9kL4KOgeDEpbNbw1btdOiQQfOn0eV2re3adY1N0iRtYtaxTZY11wUmA4dJLnxyTnKT++fc5Nrm5t705oPvoaffPed8v+873znn5lJUU5rSFC0knPhjJpxIQiUNxZPT1EaVUDw5rQDAFLXRxXFmCJCKnaeMIo4igPlITH8AMhe2HUkNWoGvj8YfA5Y2Q/76JsjesRT0Vhtu46vg/0VFbWI7DoDnMi0AIOnPb9pfdwDM2e0PBABO74L8REthQoutJcdycSmAXEAKALXJATg15MQQuExgx4V2LG2e0Dz6D0a3liPCA5APtUoBBAkAgvIAxJqfbdE2Cxhx9Aet8O/EZmKK5+ekjuXDZUAlu3CrYgC5mNS2blmQIUR/1bkT2Cu8yYybIXezreDYpDRauagUQC5KqBWTZoldoa5YhOPVMwsYQvQfjm2RRmS6BbIrxEhBbpkAYJlsmy2CVFI0Vc+CDCH6SHOT0ughfTT2ODz8eQtkfRZg6XImZBMEpxJtimHJFVfVs4AhRJ8ZeZZUlbH+ffFJCSxcL8bK9aIExbuZaIv6IPWNxvzr/HaJPZpjXaP/z+UnyBOkzZAZaSc6lf3VIgXwi4Vomzn/jGz/aGziMxe2HalL9FODVshPEtci1vTQDuIE837CzuDfRLRdde6Q7R+NTXpGtSxAIrc1yZ3b662U2uKoAmBhKW5sANdCi8YGMH511ngAOuw01pePzcPbwyvQ47tPVKVOvPF1FGvnj3dk+5LrT1MAHf00vPJFELo9TE0AvHkyBu9dSjUQADsN1o+vwFvnbtQEAIYwsAQ2d1ofAFKDu2ZI+66e9O43VvVelqZ04KASVR2Ag5f+XBt/GXBt+44HoOvSPZyuXBs/XSu18ZcB18YvipWe1Q2AjmJRfOe7mzUBwC+KjQHAXiiKB04sltrQOWE2GMYnxv8LgF8UGwZAh52G3Z/8BpWerXV/qjjP+k0zcrcy/amp9jsBS5umtXdMofpNU5rdBRwaq2qOc6K1g00AZxokA1jC2iS+49eZNgFUE0czA4bWvAQi0Rehz/079HjT0ONl4JA7BPPhA5I0XIq9AH3uIPSMMVgPeUJwPfy6wOZ91wocdCerpjSyE1yjZfpb1xJIEW5kYudXfVvB5iHc670MhCP7BM5jQBK7NP4fZ8e1VwMg+0ZJ1J/qAD4b/goP3OuKQiL2HMRje6DXHcNtfZ6F0gRw5GXsPnQvrBkA97dcf6oD6ByYA5uXwRMQRBtN0JMuTxilve8+0Q49v14Acv3VBUD36KrAMaRoHR90Jas6Jm5fD4BK7aoB+HT4JHT+9CdOPzGEtUy44QDc9rZD97lwaWCbN413gcDia8YAwNJmuOt7Gg67Ath5fjWORF4yBgAW/aI7V/h+KLG0G3pdEcXVveEBfOT8HuzOEcFXZPHY86Us2PAAOgfm8Du9tO8p/HUH+ipsObpHsg2irUluG0SHploAIPWnGIBSIe0CCMDRs6cxBHQy7P/hInSNpuGwO1CaACqM+CBU3C3QZD9w1e4gJNef6gBue9uha2BG8LYXqe3UVViZ2om//cvdsEAg9CqODOnoGonulThGUv4dodJRmN+f6gDY4n3g829PwLuOa1iPDX9ZWBJrsEP1RAyT0/5irSHZVRoXqaoA2AbQJoBaCWv0DCBJ3X7F1en4lNYT0Hp8ihsYfUGKvgw12vgUNwE0uOrrTYfjU+JjstHGp7SegNbjN6UpVGPJf8MpZl145WYnAAAAAElFTkSuQmCC" />
                        <div className="text-container">
                            <p className="title">Close the Deal</p>
                            <p className="description">Relax as your agent ensures a smooth transition
                                from offer acceptance to sold.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* three steps ends */}

            {/* services starts */}
            <section className="services">
                <div className="text-container">
                    <h1 className="title">Services</h1>
                    <div className="subtitle-and-desc">
                        <p className="sub-title">Property Valuation</p>
                        <p className="description">Determining the market value of a property based on various factors such as location, size, condition, and recent sales
                            in the area.</p>
                        <p className="sub-title">Marketing</p>
                        <p className="description">Creating effective marketing strategies to promote the property.</p>
                        <p className="sub-title">Buyer Check</p>
                        <p className="description">Identifying and discussing with potential buyers to ensure they are qualified and serious about purchasing the property.</p>
                        <p className="sub-title">Negotiation</p>
                        <p className="description">Negotiating the best possible terms for the seller, including price, closing date, and contingencies, while representing their interests throughout the process.</p>
                        <p className="sub-title">Paperwork and Documentation</p>
                        <p className="description">Handling all necessary paperwork and documentation involved in the sale, including contracts, disclosures, and legal documents.</p>
                        <p className="sub-title">Guidance and Advice</p>
                        <p className="description">Providing guidance and advice to sellers throughout the entire selling process, from listing the property to closing the deal, based on their expertise and market knowledge.</p>
                    </div>
                </div>
                <div className="img-container">
                    <img src="house-visit.jpg" alt="" />
                </div>
            </section>
            {/* services ends */}

            {/* faq */}
            <section className="faq">
                <div className="img-container">
                    <img src="seller-faq.jpg" alt="" />
                </div>
                <div className="text-container">
                    <h1 className="title">Frequently Asked Questions</h1>
                    <div className="subtitle-and-desc">
                        <p className="sub-title">Why should I sell my house with a real estate agent instead of on my own?</p>
                        <p className="description">Selling a house involves complex processes, negotiations, and legalities. Real estate agents bring expertise, marketing resources, and negotiation skills to help you navigate these complexities. With an agent, you can maximize your home&apos;s exposure, attract qualified buyers, and achieve the best possible sale price.</p>
                        <p className="sub-title">How do I choose the right real estate agent to sell my house?</p>
                        <p className="description">Choosing the right real estate agent is crucial for a successful home sale. Look for agents with a strong track record in your local market, excellent communication skills, and a proactive approach to marketing. Schedule interviews with potential agents to discuss their strategies, market knowledge, and client satisfaction.</p>
                        <p className="sub-title">What is the process for selling my house with a real estate agent?</p>
                        <p className="description">The process typically begins with an initial consultation where you discuss your goals and timeline with your agent. Your agent will then conduct a comparative market analysis, recommend pricing strategies, prepare your home for sale, market it to potential buyers, negotiate offers on your behalf, and guide you through closing.</p>
                        <p className="sub-title">How will the agents market my home to attract buyers?</p>
                        <p className="description">Real estate agents use various marketing strategies to attract buyers, professional photography to upload them on our website, open houses, and networking within their industry contacts.</p>
                        <p className="sub-title">What role do I play as the homeowner when selling my house with an agent?</p>
                        <p className="description">As the homeowner, your role is to work collaboratively with your real estate agent. This includes preparing your home for sale by decluttering, making necessary repairs, and staging it to appeal to potential buyers. You&apos;ll also need to be available for showings, provide necessary documents, and make decisions during the negotiation process.</p>
                    </div>
                </div>
            </section>
            {/* faq */}
        </div>
    )
}
