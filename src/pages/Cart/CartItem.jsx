import { useDispatch } from 'react-redux'
import { decrementQuantity, incrementQuantity, removeItem } from '../../reducers/cartReducer'
import { calculateDiscountedPrice } from '../../utils/common'

function CartItem({ item }) {
	const dispatch = useDispatch()

	const { id, url, title, price, quantity = 0, discount, category, color } = item

	console.log(item)
	return (
		<div className="cartItem">
			<img className="cartItem__image" src={url} alt='item' />
			<div className="cartItem__info">
				<p className="cartItem__title">{title}</p>
				<p className="cartItem__category">{category}</p>
				<p className="cartItem__color">{color}</p>
				<p className="cartItem__price">
					<small>$</small>
					{!discount ? <strong>{price}</strong> : <strong>{calculateDiscountedPrice(price, discount)}</strong>}
				</p>
				<div className='cartItem__incrDec'>
					<button onClick={() => dispatch(decrementQuantity(id))}>-</button>
					<p>{quantity}</p>
					<button onClick={() => dispatch(incrementQuantity(id))}>+</button>
				</div>
				<button
					className='cartItem__removeButton'
					onClick={() => dispatch(removeItem(id))}>
					Remove
				</button>
			</div>
		</div>
	)
}

export default CartItem