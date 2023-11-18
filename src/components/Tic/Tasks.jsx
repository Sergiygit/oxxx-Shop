import React from 'react'
import { useState } from 'react';

const Tasks = () => {


	// // ДЕКЛАРАТИВНІСТЬ
	// const [isDarkTheme, setDarkTheme] = useState(false);

	// const themeStyles = {
	// 	backgroundColor: isDarkTheme ? '#333' : '#fff', // Приклад кольорів
	// 	height: "100vh",
	// 	width: '100px'
	// };

	// console.log(themeStyles.color)


	// // РЕАКТИВНІСТЬ
	// const [value, setValue] = useState('');

	// const handleChange = (newValue) => {
	// 	setValue(newValue);
	// };

	//// ІМУТАБЕЛЬНІСТЬ
	const [state, setState] = useState({
		counter: 0,
		items: ['item1', 'item2', 'item3'],
	});
	const incrementCounter = () => {
		setState((prev) => ({
			...prev,
			counter: prev.counter + 1
		}))
	}

	const addItem = () => {
		setState((prevState) => ({
			...prevState,
			items: [prevState.items, `newItem${prevState.items.length + 1}`]
		}))
	}

	return (
		<>
			{/* ДЕКЛАРАТИВНІСТЬ */}
			{/* <div style={
				themeStyles
			}>
				<div>
					<button
						style={{ color: isDarkTheme ? '#333' : 'red' }}
						onClick={() => setDarkTheme(false)}>Light Theme</button>

			<div>
				<button
					style={{ color: isDarkTheme ? '#fff' : '#333' }}
					onClick={() => setDarkTheme(true)}>Dark Theme</button>
			</div>
		</div>

		</div > */}

			{/* РЕАКТИВНІСТЬ */}
			{/* <div>
				<FirstComponent value={value} handleChange={handleChange} />
				<SecondComponent value={value} />
			</div> */}

			{/* ІМУТАБЕЛЬНІСТЬ */}



			<div>
				<p>Counter: {state.counter}</p>
				{state.items.map((el) => (
					<div key={el}>Items: {el}, </div>
				))}

				<button onClick={incrementCounter}>Increment Counter</button>
				<div>
					<button onClick={addItem}>Add Item</button>
				</div>
			</div>
		</>
	)
}

export default Tasks


// // РЕАКТИВНІСТЬ
// function FirstComponent({ value, handleChange }) {
// 	const handleInputChange = (e) => {
// 		const newValue = e.target.value;
// 		handleChange(newValue);
// 	};

// 	return (
// 		<div>
// 			<h2>First Component</h2>
// 			<input
// 				type="text"
// 				value={value}
// 				onChange={handleInputChange}
// 				placeholder="Enter value"
// 			/>
// 		</div>
// 	);
// }


// function SecondComponent({ value }) {
// 	return (
// 		<div>
// 			<h2>Second Component</h2>
// 			<p>Value from First Component: {value}</p>
// 		</div>
// 	);
// }