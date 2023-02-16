import Head from 'next/head';
import styles from '../games/games.module.css';
import Navbar from '../../pages/components/navbar/navbar';
import Footer from '../../pages/components/footer/footer';
import React, { useState } from 'react';
// Popup content
import Popup from '../components/popup/popup';
import GameHowMany from '../games/gamepopupcontent/howmany';
import GameHowMany2 from '../games/gamepopupcontent/howmany2';

export default function Games() {

  const [ popUpHowMany, setPopUpHowMany ] = useState(false);
  const [ popUpHowMany2, setPopUpHowMany2 ] = useState(false); 
  
  return (
    <>
      <Head>
        <title>SocialFunc | Games</title>
      </Head>
      <main>
        <Navbar />
        <div className={'FlexCol ' + styles.GamesContainer}>
          <div className={'FlexRow ' + styles.GamesContent}>

            <div onClick={() => {setPopUpHowMany(true)}} className={'FlexCol ' + styles.GamesItem}>
              <img src='/gamebanner-socialfunc.png' />
              <h1 className='SubHeadText BlackText BoldText'>How Many?</h1>
              <h1 className='GreyText'>A game about how many things are a thing!</h1>
            </div>
            <Popup trigger={popUpHowMany} setTrigger={setPopUpHowMany}>
              <GameHowMany></GameHowMany>
            </Popup>

            <div onClick={() => {setPopUpHowMany2(true)}} className={'FlexCol ' + styles.GamesItem}>
              <img src='/gamebanner-socialfunc.png' />
              <h1 className='SubHeadText BlackText BoldText'>How Many 2?</h1>
              <h1 className='GreyText'>A game about how many things are a thing!</h1>
            </div>
            <Popup trigger={popUpHowMany2} setTrigger={setPopUpHowMany2}>
              <GameHowMany2></GameHowMany2>
            </Popup>
            
          </div>
        </div>
        <Footer />
      </main>
    </>
  )
}
