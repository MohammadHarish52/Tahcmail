import Drawer from "@mui/material/Drawer";
import SideBarContent from "./SideBarContent";

const SideBar = ({ openDrawer }) => {
  return (
    <Drawer
      anchor="left"
      open={openDrawer}
      hideBackdrop={true}
      boxShadow="none"
      ModalProps={{
        KeepMounted: true,
      }}
      variant="persistent"
      sx={{
        "& .MuiDrawer-paper": {
          marginTop: "64px",
          width: 250,
          background: "#f6f8fc",
          borderRight: "none",
          height: "calc(100vh-64px)",
          boxShadow: "none",
        },
      }}
    >
      <SideBarContent />
    </Drawer>
  );
};

export default SideBar;
