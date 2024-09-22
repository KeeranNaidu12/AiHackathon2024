'use client'
import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import ResultsOutput from "@/components/ResultsOutput";
import Footer from "@/components/Footer";

function Results() {
  const [housingData, setHousingData] = useState([]);

  useEffect(() => {
    const storedResults = sessionStorage.getItem("apiResults");
    if (storedResults) {
      setHousingData(JSON.parse(storedResults));
    }
  }, []);

  return (
    <div>
      <Header />
      <ResultsOutput housingList={housingData} /> 
      <Footer />
    </div>
  );
}

export default Results;
