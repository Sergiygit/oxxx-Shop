import React from 'react'
import { Link } from 'react-router-dom'
import Preloader from '../../components/Preloader/Preloader'
import SectionTitle from '../../components/Title/SectionTitle'

import { useTourItems } from '../../hooks/useTourItems'
import { sortByDate } from '../../utils/common'
import TourItem from './TourItem'


// components


const TourItems = () => {

	const { items = [], isLoading } = useTourItems();

	const filtered =
		sortByDate(
			items
				.filter(({ soldOut, ticketLink }) => !soldOut && ticketLink)
				.filter((_, i) => i < 5)
		);

	return (
		<section className="tour">
			<div className='container'>
				<SectionTitle text='Концерти' />
				{isLoading ? <Preloader /> : (
					<ul className='tour-list'>
						{
							filtered.map((item, i) => (
								<TourItem {...item} key={item.sys.id} />
							))
						}
					</ul>
				)}
				<Link to='/tour' className='button-more'>
					Всі концерти
				</Link>
			</div>
		</section>
	)
}
export default TourItems