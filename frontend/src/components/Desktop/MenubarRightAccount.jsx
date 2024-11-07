import React, {useState, useContext} from 'react';

import {UserContext} from '../../contexts/UserContext.jsx';

import MenubarButtonAndDropdownMenu from './MenubarButtonAndDropdownMenu.jsx';
import MenubarButton from './MenubarButton.jsx';
import MenubarDropdownMenu from './MenubarDropdownMenu.jsx';
import MenubarDropdownMenuItem from './MenubarDropdownMenuItem.jsx';
import MenubarAccountName from './MenubarAccountName.jsx';

export default function MenubarRightAccount({
	menubarButtonOnClick,
	dropdownMenuItemOnClick,
	noMouseEnter
}){
	const {user, setUser}=useContext(UserContext);
	return(
		<MenubarButtonAndDropdownMenu>
			<MenubarAccountName
				menubarButtonContainerId={'menubar-account-icon-and-account-name-container'}
				menubarButtonId={'menubar-account-icon-and-account-name'}
				menubarButtonOnClick={menubarButtonOnClick}
			/>
			<MenubarDropdownMenu
				noMouseEnter={noMouseEnter}
				dropdownMenuId={'menubar-account-dropdown-menu'}
			>
				<MenubarDropdownMenuItem
					dropdownMenuItemClassName={'dropdown-menu-item'}
					dropdownMenuItemId={'dropdown-menu-item-account-name'}
					dropdownMenuItemCheckmark={''}
					dropdownMenuItemText={user.username}
					dropdownMenuItemShortcut={''}
				/>
				<hr className='dropdown-menu-hr'/>
				<MenubarDropdownMenuItem
					dropdownMenuItemClassName={'dropdown-menu-item'}
					dropdownMenuItemId={'dropdown-menu-item-account-preferences'}
					dropdownMenuItemOnClick={dropdownMenuItemOnClick}
					dropdownMenuItemCheckmark={''}
					dropdownMenuItemText={'Open Account Preferences...'}
					dropdownMenuItemShortcut={''}
				/>
			</MenubarDropdownMenu>
		</MenubarButtonAndDropdownMenu>
	);
};
