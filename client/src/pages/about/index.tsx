import Head from 'next/head';
import Link from 'next/link';
import styles from '../about/about.module.css';
import Navbar from '../../pages/components/navbar/navbar';
import Footer from '../../pages/components/footer/footer';
import React, { useState } from 'react';
import Popup from '../components/popup/popup';

export default function About() {

  const [ popUp, setPopUp ] = useState(true)
  
  return (
    <>
        <Popup trigger={popUp} setTrigger={setPopUp}>
      <div className='FlexCol'>
        <img src='/appbanner-socialfunc.png'></img>
        <h1 className='HeadText BoldText'>UNDER CONSTRUCTION!</h1>
        <h1 className='SubHeadText GreyText'>This page is currently in development, will be coming soon!</h1>
        <h1 className='SubHeadText'>If you would like to help in development, please contact us with any of the contact methods in the about section!</h1>
      </div>
    </Popup>
      <Head>
        <title>SocialFunc | About</title>
      </Head>
      <main>
        <Navbar />
        <div className='FlexCol'>
          <h1>-</h1>
          <h1 className='HeadText YellowText'>UNDER CONSTRUCTION!</h1>
        </div>
        <Footer />
      </main>
    </>
  )
}
