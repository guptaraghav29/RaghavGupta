import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title> Welcome to Raghav's Website! </title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<h1 className={styles.title} style={{color: "blue"}}>
					Welcome to Raghav's Website!
				</h1>

				<p> Hi, I'm Raghav and I am currently a second year Computer Science with Business Applications student at the University of California, Riverside. I love programming, playing soccer, playing video games (FIFA mostly), and eating delicious food! </p>
				<p> I'm an aspiring software engineer with a passion in computer science, particularly in fields such as machine learning and data science. </p>

			</main>

			<footer className={styles.footer}>
				Ⓒ Powered by {'Raghav Gupta'}
				<span className={styles.logo}>
					<Image src="/favicon.ico" alt="Raghav Gupta" width={16} height={16} />
				</span>
			</footer>
		</div>
	)
}
