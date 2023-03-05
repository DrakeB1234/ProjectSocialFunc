import Head from 'next/head';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
// database
import supabase from '../../config/supabaseClient';

// import styles / components
import styles from './updates.module.css';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';

export default function Play() {

  // database states
  const [ fetchErr, setFetchErr ] = useState('');
  const [ dataGet, setDataGet ] = useState(Array<any>);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from('updates')
        .select('*')
        .order('date', { ascending: false })
        // if error, reset state
        if (error){
          setFetchErr('Could not fetch data');
          setDataGet([]);
          console.log(error);
        }
        if (data){
          setDataGet(data);
          setFetchErr('')
        }
    }
    fetchData();
  }, [])

  return (
    <>
      <Head>
        <title>SocialFunc | Updates</title>
      </Head>
      <Navbar />
      <main className={'FlexCol ' + styles.UpdatesParent }>
        <div className={'FlexColCenter ' + styles.UpdatesContainer }>
            <h1>Updates from Developer</h1>
            { fetchErr && (<h1>{ fetchErr }!</h1>)}
            { dataGet && 
              dataGet.map(e => (
                <div className='FlexCol' key={ e.id }>
                  <h1>{ e.title }</h1>
                  <h2>{ e.date }</h2>
                  <p>{ e.content }</p>
                </div>
              ))
            }

        </div>
      </main>
      <Footer />
    </>
  )
}
