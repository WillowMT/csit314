import Navigation from "@/components/nav";
import AccountNav from "./account-nav";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className=" inset-0 absolute overflow-hidden">
            <Navigation />
            <div className=" flex flex-col md:flex-row h-full">
                <div className="bg-brand-400 p-8">
                    <AccountNav />
                </div>
                <div className=" p-8">
                    {children}
                </div>
            </div>
        </div>
    );
}
