import React from 'react'
import styles from './About.module.css';
import Head from 'next/head';
export default function About() {
    return (
        <div className={styles.container}>
        <Head>
            <title>
                About
            </title>
            <link rel="icon" href="/favicon.ico">

            </link>
        </Head>
            <p className={styles.decription}>This is the about page</p>
        </div>
    )
}
