import React from "react";
const TabNavItem = ({ id, title, activeTab, setActiveTab }) => {
 
 const handleClick = () => {
   setActiveTab(id);
 };
 
return (
   <li onClick={handleClick} className={activeTab === id ? "active" : ""}>
     <p className="text-[14px] md:text-[22px]">{ title }</p>
   </li>
 );
};
export default TabNavItem;