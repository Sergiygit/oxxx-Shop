import { configureStore } from "@reduxjs/toolkit";

// reducers
import tourReducer from "../reducers/tourReducer";

export const store = configureStore({
	reducer: {
		tour: tourReducer,

	},
	devTools: true,
})