import { Box, CircularProgress, Typography } from "@mui/material";

const SuspenseLoader = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        zIndex: 1000,
        borderRadius: "5px",
      }}
    >
      <CircularProgress
        sx={{
          color: "#0A6847",
          size: 50,
          marginLeft: 10,
          marginTop: 10,
          marginBottom: 10,
          marginRight: 10,
          transition: "all 0.3s ease",
          "&:hover": {
            color: "#40788C",
          },
        }}
      />
      <Typography variant="h6">Loading...</Typography>
    </Box>
  );
};

export default SuspenseLoader;
