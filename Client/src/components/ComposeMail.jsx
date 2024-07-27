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
import { useState } from "react";
import useApi from "../hooks/useApi";
import { API_URLS } from "../services/api.url.js";

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

const ComposeMail = ({ openDialog, toggleDialog, setOpenDialog }) => {
  const [data, setData] = useState({});
  const sentEmailService = useApi(API_URLS.saveSentEmail);

  const config = {
    Host: "smtp.elasticemail.com",
    Username: "harishdj89@yopmail.com",
    Password: "B58BF822003F97506B6D04AC088B2701CD8C",
    Port: 2525,
  };

  const onValueChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };

  const sendMail = (e) => {
    e.preventDefault();
    if (window.Email) {
      window.Email.send({
        ...config,
        To: data.to,
        From: "xharish52@gmail.com",
        Subject: data.subject,
        Body: data.body,
      }).then((message) => alert(message));
    }
    const payload = {
      to: data.to,
      from: "xharish52@gmail.com",
      subject: data.subject,
      body: data.body,
      date: new Date(),
      image: "",
      name: "Harish",
      starred: false,
      type: "sent",
    };
    sentEmailService.call(payload);
    if (!sentEmailService.error) {
      setOpenDialog(false);
      setData({});
      alert("Email sent successfully");
    }
    setOpenDialog(false);
  };

  const deleteMail = () => {
    setOpenDialog(false);
  };
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
        <InputBase
          placeholder="To"
          name="to"
          onChange={(e) => onValueChange(e)}
        />
        <InputBase
          placeholder="Subject"
          name="subject"
          onChange={(e) => onValueChange(e)}
        />
      </TextAreaSection>
      <Box>
        <TextField
          name="body"
          multiline
          rows={20}
          sx={{
            width: "100%",
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
          }}
          onChange={(e) => onValueChange(e)}
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
          onClick={(e) => sendMail(e)}
        >
          Send
        </Button>
        <DeleteOutline onClick={() => deleteMail()} />
      </Box>
    </Dialog>
  );
};

export default ComposeMail;
