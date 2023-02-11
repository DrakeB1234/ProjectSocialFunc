import Head from 'next/head';
import styles from '../../styles/play.module.css';
import Navbar from '../../pages/components/navbar/navbar';

export default function Gamepage() {
  return (
    <>
      <Head>
        <title>SocialFunc | Play</title>
        <link rel='stylesheet' href='index.css' />
      </Head>
      <main>
        <Navbar />
        <div className={'FlexCol ' + styles.HomeContainer}>
          <form>
            <label htmlFor='roomCode'>Room Code</label>
            <input name='roomCode' type='text'></input>
            <label htmlFor='userName'>Username</label>
            <input name='userName' type='text'></input>
            <button type='button'>Join game</button>
          </form>
        </div>
      </main>
    </>
  )
}
