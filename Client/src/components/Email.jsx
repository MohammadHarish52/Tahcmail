import { StarBorder } from "@mui/icons-material";
import { Box, Checkbox, styled, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { routes } from "../routes/routes";

const Email = ({ email, getselectedemails }) => {
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

  return (
    <Wrapper>
      <Checkbox
        size="small"
        style={{ marginRight: "10px" }}
        checked={getselectedemails.includes(email._id)}
      />
      <StarBorder fontSize="small" style={{ marginRight: "10px" }} />
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
