import { Box, Divider, Typography } from "@mui/material";

const NoEmail = ({ message }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        marginTop: "50px",
        opacity: ".8",
        width: "100%",
      }}
    >
      <Typography>{message.heading}</Typography>
      <Typography>{message.subHeading}</Typography>
      <Divider
        sx={{
          width: "100%",
          marginTop: "10px",
        }}
      />
    </Box>
  );
};

export default NoEmail;
