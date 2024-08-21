import { Star, StarBorder } from "@mui/icons-material";
import { Box, Checkbox, styled, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { routes } from "../routes/routes";
import { API_URLS } from "../services/api.url";
import useApi from "../hooks/useApi";

const Email = ({
  email,
  getselectedemails,
  setRefreshScreen,
  setGetSelectedEmails,
}) => {
  const navigate = useNavigate();
  const Wrapper = styled(Box)({
    padding: "0 0 0 10px",
    display: "flex",
    alignItems: "center",
    background: "#ebffec",
    cursor: "pointer",
    "& > div": {
      display: "flex",
      alignItems: "center",
      width: "100%",
      "& > p": {
        fontSize: 14,
      },
    },
  });

  const toggledStarServive = useApi(API_URLS.getStarredEmail);

  const toggleStaremail = () => {
    toggledStarServive.call({ id: email._id, value: !email.starred });
    setRefreshScreen((e) => !e);
  };

  const onValueChnage = () => {
    if (getselectedemails.includes(email._id)) {
      setGetSelectedEmails((e) => e.filter((id) => id !== email._id));
    } else {
      setGetSelectedEmails((e) => [...e, email._id]);
    }
  };

  return (
    <Wrapper>
      <Checkbox
        size="small"
        style={{ marginRight: "10px" }}
        checked={getselectedemails.includes(email._id)}
        onChange={() => onValueChnage()}
      />
      {email.starred ? (
        <Star
          fontSize="small"
          style={{ marginRight: "10px", color: "yellowgreen" }}
          onClick={() => toggleStaremail()}
        />
      ) : (
        <StarBorder
          fontSize="small"
          style={{ marginRight: "10px" }}
          onClick={() => toggleStaremail()}
        />
      )}

      <Box
        onClick={() => navigate(routes.view.path, { state: { email: email } })}
      >
        {" "}
        <Typography variant="p" sx={{ width: 200, overflow: "hidden" }}>
          {email.name}
        </Typography>
        <Typography
          variant="p"
          sx={{
            fontSize: "12px !important",
            background: "#ddd",
            color: "#222",
            padding: "4px 4px",
            marginRight: "6px",
            borderRadius: "2px",
          }}
        >
          Inbox
        </Typography>
        <Typography variant="p">
          {email.subject}
          {email.body && "-"}
        </Typography>
        <Typography
          sx={{
            marginLeft: "auto",
            marginRight: "20px",
            fontSize: 12,
            color: "#5f6368",
          }}
        >
          {new Date(email.date).getDate()}{" "}
          {new Date(email.date).toLocaleString("default", {
            month: "long",
          })}
        </Typography>
      </Box>
    </Wrapper>
  );
};

export default Email;
