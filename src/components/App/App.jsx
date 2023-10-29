import React, { Suspense } from 'react'
import '../../styles/index.scss'


// components
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import AppRoutes from './AppRoutes'
import Preloader from '../Preloader/Preloader'

const App = () => (
	<Suspense fallback={<Preloader />} className='app'>
		<Header />
		<AppRoutes />
		<Footer />
	</Suspense>
)

export default App