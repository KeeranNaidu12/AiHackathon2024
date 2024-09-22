import React from "react";
<<<<<<< HEAD
import Header from "@/components/Header";
import ResultsOutput from "@/components/ResultsOutput";
import Footer from "@/components/Footer";
=======
import ResultsOutput from "./ResultsOutput";
>>>>>>> 19dcc08a2aa4f62de1cf83e370b5ab6e564af287

function Results(){
  return(
  <div>
    <Header/>
   <ResultsOutput housingdata={housingData}/>
  <Footer/>
  </div>);
}

export default Results; 