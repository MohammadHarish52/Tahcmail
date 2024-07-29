import { useOutletContext, useParams } from "react-router-dom";
import { API_URLS } from "../services/api.url.js";
import useApi from "../hooks/useApi.jsx";
import { useEffect } from "react";

const Email = () => {
  const { openDrawer } = useOutletContext();
  const { type } = useParams();

  const getEmailService = useApi(API_URLS.getEmails);

  useEffect(() => {
    getEmailService.call({}, type);
  }, [type]);
  return (
    <div
      style={
        openDrawer ? { marginLeft: 250, width: "100%" } : { width: "100%" }
      }
    >
      Hllo from email
    </div>
  );
};

export default Email;
