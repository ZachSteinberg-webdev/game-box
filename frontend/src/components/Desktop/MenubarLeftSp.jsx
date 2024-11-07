import React from 'react';

import MenubarButtonAndDropdownMenu from './MenubarButtonAndDropdownMenu.jsx';
import MenubarButton from './MenubarButton.jsx';
import MenubarDropdownMenu from './MenubarDropdownMenu.jsx';
import MenubarDropdownMenuItem from './MenubarDropdownMenuItem.jsx';

export default function MenubarLeftSp({
	menubarButtonOnClick,
	menubarButtonOnMouseEnter,
	dropdownMenuItemOnClick
}){
	return(
		<>
			<MenubarButtonAndDropdownMenu
				menubarButtonAndDropdownMenuId={'menubar-button-and-dropdown-menu-container-app'}
			>
				<MenubarButton
					menubarButtonContainerId={'app-button-container'}
					menubarButtonClassName={'menubar-button menubar-app-button'}
					menubarButtonId={'app-button'}
					menubarButtonName={'appButton'}
					menubarButtonTextId={'app-button-text'}
					menubarButtonText={'System Preferences'}
					menubarButtonOnClick={menubarButtonOnClick}
					menubarButtonOnMouseEnter={menubarButtonOnMouseEnter}
				/>
				<MenubarDropdownMenu
					dropdownMenuId={'app-button-dropdown-menu'}
				>
					<MenubarDropdownMenuItem
						dropdownMenuItemClassName={'dropdown-menu-item menu-item-greyed-out'}
						dropdownMenuItemId={'dropdown-menu-item-about-sp'}
						dropdownMenuItemTitle={'This item is non-functional'}
						dropdownMenuItemCheckmark={''}
						dropdownMenuItemText={'About System Preferences...'}
						dropdownMenuItemShortcut={''}
					/>
					<hr className='dropdown-menu-hr'/>
					<MenubarDropdownMenuItem
						dropdownMenuItemClassName={'dropdown-menu-item'}
						dropdownMenuItemId={'dropdown-menu-item-quit-sp'}
						dropdownMenuItemOnClick={dropdownMenuItemOnClick}
						dropdownMenuItemCheckmark={''}
						dropdownMenuItemText={'Quit'}
						dropdownMenuItemShortcut={'&#8997;Q'}
					/>
				</MenubarDropdownMenu>
			</MenubarButtonAndDropdownMenu>
			<MenubarButtonAndDropdownMenu
				menubarButtonAndDropdownMenuId={'menubar-button-and-dropdown-menu-container-file'}
			>
				<MenubarButton
					menubarButtonContainerId={'file-button-container'}
					menubarButtonClassName={'menubar-button'}
					menubarButtonId={'file-button'}
					menubarButtonName={'fileButton'}
					menubarButtonTextId={'file-button-text'}
					menubarButtonText={'File'}
					menubarButtonOnClick={menubarButtonOnClick}
					menubarButtonOnMouseEnter={menubarButtonOnMouseEnter}
				/>
				<MenubarDropdownMenu
					dropdownMenuId={'file-button-dropdown-menu'}
				>
					<MenubarDropdownMenuItem
						dropdownMenuItemClassName={'dropdown-menu-item'}
						dropdownMenuItemId={'dropdown-menu-item-close-sp'}
						dropdownMenuItemOnClick={dropdownMenuItemOnClick}
						dropdownMenuItemCheckmark={''}
						dropdownMenuItemText={'Close Window'}
						dropdownMenuItemShortcut={'&#8997;W'}
					/>
				</MenubarDropdownMenu>
			</MenubarButtonAndDropdownMenu>
			<MenubarButtonAndDropdownMenu
				menubarButtonAndDropdownMenuId={'menubar-button-and-dropdown-menu-container-edit'}
			>
				<MenubarButton
					menubarButtonContainerId={'edit-button-container'}
					menubarButtonClassName={'menubar-button'}
					menubarButtonId={'edit-button'}
					menubarButtonName={'editButton'}
					menubarButtonTextId={'edit-button-text'}
					menubarButtonText={'Edit'}
					menubarButtonOnClick={menubarButtonOnClick}
					menubarButtonOnMouseEnter={menubarButtonOnMouseEnter}
				/>
				<MenubarDropdownMenu
					dropdownMenuId={'edit-button-dropdown-menu'}
				>
					<MenubarDropdownMenuItem
						dropdownMenuItemClassName={'dropdown-menu-item menu-item-greyed-out'}
						dropdownMenuItemId={'dropdown-menu-item-undo'}
						dropdownMenuItemTitle={'This item is non-functional'}
						dropdownMenuItemCheckmark={''}
						dropdownMenuItemText={'Undo'}
						dropdownMenuItemShortcut={'&#8997;Z'}
					/>
					<MenubarDropdownMenuItem
						dropdownMenuItemClassName={'dropdown-menu-item menu-item-greyed-out'}
						dropdownMenuItemId={'dropdown-menu-item-redo'}
						dropdownMenuItemTitle={'This item is non-functional'}
						dropdownMenuItemCheckmark={''}
						dropdownMenuItemText={'Redo'}
						dropdownMenuItemShortcut={'&#8997;Z'}
					/>
					<hr className='dropdown-menu-hr'/>
					<MenubarDropdownMenuItem
						dropdownMenuItemClassName={'dropdown-menu-item menu-item-greyed-out'}
						dropdownMenuItemId={'dropdown-menu-item-cut'}
						dropdownMenuItemTitle={'This item is non-functional'}
						dropdownMenuItemCheckmark={''}
						dropdownMenuItemText={'Cut'}
						dropdownMenuItemShortcut={'&#8997;X'}
					/>
					<MenubarDropdownMenuItem
						dropdownMenuItemClassName={'dropdown-menu-item menu-item-greyed-out'}
						dropdownMenuItemId={'dropdown-menu-item-copy'}
						dropdownMenuItemTitle={'This item is non-functional'}
						dropdownMenuItemCheckmark={''}
						dropdownMenuItemText={'Copy'}
						dropdownMenuItemShortcut={'&#8997;C'}
					/>
					<MenubarDropdownMenuItem
						dropdownMenuItemClassName={'dropdown-menu-item menu-item-greyed-out'}
						dropdownMenuItemId={'dropdown-menu-item-paste'}
						dropdownMenuItemTitle={'This item is non-functional'}
						dropdownMenuItemCheckmark={''}
						dropdownMenuItemText={'Paste'}
						dropdownMenuItemShortcut={'&#8997;V'}
					/>
				</MenubarDropdownMenu>
			</MenubarButtonAndDropdownMenu>
			<MenubarButtonAndDropdownMenu
				menubarButtonAndDropdownMenuId={'menubar-button-and-dropdown-menu-container-window'}
			>
				<MenubarButton
					menubarButtonContainerId={'window-button-container'}
					menubarButtonClassName={'menubar-button'}
					menubarButtonId={'window-button'}
					menubarButtonName={'windowButton'}
					menubarButtonTextId={'window-button-text'}
					menubarButtonText={'Window'}
					menubarButtonOnClick={menubarButtonOnClick}
					menubarButtonOnMouseEnter={menubarButtonOnMouseEnter}
				/>
				<MenubarDropdownMenu
					dropdownMenuId={'window-button-dropdown-menu'}
				>
					<MenubarDropdownMenuItem
						dropdownMenuItemClassName={'dropdown-menu-item'}
						dropdownMenuItemId={'sp-dropdown-menu-item-minimize'}
						dropdownMenuItemOnClick={dropdownMenuItemOnClick}
						dropdownMenuItemCheckmark={''}
						dropdownMenuItemText={'Minimize'}
						dropdownMenuItemShortcut={'&#8997;M'}
					/>
					<MenubarDropdownMenuItem
						dropdownMenuItemClassName={'dropdown-menu-item'}
						dropdownMenuItemId={'sp-dropdown-menu-item-window-title'}
						dropdownMenuItemCheckmark={'&#x2714;'}
						dropdownMenuItemText={'System Preferences'}
						dropdownMenuItemShortcut={''}
						dropdownMenuItemOnClick={dropdownMenuItemOnClick}
					/>
				</MenubarDropdownMenu>
			</MenubarButtonAndDropdownMenu>
		</>
	);
};
