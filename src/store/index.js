// import { configureStore } from "@reduxjs/toolkit";
// import newsReducer from "../reducers/newsReducer";
// import shopReducer from "../reducers/shopReducer";

// // reducers
// import tourReducer from "../reducers/tourReducer";
// import tracksReducer from "../reducers/tracksReducer";

// export const store = configureStore({
// 	reducer: {
// 		tour: tourReducer,
// 		tracks: tracksReducer,
// 		news: newsReducer,
// 		shop: shopReducer,
// 	},
// 	devTools: true,
// })


// ///////////
// import { configureStore } from "@reduxjs/toolkit";
// import newsReducer from "../reducers/newsReducer";
// import shopReducer from "../reducers/shopReducer";

// // reducers
// import tourReducer from "../reducers/tourReducer";
// import tracksReducer from "../reducers/tracksReducer";
// import { cartReducer } from "../reducers/cartReducer";

// // storage
// import storage from 'redux-persist/lib/storage';
// import {
// 	persistStore,
// 	persistReducer,
// 	FLUSH,
// 	REHYDRATE,
// 	PAUSE,
// 	PERSIST,
// 	PURGE,
// 	REGISTER,
// } from 'redux-persist'

// const persistConfig = {
// 	key: 'root',
// 	storage,
// }

// const persistedReducer = persistReducer(persistConfig, cartReducer)
// export const store = configureStore({
// 	reducer: {
// 		tour: tourReducer,
// 		tracks: tracksReducer,
// 		news: newsReducer,
// 		shop: shopReducer,
// 		cart: persistedReducer
// 	},
// 	middleware: (getDefaultMiddleware) =>
// 		getDefaultMiddleware({
// 			serializableCheck: {
// 				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
// 			},
// 		}),
// 	devTools: true,
// })

// export const persistor = persistStore(store)



import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "../reducers/cartReducer";
import newsReducer from "../reducers/newsReducer";
import shopReducer from "../reducers/shopReducer";

// reducers
import tourReducer from "../reducers/tourReducer";
import tracksReducer from "../reducers/tracksReducer";

// storage state
import storage from 'redux-persist/lib/storage';
import {
	persistStore, persistReducer, FLUSH,
	REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER,
} from 'redux-persist'

const persistConfig = {
	key: 'root',
	storage,
}

const persistedReducer = persistReducer(persistConfig, cartReducer)

export const store = configureStore({
	reducer: {
		tour: tourReducer,
		tracks: tracksReducer,
		news: newsReducer,
		shop: shopReducer,
		cart: persistedReducer
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
	devTools: true,
})
export const persistor = persistStore(store)