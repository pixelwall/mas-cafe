import Header from '../components/header'
import SocialMediaButtons from '../components/socialmediabuttons'

import Head from 'next/head'

import styles from '../styles/Info.module.css'

export default function Info() {
	return(
		<div>
		<Head>
			<title>Info</title>
		</Head>
			<Header />
			<main className={styles.main}>
			<SocialMediaButtons />
			<section>

			</section>
				<section className="z-10">
					<form className="w-8/12 mx-auto p-12 shadow-xl bg-white" action="">
						<h1 className="text-center text-5xl tracking-widest leading-tight">Make a</h1>
						<h1 className="text-center text-5xl tracking-widest leading-tight mb-12">Reservation</h1>
						<div className={styles.inputContainer}>
							<label className="text-2xl tracking-widest leading-tight" htmlFor="">Complete Name</label>
							<input type="text" placeholder="Ex. Name Lastname" />
						</div>
						<div className={styles.inputContainer}>
							<label className="text-2xl tracking-widest leading-tight" htmlFor="">Email</label>
							<input type="email" placeholder="email@example.com" />
						</div>
						<div className={styles.inputContainer}>
							<label className="text-2xl tracking-widest leading-tight" htmlFor="">Subject</label>
							<input type="text" placeholder="Ex. Cost" />
						</div>
						<div className={styles.inputContainer}>
							<label className="text-2xl tracking-widest leading-tight" htmlFor="">Message</label>
							<textarea name="" id="" cols="30" rows="5"></textarea>
						</div>
						<button className={styles.submitButton} type="submit">Send</button>
					</form>
				</section>
			</main>
		</div>
		);
}