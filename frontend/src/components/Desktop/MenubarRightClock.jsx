import React from 'react';

import MenubarButtonAndDropdownMenu from './MenubarButtonAndDropdownMenu.jsx';
import MenubarButton from './MenubarButton.jsx';
import MenubarDropdownMenu from './MenubarDropdownMenu.jsx';
import MenubarDropdownMenuItem from './MenubarDropdownMenuItem.jsx';
import MenubarClock from './MenubarClock.jsx';

export default function MenubarRightClock({
	menubarButtonOnClick,
	dropdownMenuItemOnClick,
	noMouseEnter
}){
	return(
		<MenubarButtonAndDropdownMenu>
			<MenubarClock
				clockContainerId={'menubar-clock-container'}
				clockId={'menubar-clock'}
				menubarButtonOnClick={menubarButtonOnClick}
			>
				<MenubarDropdownMenu
					noMouseEnter={noMouseEnter}
					dropdownMenuId={'menubar-clock-dropdown-menu'}
				>
					<MenubarDropdownMenuItem
						dropdownMenuItemClassName={'dropdown-menu-item'}
						dropdownMenuItemId={'dropdown-menu-item-clock'}
					>
						<div className='menubar-dropdown-menu-item-clock-container'>
							<div className='day-name'></div>
							<div className='day-month-separator'>,</div>
							<div className='day-name-separator'>&nbsp;</div>
							<div className='month-name'></div>
							<div className='month-day-separator'>&nbsp;</div>
							<div className='day'>00</div>
							<div className='day-year-comma'>,</div>
							<div className='day-year-separator'>&nbsp;</div>
							<div className='year'>0000</div>
						</div>
					</MenubarDropdownMenuItem>
					<hr className='dropdown-menu-hr'/>
					<MenubarDropdownMenuItem
						dropdownMenuItemClassName={'dropdown-menu-item'}
						dropdownMenuItemId={'dropdown-menu-item-date-and-time-preferences'}
						dropdownMenuItemOnClick={dropdownMenuItemOnClick}
						dropdownMenuItemCheckmark={''}
						dropdownMenuItemText={'Open Date & Time Preferences...'}
						dropdownMenuItemShortcut={''}
					/>
				</MenubarDropdownMenu>
			</MenubarClock>
		</MenubarButtonAndDropdownMenu>
	);
};
