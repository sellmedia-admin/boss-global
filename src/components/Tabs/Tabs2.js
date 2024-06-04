"use client"
import React, { useState } from "react";
import TabNavItem from "./TabNavItem2";
import TabContent from "./TabContent";
import Settla from "./Settla";
import Supplr from "./Supplr";
 
const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");
 
  return (
    <div className="Tabs max-w-default mx-auto mt-4 mb-28">
      <ul className="nav flex justify-center mx-auto md:mb-10 mb-6">
        <TabNavItem title="Settla" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <TabNavItem title="Supplr" id="tab2" activeTab={activeTab} setActiveTab={setActiveTab}/>
      </ul>
 
      <div className="outlet">
        <TabContent id="tab1" activeTab={activeTab}>
          <Settla />
        </TabContent>
        <TabContent id="tab2" activeTab={activeTab}>
          <Supplr />
        </TabContent>
      </div>
    </div>
  );
};
 
export default Tabs;