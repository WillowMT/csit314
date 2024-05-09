'use client'
import React from "react";
import {AccordionItem} from "@nextui-org/react";
import {Input} from "@nextui-org/react";
import {SearchIcon} from "./SearchIcon";
import {Button} from "@nextui-org/react";
import {RadioGroup, Radio} from "@nextui-org/react";
import {MyAccordion} from "./MyAccordion";
import './styles.css';

export default function Collapse() {

    return (
        <div className="flex w-full flex-col">
            <div className="filter_text">
                Property Filter
            </div>
            <MyAccordion variant="light" color="gray" defaultExpandedKeys={["1"]} isCompact>
            <AccordionItem key="1" aria-label="Filter" title="">
            <div className = "filter_bar">
            <div className="search_bar">
                <Input
                    label="Search"
                    isClearable
                    radius="lg"
                    classNames={{
                    label: "text-black/50 dark:text-white/90",
                    input: [
                        "bg-transparent",
                        "text-black/90 dark:text-white/90",
                        "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                    ],
                    innerWrapper: "bg-transparent",
                    inputWrapper: [
                        "shadow-xl",
                        "bg-default-200/50",
                        "dark:bg-default/60",
                        "backdrop-blur-xl",
                        "backdrop-saturate-200",
                        "hover:bg-default-200/70",
                        "dark:hover:bg-default/70",
                        "group-data-[focused=true]:bg-default-200/50",
                        "dark:group-data-[focused=true]:bg-default/60",
                        "!cursor-text",
                    ],
                    }}
                    placeholder="Type to search..."
                    startContent={
                    <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
                    }
                />
            </div>
            <div className="min_price">
                Price
                <Input
                type="number"
                placeholder="0.00"
                startContent={
                    <div className="pointer-events-none flex items-center">
                    <span className="text-default-400 text-small">$</span>
                    </div>
                }
                />
            </div>
            <div className="max_price">
                <Input
                type="number"
                placeholder="0.00"
                startContent={
                    <div className="pointer-events-none flex items-center">
                    <span className="text-default-400 text-small">$</span>
                    </div>
                }
                />
            </div>
            <div className="bedroom_no">
                Bedrooms       
                <RadioGroup orientation="horizontal"
                color="default"
                defaultValue="any_bedroom">
                <Radio value="any_bedroom">Any</Radio>
                <Radio value="1_bedroom">1</Radio>
                <Radio value="2_bedroom">2</Radio>
                <Radio value="3_bedroom">3</Radio>
                <Radio value="4_bedroom">4</Radio>
                <Radio value="5_bedroom">5</Radio>
                </RadioGroup>
            </div>
            <div className="bathroom_no">
                Bathrooms
                <RadioGroup orientation="horizontal"
                color="default"
                defaultValue="any_bathroom">
                <Radio value="any_bathroom">Any</Radio>
                <Radio value="1_bathroom">1</Radio>
                <Radio value="2_bathroom">2</Radio>
                <Radio value="3_bathroom">3</Radio>
                <Radio value="4_bathroom">4</Radio>
                <Radio value="5_bathroom">5</Radio>
                </RadioGroup>
            </div>
            <div className="property_type_filter">
                Property Type
                <RadioGroup orientation="horizontal"
                color="default"
                defaultValue="any_type">
                <Radio value="any_type">Any</Radio>
                <Radio value="HDB">HDB</Radio>
                <Radio value="Land">Land</Radio>
                <Radio value="Condominium">Condominium</Radio>
                <Radio value="Apartment">Apartment</Radio>
                </RadioGroup>
            </div>
            <div>
                <Button className="search_button">
                    Apply filter
                </Button>
            </div>
        </div>
            </AccordionItem>
            </MyAccordion>
        </div>
    );
}
