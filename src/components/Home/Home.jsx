import React from 'react'

// components
import TourItems from '../Tour/TourItems'
import Tracks from '../Tracks/Tracks'
import MainBanner from './MainBanner'
import ShopBanner from './ShopBanner'
import News from '../News/News'
import TourBanner from './TourBanner'

const Home = () => {
	return (
		<main className="main">
			<MainBanner />
			<TourItems />
			<TourBanner />
			<Tracks />
			<ShopBanner />
			<News />
		</main>
	)
}

export default Home