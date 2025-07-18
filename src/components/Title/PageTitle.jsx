import React from 'react'

const PageTitle = ({ text, image }) => {
	return (
		<h1 className='page-title'>
			{image ? (
				<img src={image} alt={text || 'Page title'} />
			) : (
				text
			)}
		</h1>
	)
}

export default PageTitle
