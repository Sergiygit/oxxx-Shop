import React from 'react'

// images 
// import video from "../../images/black_-_13495 (540p).mp4";
import video from "../../images/text.webm";

// components
import Section from '../Section/Section'

const MainBanner = () => {
	return (
		<Section>
			<div className="container">
			{/* <h1 style={{ fontSize: 0, lineHeight: 0 }}>Oxxxymiron</h1> */}
			<div className="banner">
				{/* <div className="banner__img"></div> */}
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
			</div>
			</div>
		</Section>
	)
}

export default MainBanner