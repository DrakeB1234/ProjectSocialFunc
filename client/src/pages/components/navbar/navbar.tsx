import Link from 'next/link';
import styles from '../navbar/navbar.module.css';
import React, { useState } from 'react';

export default function Navbar() {

    const [navBarOpen, setNavBarOpen] = useState('CollapseHeightClosed')
    const toggleNavBar = () => {
        if(navBarOpen === 'CollapseHeightClosed'){
            setNavBarOpen('CollapseHeightOpen')
            document.body.style.overflow = "hidden"
            return
        }
        setNavBarOpen('CollapseHeightClosed')
        document.body.style.overflow = "scroll"
    }

    return (
        <>
            <div className={'FlexCol ' + styles.MobileNavContainer}>
                <img onClick={toggleNavBar} src='/icons/icon-bars.svg'></img>
            </div>
            <div onClick={toggleNavBar} className={`FlexCol ${navBarOpen} ` + styles.MobileNavContent}>
                <img src='/icons/icon-x.svg'></img>
                <Link href='/'>
                    Home
                </Link>
                <Link href='/games'>
                    Games
                </Link>
                <Link href='/play'>
                    Play
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
            <div className={`FlexRow ` + styles.DesktopNavContainer}>
                <Link href='/'>
                    Home
                </Link>
                <Link href='/games'>
                    Games
                </Link>
                <Link href='/play'>
                    Play
                </Link>
                <Link href=''>
                    Support
                </Link>
                <Link href=''>
                    About
                </Link>
            </div>
        </>
    )
}