import Head from 'next/head';
import Link from 'next/link';
import styles from '../updates/updates.module.css';
import Navbar from '../../pages/components/navbar/navbar';
import Footer from '../../pages/components/footer/footer';

export default function Updates() {
  return (
    <>
      <Head>
        <title>SocialFunc | Updates</title>
      </Head>
      <main>
        <Navbar />
        <div className='FlexCol'>
            <div className={'FlexCol ' + styles.UpdatesContainer}>
              <div className={'FlexCol ' + styles.UpdatesContent}>
                <h1 className='SubHeadText GreyText'>Feburary 22, 2023</h1>
                <h1 className='HeadText BlackText'>Social Accounts Public <span className='YellowText'>!</span></h1>  
                <h1>Public announcement of the SocialFunc project was made today on Twitter! Support pages now hook up with the same account to add additional feedback for the developers!</h1>
              </div>
              <div className={'FlexCol ' + styles.UpdatesContent}>
                <h1 className='SubHeadText GreyText'>Feburary 15, 2023</h1>
                <h1 className='HeadText BlackText'>Application Hosted <span className='YellowText'>!</span></h1>  
                <h1>The SocialFunc website is now officially available to access anywhere at http://socialfunc.com! The next big step can now be worked on, making this project known to the world with social media.</h1>
              </div>
              <div className={'FlexCol ' + styles.UpdatesContent}>
                <h1 className='SubHeadText GreyText'>Feburary 10, 2023</h1>
                <h1 className='HeadText BlackText'>Project Start <span className='YellowText'>!</span></h1>  
                <h1>Start of projects repoistory and first website design!Start of projects repoistory and first website design!Start of projects repoistory and first website design!</h1>
              </div>
            </div>
        </div>
        <Footer />
      </main>
    </>
  )
}
