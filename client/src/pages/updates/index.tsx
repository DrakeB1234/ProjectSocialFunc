import Head from 'next/head';
import Link from 'next/link';
import styles from '../updates/updates.module.css';
import Navbar from '../../pages/components/navbar/navbar';
import Footer from '../../pages/components/footer/footer';
import React, { useState, useEffect } from 'react';

export default function Updates() {  

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
      <Head>
        <title>SocialFunc | Updates</title>
      </Head>
      <main>
        <Navbar />
        <div className='FlexCol'>
          <div className={'FlexCol ' + styles.UpdatesContainer}>
            { blogData && blogData.length && blogData.map((e: any) =>
              <div key={e.id} className={'FlexCol ' + styles.UpdatesContent}>
                <h1 className='SubHeadText GreyText'>{ e.date }</h1>
                <h1 className='HeadText BlackText'>{ e.title }</h1>  
                <h1>{ e.content }</h1>
              </div>
            )}
          </div>
        </div>
        <Footer />
      </main>
    </>
  )
}
