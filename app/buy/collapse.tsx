'use client'
import React from "react";
import { AccordionItem, Input, Button, RadioGroup, Radio } from "@nextui-org/react";
import { SearchIcon } from "./SearchIcon";
import { MyAccordion } from "./MyAccordion";
import './styles.css';

export default function Collapse() {
    const [selected, setSelected] = React.useState("onsale");

    return (
        <div>
            <MyAccordion variant="light" color="gray" defaultExpandedKeys={["1"]} isCompact>
                <AccordionItem key="1" aria-label="Filter" title="">
                    <div className="flex flex-col items-center">
                        <h2 className=" text-black text-2xl py-4">Property Filter</h2>
                        <div className="w-[500px] h-[100px] pl-6 rounded-2xl flex justify-center items-center">
                            <Input
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
                        </div>
                        <div className="">
                            <RadioGroup orientation="horizontal"
                                color="default"
                                value={selected}
                                onValueChange={setSelected}
                                defaultValue="onsale">
                                <Radio value="onsale">On Sale</Radio>
                                <Radio value="sold">Sold</Radio>
                            </RadioGroup>
                        </div>
                    </div>
                    <div className="flex py-4 justify-center pr-5">
                        <Button>
                            Apply filter
                        </Button>
                    </div>
                </AccordionItem>
            </MyAccordion>
        </div>
    );
}
