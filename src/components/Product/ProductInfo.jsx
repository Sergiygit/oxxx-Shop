import React, { useState } from 'react';
import ProductTitle from './ProductTitle';


const ProductInfo = ({ product }) => {

	const [size, setSize] = useState('')

	const colors = [
		'Red',
		'Blue',
		'Green',
		'Yellow',
		'Orange',
		'Purple',
	];


	return (
		<div className="product__info">
			<div className='product__info-text'>
				<ProductTitle product={product} />
			</div>
			<p className="product__title-size">
				Размер
			</p>
			<ul className="product__list">
				{
					colors.map((item, idx) => (
						<li key={idx}
							style={{ background: `${size === item ? 'grey' : 'transparent'}`, color: `${size === item ? 'white' : 'white'} ` }}
							onClick={() => {
								if (item) {
									setSize(item)
								}
							}}
							// className={`${item < 0 ? 'product__size' : 'product__size_null'}`}>
							className={'product__size'}>
							{item}
						</li>
					))
				}

			</ul>
			<div className="product__btns">
				<div>
					{/* <button className="product__btn product__btn_cart" onClick={() => {
						if (size.length) {
							setProductForCarts({ ...product, size })
						} else {
							alert('виберіть розмір')
						}
					}}>
										додати в кошик
					</button> */}
					<button className="product__btn product__btn_cart">
						додати в кошик
					</button>

				</div>
				{/* <div>
					<button className="product__btn product__btn_buy">
						sdsd
					</button>
				</div> */}

			</div>
		</div>
	);
};

export default ProductInfo;