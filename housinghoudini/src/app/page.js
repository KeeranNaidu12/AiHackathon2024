'use client'
import React from 'react';
import Header from '@/components/Header';
import UserDataForm from '@/components/UserDataForm';
import Footer from '@/components/Footer';
import { useState } from 'react';



function Home() {
  const [response, setResponse] = useState('');

  const handleClick = async () => {
    const studentPreferences = "21, male. Budget: $1200 a month. Prefers furnished room and likes movies";
    const listingDesc = "A cozy 2-bedroom apartment with a beautiful view near a movie theatre";

    try {
      const res = await fetch('/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          studentPreferences,
          listingDesc
        })
      });

      const data = await res.json();
      setResponse(data.result);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <div>
      <Header
        title="Find a property that fits just right!"
        subtitle="Enter your preferences below"
      />
      <UserDataForm />
      <button onClick={handleClick}>Generate Response</button>
      <p>Response: {response}</p>
      <Footer />
    </div>
  );
}



export default Home;