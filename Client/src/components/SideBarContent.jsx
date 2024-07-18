import { CreateOutlined } from "@mui/icons-material";
import { Box, Button, List, ListItem, styled } from "@mui/material";
import { SideBarData } from "../config/sidebar-content";

const ComposeButton = styled(Button)({
  backgroundColor: "#c2e7ff",
  color: "#001d75",
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
  return (
    <Container>
      <ComposeButton>
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
    </Container>
  );
};

export default SideBarContent;
