import { CreateOutlined } from "@mui/icons-material";
import { Box, Button, List, ListItem, styled } from "@mui/material";
import { SideBarData } from "../config/sidebar-content";
import ComposeMail from "./ComposeMail";
import { useState } from "react";

const ComposeButton = styled(Button)({
  backgroundColor: "#E0FBE2",
  color: "#000",
  padding: 15,
  borderRadius: 16,
  textTransform: "none",
  height: 56,
  minWidth: 96,
});

const Container = styled(Box)({
  padding: 8,
  "& > ul": {
    padding: "10px 0 0 5px",
    fontSize: "14px",
    fontWeight: 500,
    "& > li > svg": {
      marginRight: "20px",
    },
  },
});

const SideBarContent = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const toggleDialog = (e) => {
    e.preventDefault();
    setOpenDialog(!openDialog);
  };
  return (
    <Container>
      <ComposeButton onClick={toggleDialog}>
        <CreateOutlined sx={{ marginRight: 1 }} />
        Compose
      </ComposeButton>
      <List>
        {SideBarData.map((item) => (
          <ListItem key={item.name} action="color">
            <item.icon /> {item.title}
          </ListItem>
        ))}
      </List>
      <ComposeMail openDialog={openDialog} toggleDialog={toggleDialog} />
    </Container>
  );
};

export default SideBarContent;
