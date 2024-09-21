import React from "react";
import ResultsOutput from "./ResultsOutput";

function Results(){
  return(
  <div>
    <Header/>
   <ResultsOutput housingdata={housingData}/>
  <Footer/>
  </div>);
}

export default Results; 