import { useOutletContext, useParams } from "react-router-dom";
import { API_URLS } from "../services/api.url.js";
import useApi from "../hooks/useApi.jsx";
import { useEffect, useState } from "react";
import { Box, Checkbox, List } from "@mui/material";
import { DeleteOutlined } from "@mui/icons-material";
import Email from "../components/Email.jsx";
import NoEmail from "./NoEmails.jsx";
import { EMPTY_TABS } from "../constants/constant";

const Emails = () => {
  const [getselectedemails, setGetSelectedEmails] = useState([]);
  const [refreshScreen, setRefreshScreen] = useState(false);

  const { openDrawer } = useOutletContext();
  const { type } = useParams();

  const getEmailService = useApi(API_URLS.getEmails);
  const moveEmailToBinService = useApi(API_URLS.saveBinEmail);
  const deleteEmailService = useApi(API_URLS.deleteEmail);

  useEffect(() => {
    getEmailService.call({}, type);
  }, [type, refreshScreen]);

  const handleSelectedEmails = (e) => {
    if (e.target.checked) {
      const email = getEmailService?.response?.map((email) => email._id);
      setGetSelectedEmails(email);
    } else {
      setGetSelectedEmails([]);
    }
  };

  const deleteSelectedEmails = () => {
    if (type == "bin") {
      deleteEmailService.call(getselectedemails);
      setRefreshScreen((e) => !e);
    } else {
      moveEmailToBinService.call(getselectedemails);
      setRefreshScreen((e) => !e);
    }
  };
  return (
    <Box
      style={
        openDrawer
          ? { marginLeft: 250, width: "calc(100% - 250px)" }
          : { width: "100%" }
      }
    >
      <Box
        style={{
          padding: "20px 10px 0 10px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Checkbox size="small" onChange={handleSelectedEmails} />
        <DeleteOutlined onClick={(e) => deleteSelectedEmails(e)} />
      </Box>
      <Box>
        <List>
          {getEmailService?.response?.map((item) => (
            <Email
              key={item._id}
              email={item}
              getselectedemails={getselectedemails}
              setRefreshScreen={setRefreshScreen}
              setGetSelectedEmails={setGetSelectedEmails}
            />
          ))}
          {getEmailService.response?.length === 0 && (
            <NoEmail message={EMPTY_TABS[type]} />
          )}
        </List>
      </Box>
    </Box>
  );
};

export default Emails;
