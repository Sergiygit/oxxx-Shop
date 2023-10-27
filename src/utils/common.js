import { MAIN_URL } from "./constants"

// feth request query
export const request = async (query) => {
	try {
		const result = await fetch(MAIN_URL, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
			},
			body: JSON.stringify({ query }),
		});

		const { data } = await result.json();

		return data;
	} catch (err) {
		console.log(err);
	}
};

export const sortByDate = (arr) => {
	return arr.sort((a, b) => new Date(a.date) - new Date(b.date))
}

export const getLocalDateString = (date, { month = 'numeric', day = 'numeric', year = 'numeric' }) => {
	return new Date(date).toLocaleDateString('uk-UA', {
		month,
		day,
		year
	})
}