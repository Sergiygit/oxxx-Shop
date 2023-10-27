import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import { Link } from 'react-router-dom'
import Section from '../Section/Section'

// images
import logo from '../../images/oxxxyshop.webp'
import bannerImg from '../../images/banner.webp'

const ShopBanner = () => {
	return (
		<Section className="shop-banner__section">
			<div className="container">
				<div className="shop-banner__wrapper">
					<Link to="/shop" className="shop-banner">
						<ScrollAnimation
							animateIn="fadeInLeft"
							animateOut="fadeOutLeft"
							className="shop-banner__text"
							offset={260}
						>
							<p className="shop-banner__subtitle">
								ОБНОВЛЕННЫЙ МЕРЧ 
							</p>
							<p className="shop-banner__title">SHOP 2.0</p>
						</ScrollAnimation>
						<ScrollAnimation
							animateIn="fadeInRight"
							animateOut="fadeOutRight"
							className="shop-banner__logo"
						>
							<img src={logo} alt="shop" className="shop-logo" />
						</ScrollAnimation>
						<ScrollAnimation
							animateIn="fadeInRight"
							animateOut="fadeOutRight"
							className="shop-banner__image"
						>
							<img src={bannerImg} alt="shopBanner" />
						</ScrollAnimation>
					</Link>
				</div>
			</div>
		</Section>
	)
}

export default ShopBanner