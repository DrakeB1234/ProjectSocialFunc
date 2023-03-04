import Image from 'next/image';
import React, { useState } from 'react';

import styles from '../helpPopup.module.css';

export default function GameContent(props: any) {

  return (
    <div className={'FlexCol ' + styles.HelpInfoContainer}>
        <div className={'FlexRowCenter ' + styles.HelpExitContainer} onClick={() => { props.settrigger(props.mainmenu)}}>
            <h1 className='SubHeadText'>How to host a game:</h1>
            <Image 
              src='/icons/icon-black-x.svg'
              alt='x'
              width={50}
              height={50}
              quality={100}
            />
        </div>
        <h1>Tip 1:</h1>
        <p><span>In</span> order to host a game, read the games description on how to host, it will be towards the bottom of the game description if
          the game is able to be hosted.
        </p>
    </div>
  )
}