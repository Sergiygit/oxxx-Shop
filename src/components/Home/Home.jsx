import React from 'react'
// components
import TourItems from '../Tour/TourItems'
import MainBanner from './MainBanner'
import TourBanner from './TourBanner'

const Home = () => {
	return (
		<main className="main">
			<MainBanner />
			<TourItems />
			<TourBanner />
		</main>
	)
}

export default Home