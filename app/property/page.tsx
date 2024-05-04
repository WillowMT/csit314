import Navigation from "@/components/nav";
import { viewSellerProperty } from "@/utils/controller";

export default async function Page() {
    const properties = await viewSellerProperty.getCreatedProperty()
    return(
        <div className="">
            <Navigation />
            <h1>Property Page</h1>
            <pre>
                {
                    properties.map((property: any) => {
                        return (
                            JSON.stringify(property, null, 2)
                        )
                    })
                }
            </pre>
        </div>
    )
}