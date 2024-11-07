import React from 'react';

export default function TitlebarLefthandButton({
	lefthandButtonClassName,
	lefthandButtonId,
	lefthandButtonFunction
}){
	return(
		<div
			className={lefthandButtonClassName}
			id={lefthandButtonId}
			onClick={lefthandButtonFunction}
		>
		</div>
	);
};
