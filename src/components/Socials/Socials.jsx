import React from 'react'

// utils
import { SOCIALS } from '../../utils/constants'

// components
import Icon from '../Icon/Icon'

const Socials = () => {
	return (
		<ul className="socials">
			{SOCIALS.map(({ icon, link }) => (
				<li title={icon} className='socials-item' key={icon}>
					<a href={link} target='__blank'>
						<Icon name={icon} />
					</a>
				</li>
			)
			)}
		</ul>
	)
}

export default Socials