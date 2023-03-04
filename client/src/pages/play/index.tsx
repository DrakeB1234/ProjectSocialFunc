import Head from 'next/head';
import Link from 'next/link';
import React, { useState } from 'react';

// import styles / components
import styles from './play.module.css';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import HelpPopup from '../components/helppopup/helpPopup';

export default function Play() {

    const [ toggleHelp, setToggleHelp ] = useState(false)

  return (
    <>
      <Head>
        <title>SocialFunc | Play</title>
      </Head>
      <HelpPopup trigger={ toggleHelp } settrigger={ setToggleHelp } />
      <Navbar />
      <main className={'FlexColCenter ' + styles.PlayContainer}>
        <div className={'FlexColCenter ' + styles.JoinContainer}>
            <form className='FlexCol'>
                <label htmlFor='roomCode'>Room Code</label>
                <input type='text' name='roomCode' pattern='[A-Z]' maxLength={4} onInput={(e: any) => { e.target.value = e.target.value.toUpperCase()}} />
                <label htmlFor='username'>Username</label>
                <input type='text' name='username' pattern='[a-zA-Z]' maxLength={16} />
                <button type='submit' name='join'>Join</button>
                <h1 className='SplitText'><hr></hr>&nbsp;OR&nbsp;<hr></hr></h1>
                <button type='button'><Link href='/games'>Host</Link></button>
                <button type='button' name='help' onClick={() => { setToggleHelp(true) }}>Help</button>
            </form>
        </div>
      </main>
    </>
  )
}
