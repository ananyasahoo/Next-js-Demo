import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../comps/Navbar';
import Footer from '../comps/footer';
import Link from 'next/link';

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
   <>
   <Head>
    <title>Ninja List | Home</title>
    <meta name="keywords" content="ninjas"/>
   </Head>

    <div className={styles.container}>
      
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
    <Link href="ninjas" className={styles.btn}>See ninja list</Link>
    
    </div>
    </>
  )
}
