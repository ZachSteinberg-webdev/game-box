import React from 'react';

import MenubarDropdownMenuItem from './MenubarDropdownMenuItem.jsx';

export default function MenubarDropdownMenu({
	children,
	noMouseEnter,
	dropdownMenuId
}){
	return(
		<div
			className={`dropdown-menu ${noMouseEnter?noMouseEnter:''}`}
			id={dropdownMenuId}
		>
			{children}
		</div>
	);
};
