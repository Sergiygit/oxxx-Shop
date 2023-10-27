import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home/Home'
import TourPage from '../Tour/TourPage'
import Trackspage from '../Tracks/Trackspage'

const AppRoutes = () => (
	<Routes>
		<Route index element={<Home />} />
		<Route path='/tour' element={<TourPage />} />
		<Route path='/tracks' element={<Trackspage />} />
	</Routes>
)

export default AppRoutes