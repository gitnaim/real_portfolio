import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import state from './state';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter basename={process.env.PUBLIC_URL}>
			<Provider store={state}>
				<App />
			</Provider>
	</BrowserRouter>
);

reportWebVitals();