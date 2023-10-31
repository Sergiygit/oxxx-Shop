import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


// utils
import { request } from "../utils/common";
import { shopItemCollectionQuery } from "../utils/queries";

const initialState = {
	items: [],
	isLoading: false,
};

// feth request query
export const getShopsItems = createAsyncThunk(
	"shopItem/getShopsItems",
	async (_, thunkAPI) => {
		try {
			const data = await request(shopItemCollectionQuery);

			const { items } = data.shopItemCollection;

			return items;
		} catch (err) {
			return thunkAPI.rejectWithValue(err);
		}
	}
);
const shopItemSlice = createSlice({
	name: "shopItem",
	initialState,

	extraReducers: (builder) => {
		builder
			.addCase(getShopsItems.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getShopsItems.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.items = payload;
			})
			.addCase(getShopsItems.rejected, (state) => {
				state.isLoading = false;
			});
	},
});

export default shopItemSlice.reducer;