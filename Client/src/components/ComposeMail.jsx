import { Close, DeleteOutline } from "@mui/icons-material";
import {
  Dialog,
  Box,
  Typography,
  styled,
  InputBase,
  TextField,
  Button,
} from "@mui/material";

const dialogStyle = {
  height: "90%",
  width: "80%",
  overflow: "auto",
  borderRadius: "10px 10px 0 0",
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "none",
};

const Header = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  padding: "10px 15px",
  backgroundColor: "#E0FBE2",
  "& > p": {
    fontSize: "14px",
    fontWeight: 500,
  },
});

const TextAreaSection = styled(Box)({
  display: "flex",
  padding: "0 15px",
  flexDirection: "column",
  "& > div": {
    fontSize: "14px",
    borderBottom: "2px solid #f3f6f6",
    marginTop: "10px",
  },
});

const ComposeMail = ({ openDialog, toggleDialog }) => {
  return (
    <Dialog
      open={openDialog}
      PaperProps={{
        sx: dialogStyle,
      }}
    >
      <Header>
        <Typography>New Message</Typography>
        <Close fontSize="small" onClick={toggleDialog} />
      </Header>
      <TextAreaSection>
        <InputBase placeholder="To" />
        <InputBase placeholder="Subject" />
      </TextAreaSection>
      <Box>
        <TextField
          multiline
          rows={20}
          sx={{
            width: "100%",
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
          }}
        />
      </Box>
      <Box
        sx={{
          padding: "0 15px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Button
          variant="contained"
          sx={{
            background: "#0A6847",
            color: "#fff",
            fontSize: "14px",
            fontWeight: 500,
            textTransform: "none",
            height: 40,
            boxShadow: "none",
            borderRadius: "18px",
            "&:hover": {
              color: "#fff",
            },
          }}
          onClick={toggleDialog}
        >
          Send
        </Button>
        <DeleteOutline onClick={toggleDialog} />
      </Box>
    </Dialog>
  );
};

export default ComposeMail;
