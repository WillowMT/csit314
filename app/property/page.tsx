import Navigation from "@/components/nav";
import { demo } from "@/utils/demo";

export default async function Page() {
    return(
        <div className="">
            <Navigation />
            <h1>Property Page</h1>
            <pre>
                {
                    demo.properties.map((property: any) => {
                        return (
                            JSON.stringify(property, null, 2)
                        )
                    })
                }
            </pre>
        </div>
    )
}