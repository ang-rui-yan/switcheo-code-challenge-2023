import React from 'react';
import { Box, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function ConfirmationPage() {
	return (
		<Box
			sx={{
				marginTop: 5,
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				height: '80vh',
			}}
		>
			<CheckCircleIcon
				sx={{
					fontSize: 120,
				}}
			/>

			<Typography
				variant="h2"
				component="div"
				sx={{ textAlign: 'center' }}
			>
				Transaction completed
			</Typography>
		</Box>
	);
}

export default ConfirmationPage;
