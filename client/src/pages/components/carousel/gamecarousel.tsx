import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

// import componenets / styles
import styles from './carousel.module.css';
import GamePopup from '../gameInfoPopup/gameInfoPopup';

export default function Carousel() {

  const [ curSlide, setCurSlide ] = useState(0)
  // toggle hide/show slide
  const [ slideAnim, setSlideAnim ] = useState(true)
  // popup state for game content
  const [ togglePopup, setTogglePopup ] = useState(<></>);

  // function for slide anim
  const toggleSlideAnim = () => {
    setSlideAnim(false)
    setTimeout(() => {
      setSlideAnim(true)
    }, 800)
  }

  const array = [
    {
      popup: 'howmany',
      image: '/gamebanner1-socialfunc.png',
      title: 'How Many?',
      theme: '#5565B9'
    },
    {
      popup: 'howmany2',
      image: '/gamebanner2-socialfunc.png',
      title: 'How Many 2?',
      theme: '#32a852'
    },
    {
      popup: 'howmany3',
      image: '/gamebanner3-socialfunc.png',
      title: 'How Many 3?',
      theme: '#dea768'
    },
  ]

  const switchSlide = (dir: number) => {
    // dir 0 == left
    if (dir == 0){
      if (curSlide == 0){
        // reset to end of array
        setCurSlide(array.length - 1)
        toggleSlideAnim();
        return;
      }
      setCurSlide(curSlide - 1)
      toggleSlideAnim();
      return;
    }
    // else, dir 1 == right
    if (curSlide == (array.length - 1)){
      // reset to beginning of array
      setCurSlide(0)
      toggleSlideAnim();
      return;
    }
    setCurSlide(curSlide + 1)
    toggleSlideAnim();
    return;
  }

  // timer for auto slide switching
  // setTimeout(() => {
  //   switchSlide(1);
  // }, 6000)
  

  return (
    <>
    {/* popup content */}
    { togglePopup }
    <div className={'FlexCol ' + styles.GameContainer}>
      <div className={ 'FlexRowCenter ' + styles.GameImage }style={{ backgroundColor: `${array[curSlide].theme}` }} onClick={() => setTogglePopup( <GamePopup gameTitle={`${array[curSlide].popup}`} settrigger={ setTogglePopup } /> )}>
        <Link href='' className={
          slideAnim ? styles.SlideShow : styles.SlideHide}>
          <Image
            src={ array[curSlide].image }
            alt='game banner'
            height={1200}
            width={1200}
            quality={100}
          />
        </Link>
      </div>
      <div className={'FlexRowCenter ' + styles.ArrowContainer}>
        <Image
          onClick={() => {switchSlide(0)}}
          src='/icons/icon-left-arrow.svg'
          alt='< left'
          height={30}
          width={30}
          quality={100}
        />
        <h1 className='HeadText'>{ array[curSlide].title }</h1>
        <Image
          onClick={() => {switchSlide(1)}}
          src='/icons/icon-right-arrow.svg'
          alt='right >'
          height={30}
          width={30}
          quality={100}
        />
      </div>
    </div>
    </>
  )
}