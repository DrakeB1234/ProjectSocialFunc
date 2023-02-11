import Link from 'next/link';
import styles from '../navbar/navbar.module.css';
import React, { useState } from 'react';

export default function Navbar() {

    const [navBarOpen, setNavBarOpen] = useState('');
    const toggleNav = () => {
        if(navBarOpen === ''){
            setNavBarOpen('active')
            return;
        }
        setNavBarOpen('');
    }
    
    return (
        <>
            <div className={'FlexCol ' + styles.MobileNavContainer}>
                <img onClick={toggleNav} src='/icons/icon-bars.svg'></img>
            </div>
            <div onClick={toggleNav} className={'FlexCol ' + styles.MobileNavContent}>
                <img src='/icons/icon-x.svg'></img>
                <Link href=''>
                    Home
                </Link>
                <Link href=''>
                    Games
                </Link>
                <Link href=''>
                    Support
                </Link>
                <Link href=''>
                    About
                </Link>
            </div>
            <div className={'FlexRow ' + styles.BannerContainer}>
                <img src='/appbanner-socialfunc.png'/>
            </div>
        </>
    )
}