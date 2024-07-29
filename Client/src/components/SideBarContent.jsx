import { CreateOutlined } from "@mui/icons-material";
import { Box, Button, List, ListItem, styled } from "@mui/material";
import { SideBarData } from "../config/sidebar-content";
import ComposeMail from "./ComposeMail";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { routes } from "../routes/routes.js";

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
    "& > a": {
      textDecoration: "none",
      color: "inherit",
    },
  },
  "& > ul > a > li > svg": {
    marginRight: "20px",
  },
});

const SideBarContent = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const { type } = useParams();
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
          <Link
            to={`${routes.emails.path}/${item.name.toLowerCase()}`}
            key={item.name}
          >
            <ListItem
              action="color"
              style={
                type === item.name.toLowerCase()
                  ? {
                      backgroundColor: "#e0fbe2",
                      borderLeft: "5px solid #0A6847",
                      borderRadius: "0 0 5px 5px",
                    }
                  : {
                      borderLeft: "5px solid #E0FBE2",
                    }
              }
            >
              <item.icon /> {item.title}
            </ListItem>
          </Link>
        ))}
      </List>
      <ComposeMail
        openDialog={openDialog}
        toggleDialog={toggleDialog}
        setOpenDialog={setOpenDialog}
      />
    </Container>
  );
};

export default SideBarContent;
