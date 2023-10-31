import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getShopsItems } from "../reducers/shopReducer";


export const useShopItems = () => {
	const dispatch = useDispatch()

	const { items = [], isLoading } = useSelector(({ shop }) => shop);

	useEffect(() => {
		!items.length && dispatch(getShopsItems())
	}, [items, dispatch])

	return {items, isLoading}
}