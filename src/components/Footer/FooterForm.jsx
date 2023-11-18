import React, { useState } from 'react';
import Icon from '../Icon/Icon';

const FooterForm = () => {

	const [state, setState] = useState("");

	const handleChange = ({ target: { value } }) => {
		setState(value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		alert('Successfully');
		setState("");
	};

	return (
		<form className="footer-form" onSubmit={handleSubmit}>
			<p>Subscribe to us</p>

			<div className='footer-form__block'>
				<div className="footer-form__email">
					<input
						onChange={handleChange}
						type="email"
						name="email"
						value={state}
						placeholder="Email"
					/>
				</div>
				<button className="footer-form__button" type="submit">
					<span>Subscribe</span>
					<Icon name="arrow-right" />
				</button>
			</div>
		</form>
	)
}

export default FooterForm;
