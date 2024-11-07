import React from 'react';

import MenubarButtonAndDropdownMenu from './MenubarButtonAndDropdownMenu.jsx';
import MenubarButton from './MenubarButton.jsx';
import MenubarDropdownMenu from './MenubarDropdownMenu.jsx';
import MenubarDropdownMenuItem from './MenubarDropdownMenuItem.jsx';

export default function MenubarLeftOtw({
	menubarButtonOnClick,
	menubarButtonOnMouseEnter,
	dropdownMenuItemOnClick
}){
	return(
		<>
			<MenubarButtonAndDropdownMenu
				menubarButtonAndDropdownMenuId={'otw-menubar-button-and-dropdown-menu-container-app'}
			>
				<MenubarButton
					menubarButtonContainerId={'app-button-container'}
					menubarButtonClassName={'menubar-button menubar-app-button'}
					menubarButtonId={'otw-app-button'}
					menubarButtonName={'appButton'}
					menubarButtonTextId={'app-button-text'}
					menubarButtonText={'Off The Wall'}
					menubarButtonOnClick={menubarButtonOnClick}
					menubarButtonOnMouseEnter={menubarButtonOnMouseEnter}
				/>
				<MenubarDropdownMenu
					dropdownMenuId={'otw-app-button-dropdown-menu'}
				>
					<MenubarDropdownMenuItem
						dropdownMenuItemClassName={'dropdown-menu-item'}
						dropdownMenuItemId={'otw-dropdown-menu-item-about-off-the-wall'}
						dropdownMenuItemCheckmark={''}
						dropdownMenuItemText={'About Off The Wall...'}
						dropdownMenuItemShortcut={''}
						dropdownMenuItemOnClick={dropdownMenuItemOnClick}
					/>
					<hr className='dropdown-menu-hr'/>
					<MenubarDropdownMenuItem
						dropdownMenuItemClassName={'dropdown-menu-item'}
						dropdownMenuItemId={'otw-dropdown-menu-item-off-the-wall-instructions'}
						dropdownMenuItemCheckmark={''}
						dropdownMenuItemText={'Instructions...'}
						dropdownMenuItemShortcut={'&#8997;I'}
						dropdownMenuItemOnClick={dropdownMenuItemOnClick}
					/>
					<MenubarDropdownMenuItem
						dropdownMenuItemClassName={'dropdown-menu-item'}
						dropdownMenuItemId={'otw-dropdown-menu-item-off-the-wall-result-history'}
						dropdownMenuItemCheckmark={''}
						dropdownMenuItemText={'Score History...'}
						dropdownMenuItemShortcut={'&#8997;H'}
						dropdownMenuItemOnClick={dropdownMenuItemOnClick}
					/>
					<hr className='dropdown-menu-hr'/>
					<MenubarDropdownMenuItem
						dropdownMenuItemClassName={'dropdown-menu-item'}
						dropdownMenuItemId={'otw-dropdown-menu-item-quit'}
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
					menubarButtonId={'otw-file-button'}
					menubarButtonName={'fileButton'}
					menubarButtonTextId={'file-button-text'}
					menubarButtonText={'File'}
					menubarButtonOnClick={menubarButtonOnClick}
					menubarButtonOnMouseEnter={menubarButtonOnMouseEnter}
				/>
				<MenubarDropdownMenu
					dropdownMenuId={'otw-file-button-dropdown-menu'}
				>
					<MenubarDropdownMenuItem
						dropdownMenuItemClassName={'dropdown-menu-item'}
						dropdownMenuItemId={'otw-dropdown-menu-item-pause'}
						dropdownMenuItemCheckmark={''}
						dropdownMenuItemText={'Pause Game...'}
						dropdownMenuItemShortcut={'&#8997;P'}
						dropdownMenuItemOnClick={dropdownMenuItemOnClick}
					/>
					<hr className='dropdown-menu-hr'/>
					<MenubarDropdownMenuItem
						dropdownMenuItemClassName={'dropdown-menu-item'}
						dropdownMenuItemId={'otw-dropdown-menu-item-close'}
						dropdownMenuItemCheckmark={''}
						dropdownMenuItemText={'Close Window'}
						dropdownMenuItemShortcut={'&#8997;W'}
						dropdownMenuItemOnClick={dropdownMenuItemOnClick}
					/>
				</MenubarDropdownMenu>
			</MenubarButtonAndDropdownMenu>
			<MenubarButtonAndDropdownMenu
				menubarButtonAndDropdownMenuId={'otw-menubar-button-and-dropdown-menu-container-edit'}
			>
				<MenubarButton
					menubarButtonContainerId={'otw-edit-button-container'}
					menubarButtonClassName={'menubar-button'}
					menubarButtonId={'otw-edit-button'}
					menubarButtonName={'editButton'}
					menubarButtonTextId={'edit-button-text'}
					menubarButtonText={'Edit'}
					menubarButtonOnClick={menubarButtonOnClick}
					menubarButtonOnMouseEnter={menubarButtonOnMouseEnter}
				/>
				<MenubarDropdownMenu
					dropdownMenuId={'otw-edit-button-dropdown-menu'}
				>
					<MenubarDropdownMenuItem
						dropdownMenuItemClassName={'dropdown-menu-item menu-item-greyed-out'}
						dropdownMenuItemId={'otw-dropdown-menu-item-undo'}
						dropdownMenuItemTitle={'This item is non-functional'}
						dropdownMenuItemCheckmark={''}
						dropdownMenuItemText={'Undo'}
						dropdownMenuItemShortcut={'&#8997;Z'}
					/>
					<MenubarDropdownMenuItem
						dropdownMenuItemClassName={'dropdown-menu-item menu-item-greyed-out'}
						dropdownMenuItemId={'otw-dropdown-menu-item-redo'}
						dropdownMenuItemTitle={'This item is non-functional'}
						dropdownMenuItemCheckmark={''}
						dropdownMenuItemText={'Redo'}
						dropdownMenuItemShortcut={'&#8997;Z'}
					/>
					<hr className='dropdown-menu-hr'/>
					<MenubarDropdownMenuItem
						dropdownMenuItemClassName={'dropdown-menu-item menu-item-greyed-out'}
						dropdownMenuItemId={'otw-dropdown-menu-item-cut'}
						dropdownMenuItemTitle={'This item is non-functional'}
						dropdownMenuItemCheckmark={''}
						dropdownMenuItemText={'Cut'}
						dropdownMenuItemShortcut={'&#8997;X'}
					/>
					<MenubarDropdownMenuItem
						dropdownMenuItemClassName={'dropdown-menu-item menu-item-greyed-out'}
						dropdownMenuItemId={'otw-dropdown-menu-item-copy'}
						dropdownMenuItemTitle={'This item is non-functional'}
						dropdownMenuItemCheckmark={''}
						dropdownMenuItemText={'Copy'}
						dropdownMenuItemShortcut={'&#8997;C'}
					/>
					<MenubarDropdownMenuItem
						dropdownMenuItemClassName={'dropdown-menu-item menu-item-greyed-out'}
						dropdownMenuItemId={'otw-dropdown-menu-item-paste'}
						dropdownMenuItemTitle={'This item is non-functional'}
						dropdownMenuItemCheckmark={''}
						dropdownMenuItemText={'Paste'}
						dropdownMenuItemShortcut={'&#8997;V'}
					/>
				</MenubarDropdownMenu>
			</MenubarButtonAndDropdownMenu>
			<MenubarButtonAndDropdownMenu
				menubarButtonAndDropdownMenuId={'otw-menubar-button-and-dropdown-menu-container-window'}
			>
				<MenubarButton
					menubarButtonContainerId={'otw-window-button-container'}
					menubarButtonClassName={'menubar-button'}
					menubarButtonId={'otw-window-button'}
					menubarButtonName={'windowButton'}
					menubarButtonTextId={'window-button-text'}
					menubarButtonText={'Window'}
					menubarButtonOnClick={menubarButtonOnClick}
					menubarButtonOnMouseEnter={menubarButtonOnMouseEnter}
				/>
				<MenubarDropdownMenu
					dropdownMenuId={'otw-window-button-dropdown-menu'}
				>
					<MenubarDropdownMenuItem
						dropdownMenuItemClassName={'dropdown-menu-item menu-item-greyed-out'}
						dropdownMenuItemId={'otw-dropdown-menu-item-minimize'}
						dropdownMenuItemCheckmark={''}
						dropdownMenuItemText={'Minimize'}
						dropdownMenuItemShortcut={'&#8997;M'}
					/>
					<MenubarDropdownMenuItem
						dropdownMenuItemClassName={'dropdown-menu-item'}
						dropdownMenuItemId={'otw-dropdown-menu-item-window-title'}
						dropdownMenuItemCheckmark={'&#x2714;'}
						dropdownMenuItemText={'Off The Wall'}
						dropdownMenuItemShortcut={''}
						dropdownMenuItemOnClick={dropdownMenuItemOnClick}
					/>
				</MenubarDropdownMenu>
			</MenubarButtonAndDropdownMenu>
		</>
	);
};
