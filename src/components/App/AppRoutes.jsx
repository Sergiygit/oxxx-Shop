// import React from 'react'
// import { Route, Routes, useLocation } from 'react-router-dom'
// import NewsPage from '../../pages/News/NewsPage'
// import NewsSingle from '../../pages/News/NewsSingle'
// import NotFound from '../../pages/NotFound/NotFound'
// import ShopPage from '../../pages/Shop/ShopPage'
// import TourPage from '../../pages/Tour/TourPage'
// import Trackspage from '../../pages/Tracks/Trackspage'
// import Home from '../Home/Home'
// import Product from '../Product/Product'

// const AppRoutes = () => {
// 	const location = useLocation()
// 	console.log(location)
// 	return (
// 		<>
// 			<Routes>
// 				<Route index element={<Home />} />
// 				<Route path='/tour' element={<TourPage />} />
// 				<Route path='/tracks' element={<Trackspage />} />
// 				<Route path='/shop' element={<ShopPage />} />
// 				<Route path='/shop/:id' element={<Product />} />
// 				<Route path='/news' element={<NewsPage />} />
// 				<Route path='/news/:id' element={<NewsSingle />} />
// 				<Route path='*' element={<NotFound />} />
// 			</Routes>

// 			{
// 				location.pathname = '/tour' || '/tracks' || '/shop'

// 			}
// 		</>
// 	)
// }

// export default AppRoutes

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from '../../pages/Cart/Cart'
import NewsPage from '../../pages/News/NewsPage'
import NewsSingle from '../../pages/News/NewsSingle'
import NotFound from '../../pages/NotFound/NotFound'
import ShopPage from '../../pages/Shop/ShopPage'
import TourPage from '../../pages/Tour/TourPage'
import Trackspage from '../../pages/Tracks/Trackspage'
import Home from '../Home/Home'
import Product from '../Product/Product'

const AppRoutes = () => {

	return (
		<>
			<Routes>
				<Route index element={<Home />} />
				<Route path='/tour' element={<TourPage />} />
				<Route path='/tracks' element={<Trackspage />} />
				<Route path='/shop' element={<ShopPage />} />
				<Route path='/shop/:id' element={<Product />} />
				<Route path='/news' element={<NewsPage />} />
				<Route path='/cart' element={<Cart />} />
				<Route path='/news/:id' element={<NewsSingle />} />
				<Route path='*' element={<NotFound />} />
			</Routes>


		</>
	)
}

export default AppRoutes