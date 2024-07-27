import { useState } from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Email from "../components/Emails";

const Main = () => {
  const [openDrawer, setOpenDrawer] = useState(true);

  const toggleDrawer = () => {
    setOpenDrawer((e) => !e);
  };
  return (
    <div>
      <Header toggleDrawer={toggleDrawer} />
      <SideBar openDrawer={openDrawer} />
      <Email openDrawer={openDrawer} />
    </div>
  );
};

export default Main;
