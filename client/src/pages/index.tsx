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
        <h1 className='SplitText'><hr></hr>&nbsp;OR&nbsp;<hr></hr></h1>
        <div className={'FlexCol ' + styles.JoinContainer}>
          <Link href='/play' className='HeadText'>Join Game</Link>
        </div>
        <h1 className={'HeadText '  + styles.SubTitle }>About us</h1>
        <div className={'FlexColCenter ' + styles.AboutUsContainer}>
          <div className={'FlexRowCenter'}>
            <Image
              src="/appbanner-socialfunc.png"
              alt='game banner'
              height={500}
              width={1000}
              quality={100}
            />
            <p>&emsp;Socialfunc is a web platform aimed at groups of family and friends to get together and play some fun and interactable games!
              This is (at the moment...) a project with just one developer, mainly just trying to utilize new technologies in a fasnicating and real world
              fashion. However, I still plan on providing fun social experiences that some may find enertaining for their guests, and if so than that is
              great! 
            </p>
            <p>&emsp;If you are interested in keeping up-to-date with the development of Socialfunc, please look further at the &quot;About us&quot; page!</p>
            <p>&emsp;Finally, for those who are wanting to help in this project or provide some awesome ideas for us, you can visit our 
            <Link href='https://github.com/DrakeB1234/ProjectSocialFunc' className='SubHeadText YellowText'> github </Link>or contact us through the methods
            listed in the &quot;About us&quot; page.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
