import Image from 'next/image';
import React, { useState } from 'react';

// import components / styles
import styles from './helpPopup.module.css';
import HelpHost from './helpcontent/helphost';
import HelpJoin from './helpcontent/helpjoin';

export default function HelpInfo(props: any) {

  const mainMenu =  <div className={'FlexCol ' + styles.HelpButtonContainer}>
                      <div className={'FlexRowCenter ' + styles.HelpExitContainer} onClick={() => { props.settrigger(false)}}>
                        <h1 className='HeadText'>Help Menu</h1>
                        <Image 
                          src='/icons/icon-black-x.svg'
                          alt='x'
                          width={50}
                          height={50}
                          quality={100}
                        />
                      </div>
                      <button onClick={() => { setHelpContent(<HelpHost settrigger={ setHelpContent } mainmenu={ mainMenu } />)}}>How to Host a game</button>
                      <button onClick={() => { setHelpContent(<HelpJoin settrigger={ setHelpContent } mainmenu={ mainMenu } />)}}>How to Join a game</button>
                    </div> 

  const [ helpContent, setHelpContent ] = useState( mainMenu )

  return (
    <div className={'FlexColCenter ' + styles.HelpParent} style={props.trigger ? { display: 'flex' } : { display: 'none' }}>
        { helpContent }
    </div>
  )
}