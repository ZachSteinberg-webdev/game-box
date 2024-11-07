import React from 'react';

import ResizeIcon from '../Icons/ResizeIcon.jsx';

export default function ResizeHandle({
	resizeHandleClassName
}){
	return(
		<div
			className={resizeHandleClassName}
		>
			<ResizeIcon/>
		</div>
	);
};
