import Drawer from "@mui/material/Drawer";

const SideBar = () => {
  return (
    <Drawer
      anchor="left"
      open="true"
      hideBackdrop="true"
      boxShadow="none"
      ModalProps={{
        KeepMounted: true,
      }}
      variiant="persistent"
      sx={{
        "& .MuiDrawer-paper": {
          marginTop: "64px",
          width: 250,
          background: "#f3f3f3",
          borderRight: "none",
          height: "calc(100vh-64px)",
        },
      }}
    ></Drawer>
  );
};

export default SideBar;
