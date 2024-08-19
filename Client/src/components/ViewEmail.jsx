import { ArrowBack, Delete } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { useOutletContext, useLocation } from "react-router-dom";

const ViewEmail = () => {
  const { openDrawer } = useOutletContext();

  const { state } = useLocation();
  const { email } = state;
  return (
    <Box>
      <Box
        style={
          openDrawer
            ? { marginLeft: 250, width: "calc(100% - 250px)" }
            : { width: "100%" }
        }
      >
        <ArrowBack
          onClick={() => window.history.back()}
          color="action"
          size="small"
        />
        <Delete color="action" size="small" />
      </Box>
      <Typography>{email.subject}</Typography>
      <Box>
        <img src="" alt="" />
      </Box>
    </Box>
  );
};

export default ViewEmail;
