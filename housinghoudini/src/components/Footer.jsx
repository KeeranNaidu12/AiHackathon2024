import React from 'react';

let year = new Date().getFullYear();

const footerStyle = { // Temp style
  color: "white", 
  textAlign: "center",
  display: "flex", 
  flexDirection: "column",
  alignItems: "center", 
  justifyContent: "center",
  marginTop: "40px",
  width: "100%",
  height: "100px",
};

function Footer() {  
  return (
    <div style={footerStyle}>
      <p>© Settle {year}</p>
      <p>AI for Social Good Hackathon | Algorithm Avengers</p>
    </div>
  );
}

export default Footer;