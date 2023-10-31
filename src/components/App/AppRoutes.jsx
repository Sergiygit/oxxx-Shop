import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home/Home'
import NewsPage from '../News/NewsPage'
import NewsSingle from '../News/NewsSingle'
import ShopPage from '../Shop/ShopPage'
import TourPage from '../Tour/TourPage'
import Trackspage from '../Tracks/Trackspage'

const AppRoutes = () => (
	<Routes>
		<Route index element={<Home />} />
		<Route path='/tour' element={<TourPage />} />
		<Route path='/tracks' element={<Trackspage />} />
		<Route path='/shop' element={<ShopPage />} />
		<Route path='/news' element={<NewsPage />} />
		<Route path='/news/:id' element={<NewsSingle />} />
	</Routes>
)

export default AppRoutes