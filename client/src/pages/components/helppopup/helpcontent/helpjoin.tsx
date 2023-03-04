import Image from 'next/image';
import React, { useState } from 'react';

import styles from '../helpPopup.module.css';

export default function GameContent(props: any) {

  return (
    <div className={'FlexCol ' + styles.HelpInfoContainer}>
        <div className={'FlexRowCenter ' + styles.HelpExitContainer} onClick={() => { props.settrigger(props.mainmenu)}}>
          <h1 className='SubHeadText'>How to join a game:</h1>
            <Image 
              src='/icons/icon-black-x.svg'
              alt='x'
              width={50}
              height={50}
              quality={100}
            />
        </div>
    </div>
  )
}