import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	cart: [],
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,

	reducers: {
		addToCart: (state, action) => {
			const { id, color, size } = action.payload;
			const itemInCart = state.cart.find((item) => item.id === id && item.color === color && item.size === size);

			if (itemInCart) {
				itemInCart.quantity++;
			} else {
				state.cart.push({ ...action.payload, quantity: 1 });
			}
		},

		incrementQuantity: (state, action) => {
			const { id, color, size } = action.payload;
			const item = state.cart.find((item) => item.id === id && item.color === color && item.size === size);
			if (item) {
				item.quantity++;
			}
		},
		decrementQuantity: (state, action) => {
			const { id, color, size } = action.payload;
			const item = state.cart.find((item) => item.id === id && item.color === color && item.size === size);
			if (item && item.quantity > 1) {
				item.quantity--;
			}
		},
		removeItem: (state, action) => {
			const { id, color, size } = action.payload;
			const updatedCart = state.cart.filter((item) => !(item.id === id && item.color === color && item.size === size));
			state.cart = [...updatedCart];
		},

	},
});

export const cartReducer = cartSlice.reducer;
export const {
	addToCart,
	incrementQuantity,
	decrementQuantity,
	removeItem,
} = cartSlice.actions;