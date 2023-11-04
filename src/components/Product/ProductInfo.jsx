
// import React, { useState } from 'react';
// import ProductTitle from './ProductTitle';


// import { useDispatch } from 'react-redux';
// import { addToCart } from '../../reducers/cartReducer';

// const ProductInfo = ({ product }) => {
// 	const { sys: { id }, cover: { url }, title, price, category, discount } = product

// 	// const [size, setSize] = useState('')
// 	const [color, setColor] = useState('')
// 	const colors = [
// 		'Red',
// 		'Blue',
// 		'Green',
// 		'Yellow',
// 		'Orange',
// 		'Purple',
// 	];

// 	const dispatch = useDispatch()




// 	const addCart = () => {
// 		dispatch(addToCart({
// 			id,
// 			title,
// 			url,
// 			price,
// 			category,
// 			discount,
// 			color
// 		}));
// 	}

// 	return (
// 		<div className="product__info">
// 			<div className='product__info-text'>
// 				<ProductTitle product={product} />
// 			</div>
// 			<p className="product__title-size">
// 				Колір
// 			</p>
// 			<ul className="product__list">
// 				{
// 					colors.map((item, idx) => (
// 						<li key={idx}
// 							style={{
// 								background: `${color === item ? 'grey' : 'transparent'}`,
// 								color: `${color === item ? 'white' : 'white'} `
// 							}}
// 							onClick={() => {
// 								if (item) {
// 									setColor(item)
// 								}
// 							}}
// 							// className={`${item < 0 ? 'product__size' : 'product__size_null'}`}>
// 							className={'product__size'}>
// 							{item}
// 						</li>
// 					))
// 				}

// 			</ul>
// 			<div className="product__btns">
// 				<button onClick={addCart}
// 					className={`product__btn product__btn_cart ${!color && 'product__btn-disabled'}`}
// 					disabled={!color}
// 				>
// 					{!color ? "Please select a color" : "Add to Cart"}
// 				</button>
// 			</div>
// 		</div>
// 	);
// };

// export default ProductInfo;



import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, setItemColor } from '../../reducers/cartReducer';

const ProductInfo = ({ product }) => {
	const { sys: { id }, cover: { url }, title, price, category, discount } = product;
	const dispatch = useDispatch();
	const selectedColor = useSelector(state => {
		const item = state.cart.cart.find(item => item.id === id);
		return item ? item.color : '';
	});

	const colors = [
		'Red',
		'Blue',
		'Green',
		'Yellow',
		'Orange',
		'Purple',
	];

	const addCart = () => {
		if (selectedColor) {
			dispatch(addToCart({
				id,
				title,
				url,
				price,
				category,
				discount,
				color: selectedColor,
			}));
		} else {
			// Обробка помилки, коли колір не вибраний
		}
	};

	const changeColor = (newColor) => {
		dispatch(setItemColor({
			id,
			color: newColor,
		}));
	};

	return (
		<div className="product__info">
			{/* Інші частини компоненту */}
			<ul className="product__list">
				{colors.map((item, idx) => (
					<li
						key={idx}
						style={{
							background: `${selectedColor === item ? 'grey' : 'transparent'}`,
							color: `${selectedColor === item ? 'white' : 'white'} `,
						}}
						onClick={() => {
							changeColor(item); // Змінюємо колір при виборі
						}}
						className={'product__size'}
					>
						{item}
					</li>
				))}
			</ul>
			<div className="product__btns">
				<button
					onClick={addCart}
					className={`product__btn product__btn_cart ${!selectedColor && 'product__btn-disabled'}`}
					disabled={!selectedColor}
				>
					{!selectedColor ? "Please select a color" : "Add to Cart"}
				</button>
			</div>
		</div>
	);
};

export default ProductInfo;