import Image from 'next/image';
import React, { useState } from 'react';

import styles from '../helpPopup.module.css';

export default function GameContent(props: any) {

  return (
    <div className={'FlexCol ' + styles.HelpInfoContainer}>
        <div className={'FlexRowCenter ' + styles.HelpExitContainer} onClick={() => { props.settrigger(props.mainmenu)}}>
            <h1 className='SubHeadText'>How to Join A Game:</h1>
            <Image 
              src='/icons/icon-black-x.svg'
              alt='x'
              width={50}
              height={50}
              quality={100}
            />
        </div>
        <h1>Tip 1:</h1>
        <p><span>In</span> order to join a game, read the games description on how to join, it will be towards the bottom of the game description
        or in the games description. Most games provided by Socialfunc are required to be played with others, so joining a game should be possible.
        </p>
        <h1>Tip 2:</h1>
        <p><span>A</span> game must be hosted initally in order for their to be a room code to join, which when available will be able to be entered
        in the room code input box on the play page.
        </p>
    </div>
  )
}