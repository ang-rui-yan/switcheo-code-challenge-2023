import './App.css';
import { Container } from '@mui/material';
import AmountPage from './pages/transaction/AmountPage';
import { Route, Routes } from 'react-router-dom';
import ConfirmationPage from './pages/transaction/ConfirmationPage';

function App() {
	return (
		<Container>
			<Routes>
				<Route
					path="/"
					element={<AmountPage />}
				/>
				<Route
					path="confirmationTransaction"
					element={<ConfirmationPage />}
				/>
			</Routes>
		</Container>
	);
}

export default App;
