import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/landing.module.css';
import Navbar from '../pages/components/navbar/navbar';

export default function Landing() {
  return (
    <>
      <Head>
        <title>SocialFunc | Social Games</title>
        <link rel='stylesheet' href='index.css' />
      </Head>
      <main>
        <Navbar />
        <div className={'FlexCol ' + styles.LandingContainer}>
            <h1>WELCOME TO SOCIALFUNC</h1>
            <Link href='/play'>
                <button>asdf</button>
            </Link>
        </div>
      </main>
    </>
  )
}
