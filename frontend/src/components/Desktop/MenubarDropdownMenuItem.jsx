import React from 'react';

export default function MenubarDropdownMenuItem({
	children,
	dropdownMenuItemClassName,
	dropdownMenuItemId,
	dropdownMenuItemTitle,
	dropdownMenuItemOnClick,
	dropdownMenuItemCheckmark,
	dropdownMenuItemText,
	dropdownMenuItemShortcut
}){
	return(
		<div
			className={dropdownMenuItemClassName}
			id={dropdownMenuItemId}
			title={dropdownMenuItemTitle}
			onClick={dropdownMenuItemOnClick}
		>
			<div
				className='menu-checkmark'
				dangerouslySetInnerHTML={{__html: dropdownMenuItemCheckmark}}
			>
			</div>
			<div
				className='menu-item'>{dropdownMenuItemText}
			</div>
			{children}
			<div
				className='menu-shortcut'
				dangerouslySetInnerHTML={{__html: dropdownMenuItemShortcut}}
			>
			</div>
		</div>
	);
};
