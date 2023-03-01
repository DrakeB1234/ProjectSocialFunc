import Head from 'next/head';
import Link from 'next/link';

// import styles / components
import styles from './index.module.css';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Image from 'next/image';
import Carousel from './components/carousel/gamecarousel';

export default function Landing() {

  return (
    <>
      <Head>
        <title>SocialFunc | Home</title>
      </Head>
      <Navbar />
      <main>
        <div className={'FlexRowCenter ' + styles.BannerContainer}>
          <Image
            src="/appbanner-socialfunc.png"
            alt='game banner'
            height={900}
            width={1600}
            quality={100}
          />
        </div>
        <div className={'FlexRowCenter ' + styles.GameSliderContainer}>
          <Carousel />
        </div>
        <h1 className='SplitText'><hr></hr><h1>OR</h1><hr></hr></h1>
        <div className={'FlexCol ' + styles.JoinContainer}>
          <Link href='/play' className='HeadText'>Join Game</Link>
        </div>
        <div className={'FlexCol ' + styles.AboutUsContainer}>
          <h1 className='HeadText'>About us</h1>
          <div className='FlexRow'>
            <div className={'FlexRowCenter ' + styles.BannerContainer}>
              <Image
                src="/appbanner-socialfunc.png"
                alt='game banner'
                height={900}
                width={1600}
                quality={100}
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
