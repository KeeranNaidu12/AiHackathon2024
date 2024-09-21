import React from "react";

const headerStyle = { // Temp style
  color: "#fff",
  padding: "1rem",
  textAlign: "center",
  marginBottom: "2rem",
};

function Header(props) {
  return (
    <div style={headerStyle}>
      <h1 style={{ fontSize: "3em" }}>{props.title}</h1>
      <h2 style={{ fontSize: "2em" }}>{props.subtitle}</h2>
    </div>
  );
}

export default Header;
