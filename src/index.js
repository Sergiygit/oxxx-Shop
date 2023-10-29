import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App/App";

import { BrowserRouter } from "react-router-dom";

// redux
import { Provider } from "react-redux";
import { store } from "./store";
import ScrollToTop from "./utils/scrollToTop";



const root = createRoot(document.getElementById("root"));
root.render(
	<Provider store={store}>
		<BrowserRouter>
			<ScrollToTop />
			<App />
		</BrowserRouter>
	</Provider>
)