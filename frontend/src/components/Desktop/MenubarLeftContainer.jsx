import React from 'react';

export default function MenubarLeftContainer({
	children,
	menubarLeftContainerId
}){
	return(
		<div
			className='menubar-left-container'
			id={menubarLeftContainerId}
		>
			{children}
		</div>
	);
};
