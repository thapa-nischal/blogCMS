import React from "react";

const Footer = () => {
  return (
    <div
      className="footer"
      style={{
        height: "80px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1rem",
      }}
    >
      <p className="text-3xl font-bold underline">CodeX</p>
    </div>
  );
};

export default Footer;
