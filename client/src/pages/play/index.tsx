import Head from 'next/head';
import styles from '../play/play.module.css';
import Navbar from '../../pages/components/navbar/navbar';
import Footer from '../../pages/components/footer/footer';
import React, { useState } from 'react';
// popups
import Popup from '../components/popup/popup';
import HelpPopup from '../components/popup/popupcontent/helppopup';

export default function Gamepage() {

  const [ helpPopup, setHelpPopup ] = useState(false);
  
  return (
    <>
      <Head>
        <title>SocialFunc | Play</title>
        <link rel='stylesheet' href='index.css' />
      </Head>
      <main>
        <Navbar />
        <div className={'FlexCol ' + styles.HomeContainer}>
          <form>
            <label htmlFor='roomCode'>Room Code</label>
            <input name='roomCode' type='text' pattern='^[a-zA-Z]{4}$' maxLength={4} required></input>
            <label htmlFor='userName'>Username</label>
            <input name='userName' type='text' pattern='^[\w\d][\w\d\s]{3,}$' maxLength={20} required></input>
            <button type='submit'>Join game</button>
            <h1 className='LineText'><hr></hr>&emsp;or&emsp;<hr></hr></h1>
            <button type='button' onClick={() => {setHelpPopup(true)}}>Need Help?</button>
          </form>
          <Popup trigger={helpPopup} setTrigger={setHelpPopup}>
            <HelpPopup />
          </Popup>
        </div>
      </main>
    </>
  )
}
