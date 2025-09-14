"use client";

import { useState } from "react"
import DashboardMain from "../../components/DashboardMain";
import DashboardNavbar from "../../components/DashboardNavbar";
import DashboardRoot from "../../components/DashboardRoot";

export default function Dashboard({children}){

    const [sidebar, setSideBar] = useState(false);
    
      const hoverSideBar = () => {
        setSideBar(sidebar => sidebar ? false : true);
      }

    return(
      <DashboardRoot sidebar={sidebar}>
        <DashboardNavbar sidebar={sidebar} hoverSideBar={hoverSideBar}/>
        <DashboardMain sidebar={sidebar}>
          {children}
        </DashboardMain>
      </DashboardRoot>
    )
}