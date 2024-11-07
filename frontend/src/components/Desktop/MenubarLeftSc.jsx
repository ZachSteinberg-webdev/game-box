import React from 'react';

import MenubarButtonAndDropdownMenu from './MenubarButtonAndDropdownMenu.jsx';
import MenubarButton from './MenubarButton.jsx';
import MenubarDropdownMenu from './MenubarDropdownMenu.jsx';
import MenubarDropdownMenuItem from './MenubarDropdownMenuItem.jsx';

export default function MenubarLeftSc({
	menubarButtonOnClick,
	menubarButtonOnMouseEnter,
	dropdownMenuItemOnClick
}){
	return(
		<>
			<MenubarButtonAndDropdownMenu
				menubarButtonAndDropdownMenuId={'sc-menubar-button-and-dropdown-menu-container-app'}
			>
				<MenubarButton
					menubarButtonContainerId={'app-button-container'}
					menubarButtonClassName={'menubar-button menubar-app-button'}
					menubarButtonId={'sc-app-button'}
					menubarButtonName={'appButton'}
					menubarButtonTextId={'app-button-text'}
					menubarButtonText={'Speed Clicker'}
					menubarButtonOnClick={menubarButtonOnClick}
					menubarButtonOnMouseEnter={menubarButtonOnMouseEnter}
				/>
				<MenubarDropdownMenu
					dropdownMenuId={'sc-app-button-dropdown-menu'}
				>
					<MenubarDropdownMenuItem
						dropdownMenuItemClassName={'dropdown-menu-item'}
						dropdownMenuItemId={'sc-dropdown-menu-item-about-speed-clicker'}
						dropdownMenuItemCheckmark={''}
						dropdownMenuItemText={'About Speed Clicker...'}
						dropdownMenuItemShortcut={''}
						dropdownMenuItemOnClick={dropdownMenuItemOnClick}
					/>
					<hr className='dropdown-menu-hr'/>
					<MenubarDropdownMenuItem
						dropdownMenuItemClassName={'dropdown-menu-item'}
						dropdownMenuItemId={'sc-dropdown-menu-item-speed-clicker-instructions'}
						dropdownMenuItemCheckmark={''}
						dropdownMenuItemText={'Instructions...'}
						dropdownMenuItemShortcut={'&#8997;I'}
						dropdownMenuItemOnClick={dropdownMenuItemOnClick}
					/>
					<MenubarDropdownMenuItem
						dropdownMenuItemClassName={'dropdown-menu-item'}
						dropdownMenuItemId={'sc-dropdown-menu-item-speed-clicker-result-history'}
						dropdownMenuItemCheckmark={''}
						dropdownMenuItemText={'Score History...'}
						dropdownMenuItemShortcut={'&#8997;H'}
						dropdownMenuItemOnClick={dropdownMenuItemOnClick}
					/>
					<hr className='dropdown-menu-hr'/>
					<MenubarDropdownMenuItem
						dropdownMenuItemClassName={'dropdown-menu-item'}
						dropdownMenuItemId={'sc-dropdown-menu-item-quit'}
						dropdownMenuItemCheckmark={''}
						dropdownMenuItemText={'Quit'}
						dropdownMenuItemShortcut={'&#8997;Q'}
						dropdownMenuItemOnClick={dropdownMenuItemOnClick}
					/>
				</MenubarDropdownMenu>
			</MenubarButtonAndDropdownMenu>
			<MenubarButtonAndDropdownMenu
				menubarButtonAndDropdownMenuId={'menubar-button-and-dropdown-menu-container-file'}
			>
				<MenubarButton
					menubarButtonContainerId={'file-button-container'}
					menubarButtonClassName={'menubar-button'}
					menubarButtonId={'sc-file-button'}
					menubarButtonName={'fileButton'}
					menubarButtonTextId={'file-button-text'}
					menubarButtonText={'File'}
					menubarButtonOnClick={menubarButtonOnClick}
					menubarButtonOnMouseEnter={menubarButtonOnMouseEnter}
				/>
				<MenubarDropdownMenu
					dropdownMenuId={'sc-file-button-dropdown-menu'}
				>
					<MenubarDropdownMenuItem
						dropdownMenuItemClassName={'dropdown-menu-item'}
						dropdownMenuItemId={'sc-dropdown-menu-item-close'}
						dropdownMenuItemCheckmark={''}
						dropdownMenuItemText={'Close Window'}
						dropdownMenuItemShortcut={'&#8997;W'}
						dropdownMenuItemOnClick={dropdownMenuItemOnClick}
					/>
				</MenubarDropdownMenu>
			</MenubarButtonAndDropdownMenu>
			<MenubarButtonAndDropdownMenu
				menubarButtonAndDropdownMenuId={'sc-menubar-button-and-dropdown-menu-container-edit'}
			>
				<MenubarButton
					menubarButtonContainerId={'sc-edit-button-container'}
					menubarButtonClassName={'menubar-button'}
					menubarButtonId={'sc-edit-button'}
					menubarButtonName={'editButton'}
					menubarButtonTextId={'edit-button-text'}
					menubarButtonText={'Edit'}
					menubarButtonOnClick={menubarButtonOnClick}
					menubarButtonOnMouseEnter={menubarButtonOnMouseEnter}
				/>
				<MenubarDropdownMenu
					dropdownMenuId={'sc-edit-button-dropdown-menu'}
				>
					<MenubarDropdownMenuItem
						dropdownMenuItemClassName={'dropdown-menu-item menu-item-greyed-out'}
						dropdownMenuItemId={'sc-dropdown-menu-item-undo'}
						dropdownMenuItemTitle={'This item is non-functional'}
						dropdownMenuItemCheckmark={''}
						dropdownMenuItemText={'Undo'}
						dropdownMenuItemShortcut={'&#8997;Z'}
					/>
					<MenubarDropdownMenuItem
						dropdownMenuItemClassName={'dropdown-menu-item menu-item-greyed-out'}
						dropdownMenuItemId={'sc-dropdown-menu-item-redo'}
						dropdownMenuItemTitle={'This item is non-functional'}
						dropdownMenuItemCheckmark={''}
						dropdownMenuItemText={'Redo'}
						dropdownMenuItemShortcut={'&#8997;Z'}
					/>
					<hr className='dropdown-menu-hr'/>
					<MenubarDropdownMenuItem
						dropdownMenuItemClassName={'dropdown-menu-item menu-item-greyed-out'}
						dropdownMenuItemId={'sc-dropdown-menu-item-cut'}
						dropdownMenuItemTitle={'This item is non-functional'}
						dropdownMenuItemCheckmark={''}
						dropdownMenuItemText={'Cut'}
						dropdownMenuItemShortcut={'&#8997;X'}
					/>
					<MenubarDropdownMenuItem
						dropdownMenuItemClassName={'dropdown-menu-item menu-item-greyed-out'}
						dropdownMenuItemId={'sc-dropdown-menu-item-copy'}
						dropdownMenuItemTitle={'This item is non-functional'}
						dropdownMenuItemCheckmark={''}
						dropdownMenuItemText={'Copy'}
						dropdownMenuItemShortcut={'&#8997;C'}
					/>
					<MenubarDropdownMenuItem
						dropdownMenuItemClassName={'dropdown-menu-item menu-item-greyed-out'}
						dropdownMenuItemId={'sc-dropdown-menu-item-paste'}
						dropdownMenuItemTitle={'This item is non-functional'}
						dropdownMenuItemCheckmark={''}
						dropdownMenuItemText={'Paste'}
						dropdownMenuItemShortcut={'&#8997;V'}
					/>
				</MenubarDropdownMenu>
			</MenubarButtonAndDropdownMenu>
			<MenubarButtonAndDropdownMenu
				menubarButtonAndDropdownMenuId={'sc-menubar-button-and-dropdown-menu-container-window'}
			>
				<MenubarButton
					menubarButtonContainerId={'sc-window-button-container'}
					menubarButtonClassName={'menubar-button'}
					menubarButtonId={'sc-window-button'}
					menubarButtonName={'windowButton'}
					menubarButtonTextId={'window-button-text'}
					menubarButtonText={'Window'}
					menubarButtonOnClick={menubarButtonOnClick}
					menubarButtonOnMouseEnter={menubarButtonOnMouseEnter}
				/>
				<MenubarDropdownMenu
					dropdownMenuId={'sc-window-button-dropdown-menu'}
				>
					<MenubarDropdownMenuItem
						dropdownMenuItemClassName={'dropdown-menu-item'}
						dropdownMenuItemId={'sc-dropdown-menu-item-minimize'}
						dropdownMenuItemCheckmark={''}
						dropdownMenuItemText={'Minimize'}
						dropdownMenuItemShortcut={'&#8997;M'}
						dropdownMenuItemOnClick={dropdownMenuItemOnClick}
					/>
					<MenubarDropdownMenuItem
						dropdownMenuItemClassName={'dropdown-menu-item'}
						dropdownMenuItemId={'sc-dropdown-menu-item-window-title'}
						dropdownMenuItemCheckmark={'&#x2714;'}
						dropdownMenuItemText={'Speed Clicker'}
						dropdownMenuItemShortcut={''}
						dropdownMenuItemOnClick={dropdownMenuItemOnClick}
					/>
				</MenubarDropdownMenu>
			</MenubarButtonAndDropdownMenu>
		</>
	);
};
