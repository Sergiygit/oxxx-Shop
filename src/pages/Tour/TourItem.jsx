import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import { getLocalDateString } from '../../utils/common'

// components
import Icon from '../../components/Icon/Icon'

const TourItem = ({
	date,
	city,
	place,
	ticketLink,
	videoLink,
	soldOut,
	i,
	offset = 260,
}) => {
	return (
		<li>
			<ScrollAnimation className='tour-item' animateIn='fadeInLeft' animateOut='fadeOutRight' delay={i * 100} offset={offset}>
				<div className='tour-item__info'>
					<div className="tour-item__date">
						{
							getLocalDateString(date, {})
						}
					</div>
					<p className='tour-item__place'>{place}</p>
				</div>
				<p className="tour-item__city">
					{city}
				</p>
				{!soldOut ? (
					<a className='tour-item__button' href={ticketLink || videoLink} target='__blank'>
						{ticketLink ? (
							<>
								<span>Білети</span>
								<Icon name='arrow-right' />
							</>
						) : (
							<span>Відео</span>
						)}
					</a>
				) : (
					<button className='tour-item__button soldout'>
						SOLD OUT
					</button>
				)}
			</ScrollAnimation>
		</li>
	)
}

export default TourItem