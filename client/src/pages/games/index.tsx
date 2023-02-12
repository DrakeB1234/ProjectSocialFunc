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
          <h1></h1>
          <div className={'FlexRow ' + styles.GamesContent}>

            <div className={'FlexCol ' + styles.GamesItem}>
              <img src='/gamebanner-socialfunc.png' />
              <h1 className='SubHeadText BlackText BoldText'>How Many?</h1>
              <h1 className='GreyText'>A game about how many things are a thing!</h1>
            </div>
            <div className={'FlexCol ' + styles.GamesItem}>
              <img src='/gamebanner-socialfunc.png' />
              <h1 className='SubHeadText BlackText BoldText'>How Many?</h1>
              <h1 className='GreyText'>A game about how many things are a thing!</h1>
            </div>
            
          </div>
        </div>
        <Footer />
      </main>
    </>
  )
}
