import App from "../App";
import React from "react";
import '../App.css'

import {sidebarData} from "./sidbarData"

function Sidebar() {
return(
    <div className="Sidebar">
        <ul className="Sidebar-links">
            {/* Ul holds the function below, function map values for navbar */}
            {sidebarData.map ((val,key) => {
                return <li key={key} onClick={() => window.location.pathname = val.link} className="sidebar-link">
                    <div className="title">
                        title
                    </div>
                    <div className="icon">
                        icon here
                    </div>
                    
                </li>;
            })}

        </ul>

    </div>

);
}

export default Sidebar;
