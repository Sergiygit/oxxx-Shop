import React from 'react'
import { useState } from 'react'

const UseStateReact = () => {

	const [numm, setNumm] = useState({ counter: 0 })

	const hundleClick = () => {
		setNumm(
			(last) => {
				console.log(last)
				return {
					...last,
					counter: last.counter + 1
				}
			}
		)
	}

	const hundleClick3 = () => {
		hundleClick()
		hundleClick()
		hundleClick()
	}
	return (
		<>
			<p>{numm.counter}</p>
			<button onClick={hundleClick}>click</button>
			<button onClick={hundleClick3}>click</button>
		</>
	)
}

export default UseStateReact