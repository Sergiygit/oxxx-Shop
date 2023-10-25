import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

// components
import Icon from '../Icon/Icon'

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
			<ScrollAnimation className='tour-item' animateIn='fadeInLeft' animateOut='fadeOutRight' delay={i * 100} offset={260}>
				<div className='tour-item__info'>
					<div className="tour-item__date">
						{
							new Date(date).toLocaleDateString('uk-UA', {
								month: 'numeric',
								day: 'numeric',
								year: 'numeric'
							})
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