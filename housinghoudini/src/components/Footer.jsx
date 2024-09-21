import React from 'react';

let year = new Date().getFullYear();

const footerStyle = { // Temp style
  backgroundColor: "blue",
  color: "white", 
  textAlign: "center",
  position: "fixed",
  display: "flex", 
  alignItems: "center", 
  justifyContent: "center",
  left: "0",
  bottom: "0",
  width: "100%",
  height: "60px",
};

function Footer() {  
  return (
    <div style={footerStyle}>
      <h1>© Software Name {year}</h1>
    </div>
  );
}

export default Footer;