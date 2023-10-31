import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useShopItems } from '../../hooks/useShopitems'

//components 
import Preloader from '../Preloader/Preloader'
import Section from '../Section/Section'
import PageTitle from '../Title/PageTitle'
import ShopCategoryList from './ShopCategoryList'

const ShopPage = () => {

	const { items = [], isLoading } = useShopItems()

	const [filtered, setFiltered] = useState([]);

	// console.log(filterCategory)
	return (
		<Section className="shop-section page">
			<div className="container">
				<PageTitle text='Shop' />

				{isLoading ?
					<Preloader /> : (
						<>
							<ShopCategoryList filtered={filtered} setFiltered={setFiltered} />
							<ul className='shop-list'>
								{filtered.length ? filtered.map((el) => {
									const { sys: { id }, title, cover: { url }, description, price, discount } = el;
									const discountedPrice = price - (price / 100 * discount);
									return (
										<li className="shop-list__item" key={id}>
											{!discount ? <span className="shop-list__item-price">{price} $</span> : <span className="shop-list__item-priceSale">{discountedPrice} $</span>}										<img className="shop-list__item-image" src={url} alt={el.title} />
											<h1 className="shop-list__item-title">{title}</h1>
											<hr />
											<p className="shop-list__item-description">{description} </p>
											<Link to='/' className="shop-list__item-btn btn">Buy Now</Link>
										</li>
									)
								}) :
									items.map((el) => {
										const { sys: { id }, title, cover: { url }, description, price, discount } = el;
										const discountedPrice = price - (price / 100 * discount);

										return (
											<li className="shop-list__item" key={id}>
												{!discount ? <span className="shop-list__item-price">{price} $</span> : <span className="shop-list__item-priceSale">{discountedPrice} $</span>}										<img className="shop-list__item-image" src={url} alt={el.title} />
												<h1 className="shop-list__item-title">{title}</h1>
												<hr />
												<p className="shop-list__item-description">{description} </p>
												<Link to='/' className="shop-list__item-btn btn">Buy Now</Link>
											</li>
										)
									})
								}
								<ul>

								</ul>
								{/* {items.map((el) => {
									const { sys: { id }, title, cover: { url }, description, price, discount } = el;
									const discountedPrice = price - (price / 100 * discount);

									return (
										<li className="shop-list__item" key={id}>
											{!discount ? <span className="shop-list__item-price">{price} $</span> : <span className="shop-list__item-priceSale">{discountedPrice} $</span>}										<img className="shop-list__item-image" src={url} alt={el.title} />
											<h1 className="shop-list__item-title">{title}</h1>
											<hr />
											<p className="shop-list__item-description">{description} </p>
											<Link to='/' className="shop-list__item-btn btn">Buy Now</Link>
										</li>
									)
								})} */}
							</ul>
						</>
					)}
			</div>
		</Section>
	)
}

export default ShopPage


