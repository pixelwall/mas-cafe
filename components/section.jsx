export default function Section({styles, children}) {
	return(
		<section className={styles}>
			{children}
		</section>
		);
}