import React from 'react';

export default function OtwBackground({
	children
}){
	return(
		<div
			className='otw-background-overlay'
		>
			{children}
		</div>
	);
};
