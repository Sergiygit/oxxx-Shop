import React, { useState } from 'react'
import Preloader from '../../components/Preloader/Preloader'
import Section from '../../components/Section/Section'
import PageTitle from '../../components/Title/PageTitle'
import { useShopItems } from '../../hooks/useShopitems'

//components 
import ShopCard from './ShopCard'
import ShopCategoryList from './ShopCategoryList'

const ShopPage = () => {

	const { items = [], isLoading } = useShopItems()

	const [filtered, setFiltered] = useState([]);

	return (
		<Section className="shop-section page">
			<div className="container">
				<PageTitle text='Shop' />

				{isLoading ?
					<Preloader /> : (
						<>
							<ShopCategoryList filtered={filtered} setFiltered={setFiltered} />
							<ul className='shop-list'>
								{filtered.length ?
									filtered.map((el, idx) => (
										<ShopCard key={idx} el={el} />
									)) :
									items.map((el, idx) => (
										<ShopCard key={idx} el={el} />
									))
								}
							</ul>
						</>
					)}
			</div>
		</Section>
	)
}

export default ShopPage


