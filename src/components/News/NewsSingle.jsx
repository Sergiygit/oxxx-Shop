import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { getNewsItem } from '../../reducers/newsReducer'
import { getLocalDateString, jsonToText } from '../../utils/common'
import Preloader from '../Preloader/Preloader'

const NewsSingle = () => {
	const dispatch = useDispatch()
	const { id } = useParams()

	const { item, isLoading } = useSelector(({ news }) => news);

	useEffect(() => {
		dispatch(getNewsItem(id));
	}, [dispatch, id]);
	console.log(item)
	return (
		<section className='page news-single'>
			<div className="container">
				{isLoading || !item ? (
					<Preloader />
				) : (
					<div className="news-single__item">
						<h1 className="news-single__item-title">{item.title}</h1>
						<p className="news-single__item-date">
							{getLocalDateString(item.date, { month: "short" })}
						</p>
						<div className="news-single__item-content">
							{item.description ? jsonToText(item.description.json) : null}
							{/* {item.description} */}
						</div>
					</div>
				)}
			</div>
		</section>
	)
}

export default NewsSingle