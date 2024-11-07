import React from 'react';

export default function MenubarButtonAndDropdownMenu({
	children,
	menubarButtonAndDropdownMenuId
}){
	return(
		<div
			className='menubar-button-and-dropdown-menu-container'
			id={menubarButtonAndDropdownMenuId}
		>
			{children}
		</div>
	);
};
