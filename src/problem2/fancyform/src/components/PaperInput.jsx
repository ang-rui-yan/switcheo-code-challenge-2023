import { Card, CardContent, TextField } from '@mui/material';
import React, { useState } from 'react';

function PaperInput({ label }) {
	const [focused, setFocused] = useState(false);
	const onFocus = () => {
		setFocused(true);
	};
	const onBlur = () => {
		setFocused(false);
	};

	let label_name = label.toLowerCase().split(' ').join('-');

	return (
		<Card
			sx={{
				// boxShadow: focused
				// 	? '10px 10px 0px 0px var(--accent)'
				// 	: '10px 10px 0px 0px var(--primary)',
				boxShadow: focused
					? '10px 10px 0px 0px var(--accent)'
					: '5px 5px 0px 0px var(--dark)',
				border: 2,
				borderRadius: 2,
			}}
		>
			<CardContent>
				<TextField
					size="small"
					required
					id={label_name}
					name={label_name}
					label={label}
					InputLabelProps={{
						shrink: true,
					}}
					InputProps={{ disableUnderline: true }}
					variant="standard"
					onFocus={onFocus}
					onBlur={onBlur}
				/>
			</CardContent>
		</Card>
	);
}

export default PaperInput;
