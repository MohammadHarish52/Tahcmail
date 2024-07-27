import { AppBar, Box, InputBase, styled, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../public/images/tachmail.png";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import {
  AccountCircle,
  AppsOutlined,
  HelpOutlineOutlined,
  SettingsOutlined,
} from "@mui/icons-material";

const StyledAppbar = styled(AppBar)({
  background: "#f6f8fc",
  boxShadow: "none",
});
const SearchBar = styled(Box)({
  background: "#ebf0fb",
  marginLeft: 80,
  borderRadius: 16,
  minWidth: 690,
  height: 48,
  maxWidth: 720,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0px 20px",
  "& > div": {
    width: "100%",
    padding: "0 5px",
  },
});
const OptionBar = styled(Box)({
  width: "100%",
  display: "flex",
  justifyContent: "end",
  alignItems: "center",
  "& > svg": {
    marginLeft: 20,
  },
});

const Header = ({ toggleDrawer }) => {
  return (
    <div>
      <StyledAppbar position="static" color="action">
        <Toolbar>
          <MenuIcon onClick={toggleDrawer} />
          <img
            src={logo}
            alt="gmail"
            style={{
              width: 109,

              marginLeft: 15,
            }}
          />
          <SearchBar>
            <SearchIcon color="action" />
            <InputBase placeholder="Search Email" />
            <TuneIcon color="action" />
          </SearchBar>
          <OptionBar>
            <HelpOutlineOutlined color="action" />
            <SettingsOutlined color="action" />
            <AppsOutlined color="action" />
            <AccountCircle color="action" />
          </OptionBar>
        </Toolbar>
      </StyledAppbar>
    </div>
  );
};

export default Header;
