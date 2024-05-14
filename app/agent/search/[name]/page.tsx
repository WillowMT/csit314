import { demo } from "@/utils/demo";
import Navigation from "@/components/nav";
import SearchBar from "./search-bar";
import AgentCard from "./agent-card";
import { SearchAgentController } from "@/utils/controllers/agent";

export default async function Page({
    params
}: {
    params: {
        name: string;
    };
}) {

    const searchAgent = new SearchAgentController()

    var agents

    agents = await searchAgent.getAgentDetails(params.name == "all" ?  "" : params.name)

    return (
        <div>
            <Navigation />
            <div>
                <SearchBar />
                <div className="pt-4">
                    <h2 className=" text-3xl text-center">Agents</h2>
                    <div className="p-4">
                        {
                            agents?.user.map((usr, i) => {
                                return (
                                    <AgentCard key={i} user={usr} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

