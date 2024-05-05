import Navigation from "@/components/nav";
// import { viewSellerProperty } from "@/utils/controller";
import * as controller from '@/utils/controllers/globalControllers'

export default async function Page() {
    // const properties = await viewSellerProperty.getCreatedProperty()
    const properties = await controller.buyerViewOnSalePropertyController.getOnSaleProperty()
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