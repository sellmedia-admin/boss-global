"use client"
import React, { useState } from "react";
import TabNavItem from "./TabNavItem2";
import TabContent from "./TabContent";
import SMG from "./SMG";
import MoneyTrip from "./MoneyTrip";
 
const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");
 
  return (
    <div className="Tabs max-w-default mx-auto mt-4 mb-28">
      <ul className="nav flex justify-center mx-auto md:mb-10 mb-6">
        <TabNavItem title="SMG" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <TabNavItem title="MoneyTRIP" id="tab2" activeTab={activeTab} setActiveTab={setActiveTab}/>
      </ul>
 
      <div className="outlet">
        <TabContent id="tab1" activeTab={activeTab}>
          <SMG />
        </TabContent>
        <TabContent id="tab2" activeTab={activeTab}>
          <MoneyTrip />
        </TabContent>
      </div>
    </div>
  );
};
 
export default Tabs;