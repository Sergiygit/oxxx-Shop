
// import React, { memo } from 'react'
// import { Link } from 'react-router-dom';

// import { LazyLoadImage } from 'react-lazy-load-image-component';
// import 'react-lazy-load-image-component/src/effects/blur.css';

// import { calculateDiscountedPrice } from '../../utils/common';

// const ShopCard = memo(({ el }) => {
// // 	const { sys: { id }, title, cover: { url }, description, price, discount } = el;

// 	const { sys: { id }, title, cover: { url },  price, discount } = el;


// 	return (
// 		<li className="shop-list__item" key={id}>
// 			{!discount ? <span className="shop-list__item-price">{price} $</span> : <span className="shop-list__item-priceSale">{calculateDiscountedPrice(price, discount)} $</span>}
// 			<Link to={`/shop/product/${id}`} >
// 				<LazyLoadImage effect='blur' className="shop-list__item-image" src={url } alt={el.title} />
// 			</Link>
// 			<h1 className="shop-list__item-title">{title}</h1>
// 			{/* <hr /> */}
// 			{/* <p className="shop-list__item-description">{description} </p> */}
// 			{/* <Link to={`/shop/${id}`} className="shop-list__item-btn btn">Buy Now</Link> */}
// 		</li>
// 	)
// })

// export default ShopCard



import React, { memo } from 'react'
import { Link } from 'react-router-dom';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import { calculateDiscountedPrice } from '../../utils/common';

// Якщо логотип у /public, можна так:
// const watermarkUrl = '/public/images/0-02-05-2ea2b8646444959a9191c5feec65ae5a543694a138425375e851378babbf180d_f52cd4cd5a29a098.jpg'

// Або імпорт (якщо логотип у src/assets)
// import watermarkUrl from '../../assets/watermark.png'

const ShopCard = memo(({ el }) => {
  const { sys: { id }, title, cover: { url }, price, discount } = el;

  return (
    <li className="shop-list__item" key={id}>
      {!discount ? (
        <span className="shop-list__item-price">{price} $</span>
      ) : (
        <span className="shop-list__item-priceSale">{calculateDiscountedPrice(price, discount)} $</span>
      )}

      <Link to={`/shop/product/${id}`}>
        <div
          style={{
            position: 'relative',
            display: 'inline-block',
          }}
        >
          <LazyLoadImage
            effect="blur"
            className="shop-list__item-image"
            src={url}
            alt={title}
          />

          {/* <img
            src='/images/0-02-05-2ea2b8646444959a9191c5feec65ae5a543694a138425375e851378babbf180d_f52cd4cd5a29a098.jpg'
            alt="Watermark"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%) rotate(-30deg)',
              opacity: 0.2,
              pointerEvents: 'none',
              userSelect: 'none',
              maxWidth: '70%', // або вкажи розмір логотипа
              maxHeight: '70%',
              zIndex: 10,
            }}
          /> */}
        </div>
      </Link>

      <h1 className="shop-list__item-title">{title}</h1>
    </li>
  )
})

export default ShopCard
