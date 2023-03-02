import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

import styles from '../gameInfoPopup.module.css';

export default function GameContent(props: any) {

  return (
    <div className={'FlexCol ' + styles.GameInfoContainer}>
        <div className={'FlexRow ' + styles.GameInfoTitle} 
            onClick={() => props.settrigger(<></>)}
        >
        <h1 className='HeadText'>How Many?</h1>
        <Image
            src='/icons/icon-white-x.svg'
            alt='x'
            height={50}
            width={50}
            quality={100}
        />
        </div>
        <Image
            src='/gamebanner1-socialfunc.png'
            alt='game banner'
            height={600}
            width={900}
            quality={100}
        />
        <div className={'FlexRow ' + styles.GameInfoTags}>
        <h1>Players: 3-8</h1>
        <h1>Display: TV</h1>
        <h1>Type: Competitive Teams</h1>
        <h1>Gameplay: Cards</h1>
        </div>
        <div className={'FlexRowCenter ' + styles.GameInfoButton}>
        <Link href='/games/howmany' className='SubHeadText'>Host</Link>
        <Link href='/play' className='SubHeadText'>Join</Link>
        </div>
        <div className={'FlexCol ' + styles.GameInfoText}>
        <h1>About this game:</h1>
        <p>&emsp;This game is about how many there is! This game encourages Competitiveness between groups of people by automatically
            assinging teams and giving each team the ability to make the other teams have a hard time! The game is able to be as creative
            as the people who play it! 
        </p>
        <h1>How to Play:</h1>
        <p>&emsp;In order to get the best possible experience while playing this game, having a large screen (such as a tv) is highly recommended
            as the majority of the required actions are meant to be shown to the entire group. Having one device as the &quot;host&quot; device will make that
            device the display device for the game, meaning that this device will not be able to participate in the game itself. Once the host device has
            been set, others can join with the room code shown on the host, once enough players have joined, then the host can start the game.
        </p>
        </div>
    </div>
  )
}