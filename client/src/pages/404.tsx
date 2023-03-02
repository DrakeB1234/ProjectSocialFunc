import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

// import styles / components
import styles from './404.module.css';
import Navbar from './components/navbar/navbar';

export default function Notfound() {

    return (
      <>
        <Head>
          <title>SocialFunc | 404</title>
        </Head>
        <Navbar />
        <div className={styles.FoundContainer}>
            <div className={ 'FlexColCenter ' + styles.FoundContent }>
                <div className='FlexColCenter'>
                    <h1 className='HeadText'>404</h1>
                    <h2 className='HeadText'>SocialFunc</h2>
                    <h1 className='HeadText'>Uh Oh! Could not find Page!</h1>
                    <Link href='/' className='HeadText'>Go back</Link>
                </div>
            </div>
        </div>
      </>
    )
  }