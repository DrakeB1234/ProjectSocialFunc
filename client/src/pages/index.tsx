import Head from 'next/head';
import Link from 'next/link';
import React, { useState, useEffect } from 'react'; 
import styles from '../styles/landing.module.css';
import Navbar from '../pages/components/navbar/navbar';
import Footer from '../pages/components/footer/footer';
import Popup from './components/popup/popup';

export default function Landing() {

  const [ popUp, setPopUp ] = useState(true)

  // var for data from api
  const [ blogData, setBlogData ] = useState<any[]>([]);

  useEffect(() => {
    fetch('api/blogdata')
      .then(res => { return res.json() })
      .then(data => setBlogData(data))
      .catch(err => console.error(`Couldn't fetch data`))
  }, []);
  
  return (
    <>
    <Popup trigger={popUp} setTrigger={setPopUp}>
      <div className='FlexCol'>
        <img src='/appbanner-socialfunc.png'></img>
        <h1 className='HeadText BoldText'>Welcome to SocialFunc!</h1>
        <h1 className='SubHeadText GreyText'>This site is currently in development, but feel welcome to look around!</h1>
        <h1 className='SubHeadText'>If you would like to help in development, please contact us with any of the contact methods in the about section!</h1>
      </div>
    </Popup>
      <Head>
        <title>SocialFunc | Home</title>
      </Head>
      <main>
        <Navbar />
        <div className={'FlexCol ' + styles.LandingContainer}>
          <div className={'FlexRow ' + styles.GameContainer}>
            <Link href='/games' className='FlexCol'>
              <img src='/hostgraphic-socialfunc.png' />
              <h1 className='HeadText BoldText WhiteText'>Host Game</h1>
            </Link>
            <Link href='/play' className='FlexCol'>
              <img src='/joingraphic-socialfunc.png' />
              <h1 className='HeadText BoldText WhiteText'>Join Game</h1>
            </Link>

          </div>
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
            {/* get data */}
            { blogData && blogData.length && blogData.map((e: any) =>
              <div key={e.id} className={'FlexCol ' + styles.UpdatesContent}>
                <h1 className='SubHeadText GreyText'>{ e.date }</h1>
                <h1 className='HeadText BlackText'>{ e.title }</h1>  
                <h1 className='GreyText'>{ e.content }</h1>
              </div>
            )}
            <div className={'FlexCol ' + styles.UpdatesContent}>
              <Link href='/updates' className='FlexRow'><h1 className='SubHeadText BoldText'>See More</h1></Link>
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
