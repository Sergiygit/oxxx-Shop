import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from 'react-router-dom';
import { useMusicPlayer } from '../../hooks/useMusicPlayer';
import { useTrackItems } from '../../hooks/useTrackItem';
import { getLocalDateString } from '../../utils/common';
import Icon from '../Icon/Icon';
import Preloader from '../Preloader/Preloader';
import Section from '../Section/Section';
import SectionTitle from '../Title/SectionTitle';

const Tracks = () => {
	const { items = [], isLoading } = useTrackItems()

	const { playing, handleTrackClick, currentTrack } = useMusicPlayer()

	return (
		<Section className="tracks-section">
			<div className="container">
				<SectionTitle text="Релизы" />

				{isLoading ? (
					<Preloader />
				) : (
					<div className="tracks">
						{items
							.filter((_, i) => i < 3)
							.map((track) => {
								const {
									cover,
									title,
									sys: { id },
									date,
								} = track;

								return (
									<ScrollAnimation
										key={id}
										className="track-item"
										animateIn="fadeInLeft"
										animateOut="fadeOutRight"
									>
										<div
											className="track"

										>
											<div className="track-image" onClick={() => handleTrackClick(track)}>
												<img src={cover.url} alt={title} />
												{!!playing && currentTrack.sys.id === id && (
													<Icon name="pause" />
												)}
											</div>
											<p className="track-date">
												{getLocalDateString(date, { month: "short" })}
											</p>
											<h3 className="track-title">{title}</h3>
										</div>
									</ScrollAnimation>
								);
							})}
					</div>
				)}

				<Link to="/tracks" className="button-more">
					Всі релізи
				</Link>
			</div>
		</Section>
	)
}

export default Tracks