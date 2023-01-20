import { Button } from '@mui/material';
import React from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function PaperButton({ label, onClick }) {
	return (
		<Button
			onClick={onClick}
			sx={{
				boxShadow: '5px 5px 0px 0px var(--dark)',
				border: 2,
				borderRadius: 2,
				color: 'black',
				backgroundColor: 'var(--accent)',
			}}
			variant="contained"
			endIcon={[<ChevronRightIcon />]}
		>
			{label}
		</Button>
	);
}

export default PaperButton;
