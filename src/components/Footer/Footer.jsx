import React from 'react'

// images
import Logo from "../Logo/Logo";
import Socials from "../Socials/Socials";

// components
import FooterForm from './FooterForm'

const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<footer className='footer'>
			<div className="container">
				<div className="footer__wrapper">

					<FooterForm />
					<div className="footer-info">
						<Logo />
						<p>name, {year}</p>
					</div>

					<Socials width={24} height={24} />
				</div>
			</div>
		</footer>
	)
}

export default Footer