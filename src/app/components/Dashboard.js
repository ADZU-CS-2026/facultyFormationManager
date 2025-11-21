"use client";

import { useState } from "react";
import DashboardMain from "../components/DashboardMain";
import DashboardNavbar from "../components/DashboardNavbar";
import DashboardRoot from "../components/DashboardRoot";

export default function Dashboard({ children, data }) {
  const [sidebar, setSideBar] = useState(false);
  const [userPopup, setUserPopup] = useState(false);
  const [notifPopup, setNotifPopup] = useState(false);

  const hoverSideBar = () => {
    setSideBar((sidebar) => (sidebar ? false : true));
    setUserPopup(false);
    setNotifPopup(false);
  };

  return (
    <DashboardRoot sidebar={sidebar}>
      <DashboardNavbar
        sidebar={sidebar}
        hoverSideBar={hoverSideBar}
        userPopup={userPopup}
        setUserPopup={setUserPopup}
        notifPopup={notifPopup}
        setNotifPopup={setNotifPopup}
        data={data}
      />
      <DashboardMain sidebar={sidebar}>{children}</DashboardMain>
    </DashboardRoot>
  );
}
