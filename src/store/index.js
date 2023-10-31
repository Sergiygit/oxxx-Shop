import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "../reducers/newsReducer";
import shopReducer from "../reducers/shopReducer";

// reducers
import tourReducer from "../reducers/tourReducer";
import tracksReducer from "../reducers/tracksReducer";

export const store = configureStore({
	reducer: {
		tour: tourReducer,
		tracks: tracksReducer,
		news: newsReducer,
		shop: shopReducer,
	},
	devTools: true,
})