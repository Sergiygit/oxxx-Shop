import React from 'react'
import Section from '../Section/Section'

// img
import video from '../../images/$UICIDEBOY$ - ANTARCTICA (GREY DAY 2021 ATLANTA).mp4'

const TourBanner = () => {
	return (
		<Section className='tour-banner'>
			<div className="container">
				<video loop muted autoPlay width={1000} >
					<source src={video} type='video/mp4' />
				</video>
			</div>
		</Section>
	)
}

export default TourBanner