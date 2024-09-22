'use client'
import React from 'react';
import { useState } from 'react';
import Header from '@/components/Header';
import UserDataForm from '@/components/UserDataForm';
import Footer from '@/components/Footer';



function Home() { 
  const [apiResults, setApiResults] = useState([]);

  return (
    <div>
      <Header
        title="Find a property that fits just right!"
        subtitle="Enter your preferences below"
      />
      <UserDataForm/> 
      <Footer />
    </div>
  );
}



export default Home;