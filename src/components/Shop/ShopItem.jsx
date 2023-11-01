import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useShopItems } from '../../hooks/useShopitems'
import { getShopItem } from '../../reducers/shopReducer'
import Preloader from '../Preloader/Preloader'

const ShopItem = () => {
	const { item = [], isLoading } = useShopItems(({ shop }) => shop)
	const { id } = useParams()
console.log(item)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getShopItem(id));
	}, [dispatch, id]);

	return (
		<section className='page news-single'>
			<div className="container">
				{isLoading || !item ? (
					<Preloader />
				) : (
					<div className="news-single__item">
						<h1 className="news-single__item-title">{item.title}</h1>
						<p className="news-single__item-date">
							{/* {getLocalDateString(item.date, { month: "short" })} */}
						</p>
						<div className="news-single__item-content">
							{/* {item.description ? jsonToText(item.description.json) : null} */}
							{/* {item.description} */}
						</div>
					</div>
				)}
			</div>
		</section>
	)
}

export default ShopItem