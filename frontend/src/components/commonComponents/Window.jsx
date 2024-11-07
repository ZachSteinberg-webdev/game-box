import React from 'react';

export default function Window({
	children,
	windowClassName,
	windowId
}){
	return(
		<div
			className={windowClassName}
			id={windowId}
		>
			{children}
		</div>
	);
};
