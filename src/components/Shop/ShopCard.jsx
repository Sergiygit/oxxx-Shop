import React, { memo } from 'react'
import { Link } from 'react-router-dom';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ShopCard = memo(({ el }) => {
	const { sys: { id }, title, cover: { url }, description, price, discount } = el;

	const calculateDiscountedPrice = (price, discount) => {
		return discount ? price - (price * (discount / 100)) : price;
	};

	return (
		<li className="shop-list__item" key={id}>
			{!discount ? <span className="shop-list__item-price">{price} $</span> : <span className="shop-list__item-priceSale">{calculateDiscountedPrice(price, discount)} $</span>}
			<Link to={`/shop/${id}`}>
				<LazyLoadImage effect='blur' className="shop-list__item-image" src={url} alt={el.title} />
			</Link>
			<h1 className="shop-list__item-title">{title}</h1>
			<hr />
			<p className="shop-list__item-description">{description} </p>
			<Link to='/' className="shop-list__item-btn btn">Buy Now</Link>
		</li>
	)
})

export default ShopCard