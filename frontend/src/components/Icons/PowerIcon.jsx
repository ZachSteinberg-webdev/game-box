import React from 'react';

export default function PowerIcon({
	powerIconClassName,
	powerIconId,
	powerIconPathClassName,
	powerIconPathId,
	powerIconPathFillColor
}){
	return(
		<svg
			className={powerIconClassName}
			id={powerIconId}
			viewBox='0 0 24 24'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				className={powerIconPathClassName}
				id={powerIconPathId}
				fill={powerIconPathFillColor}
				d='M12,0C5.4,0,0,5.4,0,12s5.4,12,12,12s12-5.4,12-12S18.6,0,12,0z M12,22C6.5,22,2,17.5,2,12S6.5,2,12,2  c5.5,0,10,4.5,10,10S17.5,22,12,22z M15.5,7c-0.4,0.4-0.4,1,0,1.4c1,1,1.5,2.2,1.5,3.6c0,2.8-2.2,5-5,5s-5-2.2-5-5  c0-1.4,0.5-2.6,1.5-3.6c0.4-0.4,0.4-1,0-1.4c-0.4-0.4-1-0.4-1.4,0C5.8,8.3,5,10.1,5,12c0,3.9,3.1,7,7,7s7-3.1,7-7  c0-1.9-0.8-3.7-2.1-5C16.5,6.6,15.9,6.6,15.5,7z M12,12c0.6,0,1-0.4,1-1V5c0-0.6-0.4-1-1-1c-0.6,0-1,0.4-1,1v6  C11,11.6,11.4,12,12,12z'
			/>
		</svg>
	);
};
