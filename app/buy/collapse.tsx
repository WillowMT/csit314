'use client'
import React from "react";
import { AccordionItem, Input, Button, RadioGroup, Radio } from "@nextui-org/react";
import { SearchIcon } from "./SearchIcon";
import { MyAccordion } from "./MyAccordion";
import './styles.css';
import { useRouter } from "next/navigation";

export default function Collapse() {
    const [selected, setSelected] = React.useState("onsale");
    const router = useRouter();

    return (
        <div>
            <MyAccordion variant="light" color="gray" defaultExpandedKeys={["1"]} isCompact>
                <AccordionItem key="1" aria-label="Filter" title="">
                    <div className="flex flex-col items-center pb-8">
                        <h2 className=" text-black text-2xl py-4">Property Filter</h2>
                        <div className="w-[500px] h-[100px] pl-6 rounded-2xl flex justify-center items-center">
                            <form className="max-w-[350px]" action={
                                async (e) => {
                                    const search = e.get('search')

                                    if (!search) {
                                        return
                                    }

                                    const radio = e.get('radio')
                                    router.push(`/property/onsale/${search}`)

                                }

                            }>
                                <Input
                                    name="search"
                                    className=""
                                    label="Search by location"
                                    isClearable
                                    radius="lg"
                                    classNames={{
                                        label: "text-black/50 dark:text-white/90",
                                        input: [
                                            "text-black/90 dark:text-white/90",
                                            "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                                        ],
                                        innerWrapper: "bg-transparent",
                                        inputWrapper: [
                                            "shadow-xl",
                                            "bg-default-50",
                                            "dark:bg-default/60",
                                            "backdrop-blur-xl",
                                            "backdrop-saturate-200",
                                            "hover:bg-default-900/70",
                                            "dark:hover:bg-default/70",
                                            "group-data-[focused=true]:bg-default-200/50",
                                            "dark:group-data-[focused=true]:bg-default/60",
                                            "!cursor-text rounded-md",
                                        ],
                                    }}
                                    placeholder="Type to search..."
                                    startContent={
                                        <SearchIcon className="text-black/50 mb-0.5 dark:text-black/90 text-slate-400 pointer-events-none flex-shrink-0" />
                                    }
                                />
                                <div className="flex flex-row mt-4 justify-around">
                                    <Button onClick={() => {
                                        router.push('/property/onsale')
                                    }} value="onsale">On Sale</Button>
                                    <Button onClick={() => {
                                        router.push('/property/sold')
                                    }} value="sold">Sold</Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </AccordionItem>
            </MyAccordion>
        </div>
    );
}
