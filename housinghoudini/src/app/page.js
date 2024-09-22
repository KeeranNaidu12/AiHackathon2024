'use client'
import React from 'react';
import { useState } from 'react';
import Header from '@/components/Header';
import UserDataForm from '@/components/UserDataForm';
import Footer from '@/components/Footer';
import ResultsOutput from '@/components/ResultsOutput';



function Home() { 
  const [apiResults, setApiResults] = useState([]);

  return (
    <div>
      <Header
        title="Find a property that fits just right!"
        subtitle="Enter your preferences below"
      />
      <UserDataForm setApiResults={setApiResults}/> {/* Pass setter function to UserDataForm */}
      <ResultsOutput housingList={apiResults}/> {/* Pass API result as props */}
      <Footer />
    </div>
  );
}



export default Home;