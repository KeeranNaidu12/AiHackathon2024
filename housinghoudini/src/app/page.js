'use client'
import React from 'react';
import { useState } from 'react';
import Header from '@/components/Header';
import UserDataForm from '@/components/UserDataForm';
import Footer from '@/components/Footer';
import { Fredoka} from 'next/font/google'
 
const fredoka = Fredoka({
  weight: '500',
  subsets: ['latin'],
});
import ResultsOutput from '@/components/ResultsOutput';



function Home() { 
  const [apiResults, setApiResults] = useState([]);

  return (
    <div className={fredoka.className}>
      <Header
        title="Find a rental that fits just right!"
        subtitle="Enter your preferences below"
      />
      <UserDataForm setApiResults={setApiResults}/> {/* Pass setter function to UserDataForm */}
      <ResultsOutput housingList={apiResults}/> {/* Pass API result as props */}
      <Footer />
    </div>
  );
}



export default Home;