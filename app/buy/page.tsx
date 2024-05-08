import Navigation from "@/components/nav";
import React from 'react';
import './styles.css';
import PropertyBox from './PropertyBox'
import Collapse from "./collapse";

export default async function Page() {

  return (
    <div>
        <Navigation />
        <div>
        <Collapse />
        </div>
        <div className="title">
            Listed properties
        </div>
        <PropertyBox />
        <div className="no-more">
            - You have reached the end of the page -
        </div>
    </div>
    
  );
};