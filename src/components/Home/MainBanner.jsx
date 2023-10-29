import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';

// images 
import video from "../../images/Відео без назви — зроблено у Clipchamp (1).mp4";
// import video from "../../images/text.webm";

// components
import Section from '../Section/Section'

const MainBanner = () => {
	return (
		<Section>
			<div className="container">
				<h1 style={{ fontSize: 0, lineHeight: 0 }}>Oxxxymiron</h1>
				<ScrollAnimation
					animateIn="fadeInLeft"
					animateOut="fadeOutLeft" className="banner" >
					<video
						className="banner-video"
						width={1000}
						height="auto"
						loop
						muted
						autoPlay

					>
						<source src={video} type="video/webm" />
					</video>
				</ScrollAnimation>
			</div>
		 </Section>
	)
}

export default MainBanner