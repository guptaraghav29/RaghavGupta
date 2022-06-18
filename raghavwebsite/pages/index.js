import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavBar from './NavBar'

export default function Home() {
	return (
		<div>
			<Head>
				<title> Welcome to Raghav's Website! </title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<NavBar />

			<div className={styles.container}>

				<h1 className={styles.title} style={{ color: "blue" }}>
					Welcome to Raghav's Website!
				</h1>

				<br></br>

				<div>
					<img className="center" src="RaghavCatalina.jpeg" height={"400px"} width={"700px"}></img>
				</div>

				<br></br>

				<p> Hi, I'm Raghav and I am currently a second year Computer Science with Business Applications student at the University of California, Riverside. I love programming, playing soccer, playing video games (FIFA mostly), and eating delicious food! </p>
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
