const Email = ({ openDrawer }) => {
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
