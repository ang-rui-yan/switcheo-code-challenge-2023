import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '@fontsource/montserrat';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';

let theme = createTheme({
	typography: {
		fontFamily: `"Montserrat", sans-serif`,
		fontSize: 14,
		fontWeightLight: 300,
		fontWeightRegular: 400,
		fontWeightMedium: 500,
	},
});
theme = responsiveFontSizes(theme);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</ThemeProvider>
	</React.StrictMode>
);
