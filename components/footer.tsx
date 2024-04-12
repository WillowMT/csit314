import Link from "next/link";

export default function Footer() {
    return(
        <div className=" bg-brand-200 p-4 mt-auto">
            <Link className="mr-2 sm:mr-6 md:mr-8 ml-4 text-xs md:text-sm hover:underline " href={'/contact'}><span>Contact Us</span></Link>
            <Link className="mr-2 sm:mr-6 md:mr-8 text-xs md:text-sm hover:underline " href={'/about'}><span>About Us</span></Link>
            <Link className="mr-2 sm:mr-6 md:mr-8 text-xs md:text-sm hover:underline  " href={'/feedback'}><span>Share Feedback</span></Link>
        </div>
    )
}