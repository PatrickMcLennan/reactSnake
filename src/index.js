import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ContextProvider } from 'Context/Context';

const ROOT = document.querySelector('.root');

ReactDOM.render(
	<ContextProvider>
		<App />
	</ContextProvider>,
	ROOT
);
