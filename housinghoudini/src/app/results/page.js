import React from "react";
import Header from "@/components/Header";
import ResultsOutput from "@/components/ResultsOutput";
import Footer from "@/components/Footer";

function Results(){
  return(
  <div>
    <Header/>
   <ResultsOutput housingdata={housingData}/>
  <Footer/>
  </div>);
}

export default Results; 