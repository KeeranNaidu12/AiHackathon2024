'use client'
import React from 'react';
import Header from '@/components/Header';
import UserDataForm from '@/components/UserDataForm';
import Footer from '@/components/Footer';
import { Fredoka} from 'next/font/google'
 
const fredoka = Fredoka({
  weight: '500',
  subsets: ['latin'],
});




function Home() { 
  return (
    <div className={fredoka.className}>
      <Header
        title="Find a rental that fits just right!"
        subtitle="Enter your preferences below"
      />
      <UserDataForm/>
      <Footer />
    </div>
  );
}



export default Home;