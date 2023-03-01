import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

import styles from './carousel.module.css';

export default function Carousel() {

  const [ curSlide, setCurSlide ] = useState(0)

  const array = [
    {
      url: '/games/howmany',
      image: '/gamebanner-socialfunc.png',
      title: 'How Many?'
    },
    {
      url: '/games/howmany2',
      image: '/gamebanner-socialfunc.png',
      title: 'How Many 2?'
    },
    {
      url: '/games/howmany2',
      image: '/gamebanner-socialfunc.png',
      title: 'How Many 3?'
    },
  ]

  const switchSlide = (dir: number) => {
    // dir 0 == left
    if (dir == 0){
      if (curSlide == 0){
        // reset to end of array
        setCurSlide(array.length - 1)
        return;
      }
      setCurSlide(curSlide - 1)
      return;
    }
    // else, dir 1 == right
    if (curSlide == (array.length - 1)){
      // reset to beginning of array
      setCurSlide(0)
      return;
    }
    setCurSlide(curSlide + 1)
    return;
  }

  // timer for auto slide switching
  setTimeout(() => {
    switchSlide(1);
  }, 10000)
  

  return (
      <div className={'FlexRowCenter ' + styles.GameContainer}>
          <Image
            onClick={() => {switchSlide(0)}}
            src='/icons/icon-left-arrow.svg'
            alt='< left'
            height={30}
            width={30}
            quality={100}
          />
          <div className={'FlexCol ' + styles.GameItem}>
            <Link href={array[curSlide].url}>
              <Image
                src={ array[curSlide].image }
                alt='game banner'
                height={1200}
                width={1200}
                quality={100}
              />
              <h1 className='HeadText'>{ array[curSlide].title }</h1>
            </Link>
          </div>
          <Image
            onClick={() => {switchSlide(1)}}
            src='/icons/icon-right-arrow.svg'
            alt='right >'
            height={30}
            width={30}
            quality={100}
          />
      </div>
  )
}