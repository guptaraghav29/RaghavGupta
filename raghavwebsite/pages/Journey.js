import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavBar from './NavBar'
import React from 'react';

export default function About() {
   
    
      return (
		<div>
			<Head>
				<title> Raghav's Website: Journey </title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<NavBar />

			<div className={styles.container}>

				<h1 className={styles.title} style={{ color: "darkblue" }}>
					Raghav's Journey!
				</h1>

                  <br></br>

                  <div className="center">
                    
                  </div>

				<br></br>

				<p> Hi! I'm Raghav and I am currently a second year Computer Science with Business Applications student at the University of California, Riverside. I love programming, playing soccer, playing video games (FIFA mostly), and eating delicious food! </p>
				<p> I'm an aspiring software engineer with a passion in computer science, particularly in fields such as machine learning and data science. </p>



				<footer className={styles.footer}>
					Ⓒ Powered by {'Raghav Gupta'}
					<span className={styles.logo}>
						<Image className={styles.main} src="/favicon.ico" alt="Raghav Gupta" width={16} height={16} />
					</span>
				</footer>
			</div>
		</div>
	)

}
