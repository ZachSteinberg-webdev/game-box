import React from 'react';

import MenubarButtonAndDropdownMenu from './MenubarButtonAndDropdownMenu.jsx';
import MenubarButton from './MenubarButton.jsx';
import MenubarDropdownMenu from './MenubarDropdownMenu.jsx';
import MenubarDropdownMenuItem from './MenubarDropdownMenuItem.jsx';

export default function MenubarLeftPearMenu({
	menubarButtonOnClick,
	menubarButtonOnMouseEnter,
	dropdownMenuItemOnClick
}){
	return(
		<MenubarButtonAndDropdownMenu
			menubarButtonAndDropdownMenuId={'menubar-button-and-dropdown-menu-container-pear'}
		>
			<MenubarButton
				menubarButtonContainerId={'pear-button-container'}
				menubarButtonClassName={'menubar-button'}
				menubarButtonId={'pear-button'}
				menubarButtonName={'pearButton'}
				menubarButtonTextId={'pear-button-text'}
				menubarButtonText={''}
				menubarButtonOnClick={menubarButtonOnClick}
				menubarButtonOnMouseEnter={menubarButtonOnMouseEnter}
			/>
			<MenubarDropdownMenu
				dropdownMenuId={'pear-button-dropdown-menu'}
			>
				<MenubarDropdownMenuItem
					dropdownMenuItemClassName={'dropdown-menu-item'}
					dropdownMenuItemId={'dropdown-menu-item-about-system'}
					dropdownMenuItemOnClick={dropdownMenuItemOnClick}
					dropdownMenuItemCheckmark={''}
					dropdownMenuItemText={'About This Mock OS'}
					dropdownMenuItemShortcut={''}
				/>
				<hr className='dropdown-menu-hr'/>
				<MenubarDropdownMenuItem
					dropdownMenuItemClassName={'dropdown-menu-item'}
					dropdownMenuItemId={'dropdown-menu-item-system-preferences'}
					dropdownMenuItemOnClick={dropdownMenuItemOnClick}
					dropdownMenuItemCheckmark={''}
					dropdownMenuItemText={'System Preferences...'}
					dropdownMenuItemShortcut={''}
				/>
				<hr className='dropdown-menu-hr'/>
				<MenubarDropdownMenuItem
					dropdownMenuItemClassName={'dropdown-menu-item'}
					dropdownMenuItemId={'dropdown-menu-item-force-quit'}
					dropdownMenuItemOnClick={dropdownMenuItemOnClick}
					dropdownMenuItemCheckmark={''}
					dropdownMenuItemText={'Force Quit...'}
					dropdownMenuItemShortcut={''}
				/>
				<hr className='dropdown-menu-hr'/>
				<MenubarDropdownMenuItem
					dropdownMenuItemClassName={'dropdown-menu-item'}
					dropdownMenuItemId={'dropdown-menu-item-computer-sleep'}
					dropdownMenuItemOnClick={dropdownMenuItemOnClick}
					dropdownMenuItemCheckmark={''}
					dropdownMenuItemText={'Sleep'}
					dropdownMenuItemShortcut={''}
				/>
				<MenubarDropdownMenuItem
					dropdownMenuItemClassName={'dropdown-menu-item'}
					dropdownMenuItemId={'dropdown-menu-item-computer-restart'}
					dropdownMenuItemOnClick={dropdownMenuItemOnClick}
					dropdownMenuItemCheckmark={''}
					dropdownMenuItemText={'Restart...'}
					dropdownMenuItemShortcut={''}
				/>
				<MenubarDropdownMenuItem
					dropdownMenuItemClassName={'dropdown-menu-item'}
					dropdownMenuItemId={'dropdown-menu-item-computer-shut-down'}
					dropdownMenuItemOnClick={dropdownMenuItemOnClick}
					dropdownMenuItemCheckmark={''}
					dropdownMenuItemText={'Shut Down...'}
					dropdownMenuItemShortcut={''}
				/>
				<hr className='dropdown-menu-hr'/>
				<MenubarDropdownMenuItem
					dropdownMenuItemClassName={'dropdown-menu-item'}
					dropdownMenuItemId={'dropdown-menu-item-lock-screen'}
					dropdownMenuItemOnClick={dropdownMenuItemOnClick}
					dropdownMenuItemCheckmark={''}
					dropdownMenuItemText={'Lock Screen'}
					dropdownMenuItemShortcut={''}
				/>
				<MenubarDropdownMenuItem
					dropdownMenuItemClassName={'dropdown-menu-item'}
					dropdownMenuItemId={'dropdown-menu-item-log-out'}
					dropdownMenuItemOnClick={dropdownMenuItemOnClick}
					dropdownMenuItemCheckmark={''}
					dropdownMenuItemText={'Log Out...'}
					dropdownMenuItemShortcut={''}
				/>
			</MenubarDropdownMenu>
		</MenubarButtonAndDropdownMenu>
	);
};
