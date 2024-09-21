import React from 'react';

let year = new Date().getFullYear();

const footerStyle = { // Temp style
  backgroundColor: "blue",
  color: "white", 
  textAlign: "center",
  position: "fixed",
  display: "flex", 
  flexDirection: "column",
  alignItems: "center", 
  justifyContent: "center",
  left: "0",
  bottom: "0",
  width: "100%",
  height: "15%",
};

function Footer() {  
  return (
    <div style={footerStyle}>
      <p>© Software Name {year}</p>
      <p>AI for Social Good Hackathon | Algorithm Avengers</p>
    </div>
  );
}

export default Footer;