import { useOutletContext } from "react-router-dom";

const ViewEmail = () => {
  const { openDrawer } = useOutletContext();
  return (
    <div
      style={
        openDrawer
          ? { marginLeft: 250, width: "100%", overflowX: "hidden" }
          : { width: "100%" }
      }
    >
      View from email
    </div>
  );
};

export default ViewEmail;
