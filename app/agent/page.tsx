import Navigation from "@/components/nav";
import "../globals.css";
import "./agent.css";

import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
    Input,
    Select,
    SelectItem,
} from "@nextui-org/react";

export default function Page() {
    return (
        <div className="">
            <Navigation />
            <h1>Welcome, Agent username!</h1>

            <div className="col">
                <div className="row">
                    <Input
                        isRequired
                        name="agent-name"
                        className="mb-4 max-w-[400px] mx-auto"
                        type="text"
                        label="Agent Name"
                        labelPlacement={"outside"}
                        placeholder="Name"
                        value={"Johnny Tan"}
                    />
                </div>

                <div className="row">
                    <Input
                        isRequired
                        name="agent-email"
                        className="mb-4 max-w-[400px] mx-auto"
                        type="email"
                        label="Agent Email"
                        labelPlacement={"outside"}
                        placeholder="Name"
                        value={"johnnytan@gmail.com"}
                    />
                </div>
            </div>

            <div className="col">
                <div className="row">
                    <Input
                        isRequired
                        name="agent-name"
                        className="mb-4 max-w-[400px] mx-auto"
                        type="number"
                        label="Agent Contact"
                        labelPlacement={"outside"}
                        placeholder="Name"
                        value={"91234667"}
                    />
                </div>

                <div className="row">
                    <Input
                        isRequired
                        name="agent-name"
                        className="mb-4 max-w-[400px] mx-auto"
                        type="text"
                        label="Agent Password"
                        labelPlacement={"outside"}
                        placeholder="Name"
                        value={"*********"}
                    />
                </div>
            </div>

            <div className="col">
                <div className="row">
                    <Button>Save</Button>
                    <Button>Cancel</Button>
                </div>
            </div>

            <div className="row">
                <Button>Return</Button>
            </div>
        </div>
    );
}
