import { ArrowBack, Delete } from "@mui/icons-material";
import { Box, styled, Typography } from "@mui/material";
import { useOutletContext, useLocation } from "react-router-dom";

const Container = styled(Box)({
  marginLeft: 15,
  display: "flex",
  flexDirection: "column",
});

const ViewEmail = () => {
  const { openDrawer } = useOutletContext();

  const { state } = useLocation();
  const { email } = state;
  return (
    <Box
      style={
        openDrawer
          ? { marginLeft: 250, width: "calc(100% - 250px)" }
          : { width: "100%" }
      }
    >
      <Box sx={{ padding: "15px" }}>
        <ArrowBack
          onClick={() => window.history.back()}
          color="action"
          size="small"
        />
        <Delete color="action" size="small" sx={{ marginLeft: "38px" }} />
      </Box>
      <Typography
        sx={{ fontSize: "22px", margin: "10px 0px 20px 75px", display: "flex" }}
      >
        {email.subject}{" "}
        <Box
          component="span"
          sx={{
            fontSize: "12px",
            background: "#ddd",
            padding: "2px 4px",
            borderRadius: "4px",
            alignSelf: "center",
            marginLeft: "4px",
          }}
        >
          Inbox
        </Box>
      </Typography>
      <Container>
        <Box sx={{ display: "flex" }}>
          <img
            src="/public/images/logo.jpg"
            alt=""
            style={{ height: "40px", width: "40px", borderRadius: "50%" }}
          />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              marginLeft: "20px",
            }}
          >
            <Typography>
              {email.name}{" "}
              <Box component="span" sx={{ fontSize: "12px", color: "#5e5e5e" }}>
                &#60;{email.to}&#62;
              </Box>
            </Typography>
            <Box
              sx={{
                margin: "0 50px 0 auto",
                color: "#5e5e5e",
                fontSize: "12px",
              }}
            >
              {new Date(email.date).getDate()}&nbsp;
              {new Date(email.date).toLocaleString("default", {
                month: "long",
              })}
              &nbsp;
              {new Date(email.date).getFullYear()}
            </Box>
          </Box>
        </Box>
        <Typography style={{ marginTop: "20px", marginLeft: "60px" }}>
          {email.body}
        </Typography>
      </Container>
    </Box>
  );
};

export default ViewEmail;
