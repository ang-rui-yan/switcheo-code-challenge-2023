import React, { useState } from 'react';
import { Typography, Card, CardContent, Box, Backdrop, CircularProgress } from '@mui/material';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PaperInput from '../../components/PaperInput';
import PaperButton from '../../components/PaperButton';
import { useNavigate } from 'react-router-dom';

function AmountPage() {
	const [isOpeningScreenVisible, setOpeningScreenVisible] = useState(false);

	let navigate = useNavigate();
	const openLoading = () => {
		setOpeningScreenVisible(true);
		setTimeout(() => {
			setOpeningScreenVisible(false);
			navigate(`confirmationTransaction`);
		}, 3000);
	};

	return (
		<Box
			sx={{
				marginTop: 5,
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				height: '100%',
				gap: 3,
			}}
		>
			{isOpeningScreenVisible && (
				<Backdrop
					sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
					open={true}
				>
					<CircularProgress color="inherit" />
				</Backdrop>
			)}
			<Typography
				variant="h2"
				component="div"
				sx={{
					minWidth: 275,
					width: '85%',
					textAlign: 'center',
				}}
			>
				Transaction
			</Typography>
			<Card
				sx={{
					boxShadow: '5px 5px 0px 1px var(--dark)',
					border: 2,
					borderRadius: 2,
					minWidth: 275,
					width: '85%',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<CardContent
					sx={{
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center',
						width: '50%',
					}}
				>
					<MonetizationOnIcon sx={{ flex: '1', height: '50px' }} />
					<div style={{ flex: '2', textAlign: 'center' }}>
						<Typography variant="h6">25,860</Typography>
						<Typography sx={{ fontSize: '14px' }}>Cash Balance</Typography>
					</div>
				</CardContent>
			</Card>
			<Box
				component="form"
				noValidate
				sx={{
					justifyContent: 'space-evenly',
					display: 'flex',
					flexDirection: 'column',
					height: '100%',
					gap: 3,
					minWidth: 275,
					width: '85%',
				}}
			>
				<PaperInput label="ETH Address" />
				<PaperInput label="Amount" />
				<PaperButton
					label="Continue"
					onClick={openLoading}
				/>
			</Box>
		</Box>
	);
}

export default AmountPage;
