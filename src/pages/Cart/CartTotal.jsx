import React from 'react'

// redux
import { useSelector } from 'react-redux'
import { calculateDiscountedPrice } from '../../utils/common'

const CartTotal = () => {

	const cart = useSelector((state) => state.cart.cart)
	const getTotal = () => {
		let totalQuantity = 0
		let totalPrice = 0
		cart.forEach(item => {
			totalQuantity += item.quantity
			totalPrice += item.discount
				? (calculateDiscountedPrice(item.price, item.discount)) * item.quantity : item.price * item.quantity
		})
		return { totalPrice, totalQuantity }
	}

	return (
		<p className="total__p">
			total ({getTotal().totalQuantity} items)
			: <strong>${getTotal().totalPrice}</strong>
		</p>
	)
}

export default CartTotal