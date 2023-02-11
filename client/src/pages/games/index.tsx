import Head from 'next/head';
import Link from 'next/link';
import styles from '../games/games.module.css';
import Navbar from '../../pages/components/navbar/navbar';
import Footer from '../../pages/components/footer/footer';

export default function Games() {
  return (
    <>
      <Head>
        <title>SocialFunc | Games</title>
      </Head>
      <main>
        <Navbar />
        <div className={'FlexCol ' + styles.GamesContainer}>
          <h1 className='MainHeadText WhiteText'>Select Game</h1>
          <div className={'FlexCol ' + styles.GamesContent}>

            <div className={'FlexRow ' + styles.GamesRow}>
              <img src='/icons/icon-bars.svg' />
              <div className='FlexCol'>
                <h1 className='MainHeadText BlackText'>Game Title</h1>
                <h1 className='SubHeadText GreyText'>Game Description</h1>
              </div>
            </div>
            <div className={'FlexRow ' + styles.GamesRow}>
              <img src='/icons/icon-bars.svg' />
              <div className='FlexCol'>
                <h1 className='MainHeadText BlackText'>Game Title</h1>
                <h1 className='SubHeadText GreyText'>Game Description</h1>
              </div>
            </div>
            <div className={'FlexRow ' + styles.GamesRow}>
              <img src='/icons/icon-bars.svg' />
              <div className='FlexCol'>
                <h1 className='MainHeadText BlackText'>Game Title</h1>
                <h1 className='SubHeadText GreyText'>Game Description</h1>
              </div>
            </div>
            
          </div>
        </div>
        <Footer />
      </main>
    </>
  )
}
