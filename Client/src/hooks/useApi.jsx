import { useState } from "react";
import API from "../services/api.js";

const useApi = (urlObject) => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");

  const call = async (payload) => {
    setResponse(null);
    setLoading(true);
    setError("");
    try {
      let res = await API(urlObject, payload);
      setResponse(res.data);
    } catch (e) {
      setError(e.message);
      console.error(e.message);
    } finally {
      setLoading(false);
    }
  };
  return { call, response, error, loading };
};

export default useApi;
