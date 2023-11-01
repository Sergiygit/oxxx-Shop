
import React, { useCallback } from 'react';
import { useShopItems } from '../../hooks/useShopitems';

const ShopCategoryList = ({ filtered, setFiltered }) => {
	const { items = [] } = useShopItems();

	const tabs = [...new Set(items.map(({ category }) => category))];
	const filterCategory = filtered.map((el) => el.category)
	const toggleTab = useCallback((tab) => {
		if (tab === null) {
			setFiltered([]);
		} else {
			setFiltered(items.filter((item) => item.category === tab));

		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className='shop-list__category'>
			<li
				className={`shop-list__category-item ${filterCategory.length === 0 ? 'active' : ''}`}
				onClick={() => toggleTab(null)}
			>
				Всі категорії
			</li>
			{tabs.map((category, idx) => (
				<li
					className={`shop-list__category-item ${filterCategory[0] !== category ? '' : 'active'}`}
					key={idx} onClick={() => toggleTab(category)}>
					{category}
				</li>

			))}

		</div>
	);
};

export default ShopCategoryList;

