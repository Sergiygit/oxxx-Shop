import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getShopItem } from '../../reducers/shopReducer'
import Preloader from '../Preloader/Preloader'
import ProductInfo from './ProductInfo'
import ProductSlide from './ProductSlide'
import ProductTitle from './ProductTitle'

const Product = () => {
	const { item, isLoading } = useSelector(({ shop }) => shop)
	const { id } = useParams()

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getShopItem(id));
	}, [dispatch, id]);



	return (
		<section className='page product'>
			<div className="container">
				{isLoading || !item ? (
					<Preloader />
				) : (
					<div className="product__item">
						<div className="product__text">

							<ProductTitle product={item} />
						</div>
						<div className="product__row">
							<ProductSlide product={item} />
							<ProductInfo product={item} />
						</div>
					</div>
				)}
			</div>
		</section>
	)
}

export default Product