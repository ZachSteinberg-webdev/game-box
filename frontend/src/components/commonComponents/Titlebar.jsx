import React from 'react';

import TitlebarLefthandButtons from './TitlebarLefthandButtons.jsx';
import TitlebarTitle from './TitlebarTitle.jsx';
import TitlebarRighthandButton from './TitlebarRighthandButton.jsx';

export default function Titlebar({
	children,
	titlebarClassName
}){
	return(
		<div
			className={titlebarClassName}
		>
			{children}
		</div>
	);
};
