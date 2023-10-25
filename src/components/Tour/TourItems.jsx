import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getTourItems } from '../../reducers/tourReducer'
import { sortByDate } from '../../utils/common'


// components
import Section from '../Section/Section'
import SectionTitle from '../Title/SectionTitle'
import TourItem from './TourItem'

const TourItems = () => {
	const dispatch = useDispatch()

	const { items = [], isLoading } = useSelector(({ tour }) => tour);

	useEffect(() => {
		dispatch(getTourItems())
	}, [dispatch])

	const filtered =
		sortByDate(
			items
				// .filter(({ soldOut, ticketLink }) => !soldOut && ticketLink)
				.filter((_, i) => i < 5)
		);

	return (
		<Section className="tour">
			<div className='container'>
				<SectionTitle text='Концерти' />
				{isLoading ? 'LOADING' : (
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
		</Section>
	)
}
export default TourItems