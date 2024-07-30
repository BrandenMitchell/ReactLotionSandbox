import App from "../App";
import React from "react";
import '../App.css'
import {SidebarData} from "./sidebarData"

function Sidebar(){
    return(
        <div className="Sidebar">
            <ul className="sidebar-links">
                {SidebarData.map((val,key) => {
                    return(
                        <li key = {key} onClick = {() => {
                            window.location.pathname = val.link;

                        }}  >
                            <div>
                                {val.icon}
                            </div>
                            <div>
                                {val.title}
                            </div>

                        </li>

                    )
                })}
            </ul>

        </div>
    
    
    );
}

export default Sidebar;
