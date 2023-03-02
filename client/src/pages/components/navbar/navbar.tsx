import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

import styles from './navbar.module.css';

export default function Navbar() {

  const [mobileNav, setMobileNav ] = useState(false)

  return (
    <>
      <nav className={'FlexRow ' + styles.DesktopNavContainer}>
        <Link href='/'>
          <Image
            src="/favicon.png"
            alt='game banner'
            height={900}
            width={1600}
            quality={100}
          />
        </Link>
        <div className='FlexRowCenter'>
          <Link href='/' className='SubHeadText'>Home</Link>
          <Link href='/games' className='SubHeadText'>Games</Link>
          <Link href='/play' className='SubHeadText'>Join</Link>
          <Link href='/about' className='SubHeadText'>About us</Link>
        </div>
      </nav>

      <nav className={'FlexRow ' + styles.MobileNavContainer}>
        <Link href='/'>
          <Image
            src="/favicon.png"
            alt='game banner'
            height={900}
            width={1600}
            quality={100}
          />
        </Link>
        <Image
        onClick={() => {
          setMobileNav(!mobileNav);
        }}
          src="/icons/icon-bars.svg"
          alt='game banner'
          height={100}
          width={100}
          quality={100}
          />
      </nav>
      <div className={
          mobileNav ? styles.MobileNavPopup + ' ' + styles.MobileNavShow : styles.MobileNavPopup + ' ' + styles.MobileNavHide
      }>
        <div className='FlexCol' onClick={() => {
          setMobileNav(!mobileNav);
        }}>
          <Link href='/' className='SubHeadText'>Home</Link>
          <Link href='/games' className='SubHeadText'>Games</Link>
          <Link href='/play' className='SubHeadText'>Join</Link>
          <Link href='/about' className='SubHeadText'>About us</Link>
        </div>
      </div>
    </>
  )
}