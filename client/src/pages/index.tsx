import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/landing.module.css';
import Navbar from '../pages/components/navbar/navbar';
import Footer from '../pages/components/footer/footer';

export default function Landing() {
  return (
    <>
      <Head>
        <title>SocialFunc</title>
      </Head>
      <main>
        <Navbar />
        <div className={'FlexCol ' + styles.LandingContainer}>
            <h1 className='MainHeadText'>SocialFunc</h1>
            <div className={'FlexCol ' + styles.InfographicContainer}>
              <h1 className='SubHeadText BlackText'>SocialFunc is a web platform aimed at providing an exiciting and interactable
                experience for friends and family.  
              </h1>
              <h1 className='SubHeadText BlackText'>
                This project is currently in a very early development phase. If you are 
                interested in staying up to date on this project or have some input, 
                contact me through the support page!
              </h1>
            </div>
            <h1 className='HeadText'>Updates</h1>
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
              <div className={'FlexCol ' + styles.UpdatesContent}>
                <Link href='/updates'><h1 className='SubHeadText BoldText'>See More</h1></Link>
              </div>
            </div>
            <h1 className='HeadText'>Thank you!</h1>
            <div className={'FlexCol ' + styles.InfographicContainer}>
              <div className={'FlexCol ' + styles.InfographicContent}>
                <h1 className='SubHeadText BlackText'>
                    Thank you for taking interest in my project! My goal is to provide some interesting, fun, creative,
                    and totally interactable games for everyone! If you would like to keep updated with us, visit this site
                    for updates on the landing page as well as our socials!
                  </h1>
                  <h1 className='SubHeadText BlackText'>
                    This entire project is open-source and is located on <Link href='https://github.com/DrakeB1234/ProjectSocialFunc' target='_blank' className='GreyText BoldText'>github</Link>. Consider taking a look
                    if you are interested in that aspect!
                  </h1>
              </div>
            </div>
        </div>
        <Footer />
      </main>
    </>
  )
}
