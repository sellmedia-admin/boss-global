"use client"
import React, { useState } from "react";
import TabNavItem from "./TabNavItem";
import TabContent from "./TabContent";
import Products from "./Products";
import Entities from "./Entities";
 
const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");
 
  return (
    <div className="Tabs max-w-default mx-auto mb-28">
      <ul className="nav flex justify-center max-w-[790px] mx-auto">
        <TabNavItem title="Products" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <TabNavItem title="Entities" id="tab2" activeTab={activeTab} setActiveTab={setActiveTab}/>
      </ul>
 
      <div className="outlet">
        <TabContent id="tab1" activeTab={activeTab}>
          <Products />
        </TabContent>
        <TabContent id="tab2" activeTab={activeTab}>
          <Entities />
        </TabContent>
      </div>
    </div>
  );
};
 
export default Tabs;