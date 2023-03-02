import Head from 'next/head';
import Link from 'next/link';
import React, { useState } from 'react';

// import styles / components
import styles from './games.module.css';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import Image from 'next/image';
import GamePopup from '../components/gameInfoPopup/gameInfoPopup';

export default function Landing() {

    const [ togglePopup, setTogglePopup ] = useState(<></>);

  return (
    <>
        <Head>
            <title>SocialFunc | Games</title>
        </Head>
        {/* popup content */}
        { togglePopup }
        <Navbar />
        <main>
        <div className={'FlexRowCenter ' + styles.GameContainerList}>
            <div className={'FlexColCenter ' + styles.GameItem} onClick={() => setTogglePopup( <GamePopup gameTitle='howmany' settrigger={ setTogglePopup } /> )}>
                <Image
                    src='/gamebanner1-socialfunc.png'
                    alt='game banner'
                    height={600}
                    width={600}
                    quality={100}
                />
                <div className='FlexCol'>
                    <h1 className='HeadText'>How Many?</h1>
                    <h1 className='SubHeadText'>A game about how many?</h1>
                </div>
            </div>
            <div className={'FlexColCenter ' + styles.GameItem} onClick={() => setTogglePopup( <GamePopup gameTitle='howmany2' settrigger={ setTogglePopup } /> )}>
                <Image
                    src='/gamebanner2-socialfunc.png'
                    alt='game banner'
                    height={600}
                    width={600}
                    quality={100}
                />
                <div className='FlexCol'>
                    <h1 className='HeadText'>How Many 2?</h1>
                    <h1 className='SubHeadText'>A game about how many, again?</h1>
                </div>
            </div>
            <div className={'FlexColCenter ' + styles.GameItem} onClick={() => setTogglePopup( <GamePopup gameTitle='howmany3' settrigger={ setTogglePopup } /> )}>
                <Image
                    src='/gamebanner3-socialfunc.png'
                    alt='game banner'
                    height={600}
                    width={600}
                    quality={100}
                />
                <div className='FlexCol'>
                    <h1 className='HeadText'>How Many 3?</h1>
                    <h1 className='SubHeadText'>A game about how many, again 2?</h1>
                </div>
            </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
