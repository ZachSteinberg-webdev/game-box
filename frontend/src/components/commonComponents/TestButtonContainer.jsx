import React from 'react';

export default function TestButtonContainer({
	children,
	testButtonContainerClassName
}){
	return(
		<div
			className={testButtonContainerClassName}
		>
			{children}
		</div>
	);
};
