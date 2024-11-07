import React, {useEffect} from 'react';

import MenubarLeftContainer from './MenubarLeftContainer.jsx';
import MenubarButtonAndDropdownMenu from './MenubarButtonAndDropdownMenu.jsx';
import MenubarButton from './MenubarButton.jsx';
import MenubarDropdownMenu from './MenubarDropdownMenu.jsx';
import MenubarDropdownMenuItem from './MenubarDropdownMenuItem.jsx';
import MenubarRightContainer from './MenubarRightContainer.jsx';
import MenubarClock from './MenubarClock.jsx';

import useClockSetupOnLoad from '../customHooks/helperFunctions/useClockSetupOnLoad.jsx';
import useModalOpen from '../customHooks/helperFunctions/useModalOpen.jsx';
import useWindowClose from '../customHooks/helperFunctions/useWindowClose.jsx';
import useWindowMinimize from '../customHooks/helperFunctions/useWindowMinimize.jsx';

import '../css/Menubar.css';

export default function Menubar({
	setModalAboutSystemOpen,
	setModalAboutSystemOpenShowClass,
	setModalAboutReactionTimeTestOpen,
	setModalAboutReactionTimeTestOpenShowClass,
	setModalRttRestartConfirmationOpen,
	setModalRttRestartConfirmationOpenShowClass,
	modalRttContainerOpen,
	setModalRttContainerOpen,
	setModalRttContainerOpenShowClass

}){
// React event handlers ----------------------------------------------------------------
	const handleMenubarButtonClick=(e)=>{
		console.log('handleMenubarButtonClick target', e.target);
		const button=e.target;
		if(!button.parentElement.nextElementSibling.classList.contains('dropdown-menu-in-use')){
			button.parentElement.nextElementSibling.classList.add('dropdown-menu-in-use');
			button.style.color = 'white';
			button.style.backgroundColor = '#0251CC';
		}else{
			button.parentElement.nextElementSibling.classList.remove('dropdown-menu-in-use');
			button.style.color = 'black';
			button.style.backgroundColor = 'transparent';
		};
	};

	const handleMenubarButtonMouseEnter=(e)=>{
		// let isADropdownMenuShown=false;
		// let associatedMenubarButton=undefined;
		console.log('In handleMenubarButtonMouseEnter block');
		let shownDropdownMenu=undefined;
		const allDropdownMenus=document.querySelectorAll('.dropdown-menu');
		allDropdownMenus.forEach((dropdownMenu, i)=>{
			if(dropdownMenu.classList.contains("dropdown-menu-in-use")){
				shownDropdownMenu=dropdownMenu;
				// isADropdownMenuShown=true;
				// associatedMenubarButton=dropdownMenu.previousElementSibling.firstElementChild;
			};
		});
		if(shownDropdownMenu && e.target!==shownDropdownMenu){
			shownDropdownMenu.classList.remove('dropdown-menu-in-use');
			shownDropdownMenu.parentElement.firstElementChild.firstElementChild.style.color='black';
			shownDropdownMenu.parentElement.firstElementChild.firstElementChild.style.backgroundColor='transparent';
			e.target.parentElement.nextElementSibling.classList.add('dropdown-menu-in-use');
			e.target.style.color = 'white';
			e.target.style.backgroundColor = '#0251CC';
		};
	}
	// const handleMenuItemClick=(e)=>{useHandleMenuItemClick(e)}
	const handleMenuItemClick=(e)=>{
		console.log(e.target);
		e.target.parentElement.classList.remove('dropdown-menu-in-use');
		e.target.parentElement.previousElementSibling.children[0].style.color = 'black';
		e.target.parentElement.previousElementSibling.children[0].style.backgroundColor = 'transparent';
		if(e.target.id==="dropdown-menu-item-about-system"){
			useModalOpen(setModalAboutSystemOpen, setModalAboutSystemOpenShowClass, 'about-system-container-in-use');
		};
		if(e.target.id==="dropdown-menu-item-about-reaction-time-test"){
			useModalOpen(setModalAboutReactionTimeTestOpen, setModalAboutReactionTimeTestOpenShowClass, 'about-reaction-time-test-container-in-use');
		};
		if(e.target.id==="dropdown-menu-item-quit"){
			useWindowClose(e, setModalRttContainerOpen, setModalRttContainerOpenShowClass);
		}
		if(e.target.id==="dropdown-menu-item-restart"){
			useModalOpen(setModalRttRestartConfirmationOpen, setModalRttRestartConfirmationOpenShowClass, 'rtt-restart-confirmation-container-in-use');
		};
		if(e.target.id==="dropdown-menu-item-close"){
			useWindowClose(e, setModalRttContainerOpen, setModalRttContainerOpenShowClass);
		};
		if(e.target.id==="dropdown-menu-item-minimize"){
			useWindowMinimize(e);
		};
	};

	// Event handlers
		// Menubar button mouseover
	const menubarButtonMouseoverHandlerWrapper = (element)=>{
		return function menubarButtonMouseoverHandler(event){
			let isADropdownMenuShown = false;
			let associatedMenubarButton = undefined;
			allDropdownMenus.forEach((item)=>{
				if(item.classList.contains("dropdown-menu-in-use")){
					isADropdownMenuShown = true;
					associatedMenubarButton = item.previousElementSibling.firstElementChild;
				};
			});
			if(isADropdownMenuShown===true){
				if(element!==associatedMenubarButton){
					element.click();
				};
			};
		};
	};

	useEffect(()=>{
		useClockSetupOnLoad();
	},[]);
	return(
		<>
			<div className="menubar-container">
				{!modalRttContainerOpen &&
					<MenubarLeftContainer
					menubarLeftContainerId={'menubar-left-container-desktop'}
					>
						<MenubarButtonAndDropdownMenu
							menubarButtonAndDropdownMenuId={'menubar-button-and-dropdown-menu-container-pear'}
						>
							<MenubarButton
								menubarButtonContainerId={'pear-button-container'}
								menubarButtonId={'pear-button'}
								menubarButtonName={'pearButton'}
								menubarButtonTextId={'pear-button-text'}
								menubarButtonText={''}
								menubarButtonOnClick={handleMenubarButtonClick}
								menubarButtonOnMouseEnter={handleMenubarButtonMouseEnter}
							/>
							<MenubarDropdownMenu
								dropdownMenuId={'pear-button-dropdown-menu'}
							>
								<MenubarDropdownMenuItem
									dropdownMenuItemClassName={'dropdown-menu-item'}
									dropdownMenuItemId={'dropdown-menu-item-about-system'}
									dropdownMenuItemOnClick={handleMenuItemClick}
									dropdownMenuItemCheckmark={''}
									dropdownMenuItemText={'About This Mock OS'}
									dropdownMenuItemShortcut={''}
								/>
								<hr className="dropdown-menu-hr"/>
								<MenubarDropdownMenuItem
									dropdownMenuItemClassName={'dropdown-menu-item menu-item-greyed-out'}
									dropdownMenuItemId={'dropdown-menu-item-system-settings'}
									dropdownMenuItemTitle={'This item is non-functional'}
									dropdownMenuItemCheckmark={''}
									dropdownMenuItemText={'System Preferences...'}
									dropdownMenuItemShortcut={''}
								/>
								<hr className="dropdown-menu-hr"/>
								<MenubarDropdownMenuItem
									dropdownMenuItemClassName={'dropdown-menu-item menu-item-greyed-out'}
									dropdownMenuItemId={'dropdown-menu-item-force-quit'}
									dropdownMenuItemTitle={'This item is non-functional'}
									dropdownMenuItemCheckmark={''}
									dropdownMenuItemText={'Force Quit...'}
									dropdownMenuItemShortcut={''}
								/>
								<hr className="dropdown-menu-hr"/>
								<MenubarDropdownMenuItem
									dropdownMenuItemClassName={'dropdown-menu-item menu-item-greyed-out'}
									dropdownMenuItemId={'dropdown-menu-item-computer-sleep'}
									dropdownMenuItemTitle={'This item is non-functional'}
									dropdownMenuItemCheckmark={''}
									dropdownMenuItemText={'Sleep'}
									dropdownMenuItemShortcut={''}
								/>
								<MenubarDropdownMenuItem
									dropdownMenuItemClassName={'dropdown-menu-item menu-item-greyed-out'}
									dropdownMenuItemId={'dropdown-menu-item-computer-restart'}
									dropdownMenuItemTitle={'This item is non-functional'}
									dropdownMenuItemCheckmark={''}
									dropdownMenuItemText={'Restart...'}
									dropdownMenuItemShortcut={''}
								/>
								<MenubarDropdownMenuItem
									dropdownMenuItemClassName={'dropdown-menu-item menu-item-greyed-out'}
									dropdownMenuItemId={'dropdown-menu-item-computer-shut-down'}
									dropdownMenuItemTitle={'This item is non-functional'}
									dropdownMenuItemCheckmark={''}
									dropdownMenuItemText={'Shut Down...'}
									dropdownMenuItemShortcut={''}
								/>
								<hr className="dropdown-menu-hr"/>
								<MenubarDropdownMenuItem
									dropdownMenuItemClassName={'dropdown-menu-item menu-item-greyed-out'}
									dropdownMenuItemId={'dropdown-menu-item-lock-screen'}
									dropdownMenuItemTitle={'This item is non-functional'}
									dropdownMenuItemCheckmark={''}
									dropdownMenuItemText={'Lock Screen'}
									dropdownMenuItemShortcut={''}
								/>
								<MenubarDropdownMenuItem
									dropdownMenuItemClassName={'dropdown-menu-item'}
									dropdownMenuItemId={'dropdown-menu-item-log-out'}
									dropdownMenuItemCheckmark={''}
									dropdownMenuItemText={'Log Out...'}
									dropdownMenuItemShortcut={''}
									dropdownMenuItemOnClick={handleMenuItemClick}
								/>
							</MenubarDropdownMenu>
						</MenubarButtonAndDropdownMenu>
						<MenubarButtonAndDropdownMenu
							menubarButtonAndDropdownMenuId={'menubar-button-and-dropdown-menu-container-app'}
						>
							<MenubarButton
								menubarButtonContainerId={'app-button-container'}
								menubarButtonId={'app-button'}
								menubarButtonName={'appButton'}
								menubarButtonTextId={'app-button-text'}
								menubarButtonText={'Desktop'}
								menubarButtonOnClick={handleMenubarButtonClick}
								menubarButtonOnMouseEnter={handleMenubarButtonMouseEnter}
							/>
							<MenubarDropdownMenu
								dropdownMenuId={'app-button-dropdown-menu'}
							>
								<MenubarDropdownMenuItem
									dropdownMenuItemClassName={'dropdown-menu-item'}
									dropdownMenuItemId={'dropdown-menu-item-about-reaction-time-test'}
									dropdownMenuItemCheckmark={''}
									dropdownMenuItemText={'About Desktop...'}
									dropdownMenuItemShortcut={''}
									dropdownMenuItemOnClick={handleMenuItemClick}
								/>
								<hr className="dropdown-menu-hr"/>
								<MenubarDropdownMenuItem
									dropdownMenuItemClassName={'dropdown-menu-item menu-item-greyed-out'}
									dropdownMenuItemId={'dropdown-menu-item-quit'}
									dropdownMenuItemTitle={'This item is non-functional'}
									dropdownMenuItemCheckmark={''}
									dropdownMenuItemText={'Quit'}
									dropdownMenuItemShortcut={''}
								/>
							</MenubarDropdownMenu>
						</MenubarButtonAndDropdownMenu>
						<MenubarButtonAndDropdownMenu
							menubarButtonAndDropdownMenuId={'menubar-button-and-dropdown-menu-container-file'}
						>
							<MenubarButton
								menubarButtonContainerId={'file-button-container'}
								menubarButtonId={'file-button'}
								menubarButtonName={'fileButton'}
								menubarButtonTextId={'file-button-text'}
								menubarButtonText={'File'}
								menubarButtonOnClick={handleMenubarButtonClick}
								menubarButtonOnMouseEnter={handleMenubarButtonMouseEnter}
							/>
							<MenubarDropdownMenu
								dropdownMenuId={'file-button-dropdown-menu'}
							>
								<MenubarDropdownMenuItem
									dropdownMenuItemClassName={'dropdown-menu-item menu-item-greyed-out'}
									dropdownMenuItemId={'dropdown-menu-item-restart'}
									dropdownMenuItemTitle={'This item is non-functional'}
									dropdownMenuItemCheckmark={''}
									dropdownMenuItemText={'New Window...'}
									dropdownMenuItemShortcut={'&#8997;N'}
								/>
								<hr className="dropdown-menu-hr"/>
								<MenubarDropdownMenuItem
									dropdownMenuItemClassName={'dropdown-menu-item menu-item-greyed-out'}
									dropdownMenuItemId={'dropdown-menu-item-close'}
									dropdownMenuItemTitle={'This item is non-functional'}
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
								menubarButtonId={'edit-button'}
								menubarButtonName={'editButton'}
								menubarButtonTextId={'edit-button-text'}
								menubarButtonText={'Edit'}
								menubarButtonOnClick={handleMenubarButtonClick}
								menubarButtonOnMouseEnter={handleMenubarButtonMouseEnter}
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
								<hr className="dropdown-menu-hr"/>
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
								menubarButtonId={'window-button'}
								menubarButtonName={'windowButton'}
								menubarButtonTextId={'window-button-text'}
								menubarButtonText={'Window'}
								menubarButtonOnClick={handleMenubarButtonClick}
								menubarButtonOnMouseEnter={handleMenubarButtonMouseEnter}
							/>
							<MenubarDropdownMenu
								dropdownMenuId={'window-button-dropdown-menu'}
							>
								<MenubarDropdownMenuItem
									dropdownMenuItemClassName={'dropdown-menu-item menu-item-greyed-out'}
									dropdownMenuItemId={'dropdown-menu-item-minimize'}
									dropdownMenuItemTitle={'This item is non-functional'}
									dropdownMenuItemCheckmark={''}
									dropdownMenuItemText={'Minimize'}
									dropdownMenuItemShortcut={'&#8997;M'}
								/>
								<MenubarDropdownMenuItem
									dropdownMenuItemClassName={'dropdown-menu-item'}
									dropdownMenuItemId={'dropdown-menu-item-window-title'}
									dropdownMenuItemCheckmark={'&#x2714;'}
									dropdownMenuItemText={'Desktop'}
									dropdownMenuItemShortcut={''}
								/>
							</MenubarDropdownMenu>
						</MenubarButtonAndDropdownMenu>
					</MenubarLeftContainer>
				}
				{modalRttContainerOpen &&
					<MenubarLeftContainer
					menubarLeftContainerId={'menubar-left-container-rtt'}
					>
						<MenubarButtonAndDropdownMenu
							menubarButtonAndDropdownMenuId={'menubar-button-and-dropdown-menu-container-pear'}
						>
							<MenubarButton
								menubarButtonContainerId={'pear-button-container'}
								menubarButtonId={'pear-button'}
								menubarButtonName={'pearButton'}
								menubarButtonTextId={'pear-button-text'}
								menubarButtonText={''}
								menubarButtonOnClick={handleMenubarButtonClick}
								menubarButtonOnMouseEnter={handleMenubarButtonMouseEnter}
							/>
							<MenubarDropdownMenu
								dropdownMenuId={'pear-button-dropdown-menu'}
							>
								<MenubarDropdownMenuItem
									dropdownMenuItemClassName={'dropdown-menu-item'}
									dropdownMenuItemId={'dropdown-menu-item-about-system'}
									dropdownMenuItemOnClick={handleMenuItemClick}
									dropdownMenuItemCheckmark={''}
									dropdownMenuItemText={'About This Mock OS'}
									dropdownMenuItemShortcut={''}
								/>
								<hr className="dropdown-menu-hr"/>
								<MenubarDropdownMenuItem
									dropdownMenuItemClassName={'dropdown-menu-item menu-item-greyed-out'}
									dropdownMenuItemId={'dropdown-menu-item-system-settings'}
									dropdownMenuItemTitle={'This item is non-functional'}
									dropdownMenuItemCheckmark={''}
									dropdownMenuItemText={'System Preferences...'}
									dropdownMenuItemShortcut={''}
								/>
								<hr className="dropdown-menu-hr"/>
								<MenubarDropdownMenuItem
									dropdownMenuItemClassName={'dropdown-menu-item menu-item-greyed-out'}
									dropdownMenuItemId={'dropdown-menu-item-force-quit'}
									dropdownMenuItemTitle={'This item is non-functional'}
									dropdownMenuItemCheckmark={''}
									dropdownMenuItemText={'Force Quit...'}
									dropdownMenuItemShortcut={''}
								/>
								<hr className="dropdown-menu-hr"/>
								<MenubarDropdownMenuItem
									dropdownMenuItemClassName={'dropdown-menu-item menu-item-greyed-out'}
									dropdownMenuItemId={'dropdown-menu-item-computer-sleep'}
									dropdownMenuItemTitle={'This item is non-functional'}
									dropdownMenuItemCheckmark={''}
									dropdownMenuItemText={'Sleep'}
									dropdownMenuItemShortcut={''}
								/>
								<MenubarDropdownMenuItem
									dropdownMenuItemClassName={'dropdown-menu-item menu-item-greyed-out'}
									dropdownMenuItemId={'dropdown-menu-item-computer-restart'}
									dropdownMenuItemTitle={'This item is non-functional'}
									dropdownMenuItemCheckmark={''}
									dropdownMenuItemText={'Restart...'}
									dropdownMenuItemShortcut={''}
								/>
								<MenubarDropdownMenuItem
									dropdownMenuItemClassName={'dropdown-menu-item menu-item-greyed-out'}
									dropdownMenuItemId={'dropdown-menu-item-computer-shut-down'}
									dropdownMenuItemTitle={'This item is non-functional'}
									dropdownMenuItemCheckmark={''}
									dropdownMenuItemText={'Shut Down...'}
									dropdownMenuItemShortcut={''}
								/>
								<hr className="dropdown-menu-hr"/>
								<MenubarDropdownMenuItem
									dropdownMenuItemClassName={'dropdown-menu-item menu-item-greyed-out'}
									dropdownMenuItemId={'dropdown-menu-item-lock-screen'}
									dropdownMenuItemTitle={'This item is non-functional'}
									dropdownMenuItemCheckmark={''}
									dropdownMenuItemText={'Lock Screen'}
									dropdownMenuItemShortcut={''}
								/>
								<MenubarDropdownMenuItem
									dropdownMenuItemClassName={'dropdown-menu-item'}
									dropdownMenuItemId={'dropdown-menu-item-log-out'}
									dropdownMenuItemCheckmark={''}
									dropdownMenuItemText={'Log Out...'}
									dropdownMenuItemShortcut={''}
									dropdownMenuItemOnClick={handleMenuItemClick}
								/>
							</MenubarDropdownMenu>
						</MenubarButtonAndDropdownMenu>
						<MenubarButtonAndDropdownMenu
							menubarButtonAndDropdownMenuId={'menubar-button-and-dropdown-menu-container-app'}
						>
							<MenubarButton
								menubarButtonContainerId={'app-button-container'}
								menubarButtonId={'app-button'}
								menubarButtonName={'appButton'}
								menubarButtonTextId={'app-button-text'}
								menubarButtonText={'Reaction Time Test'}
								menubarButtonOnClick={handleMenubarButtonClick}
								menubarButtonOnMouseEnter={handleMenubarButtonMouseEnter}
							/>
							<MenubarDropdownMenu
								dropdownMenuId={'app-button-dropdown-menu'}
							>
								<MenubarDropdownMenuItem
									dropdownMenuItemClassName={'dropdown-menu-item'}
									dropdownMenuItemId={'dropdown-menu-item-about-reaction-time-test'}
									dropdownMenuItemCheckmark={''}
									dropdownMenuItemText={'About Reaction Time Test...'}
									dropdownMenuItemShortcut={''}
									dropdownMenuItemOnClick={handleMenuItemClick}
								/>
								<hr className="dropdown-menu-hr"/>
								<MenubarDropdownMenuItem
									dropdownMenuItemClassName={'dropdown-menu-item'}
									dropdownMenuItemId={'dropdown-menu-item-quit'}
									dropdownMenuItemCheckmark={''}
									dropdownMenuItemText={'Quit'}
									dropdownMenuItemShortcut={'&#8997;Q'}
									dropdownMenuItemOnClick={handleMenuItemClick}
								/>
							</MenubarDropdownMenu>
						</MenubarButtonAndDropdownMenu>
						<MenubarButtonAndDropdownMenu
							menubarButtonAndDropdownMenuId={'menubar-button-and-dropdown-menu-container-file'}
						>
							<MenubarButton
								menubarButtonContainerId={'file-button-container'}
								menubarButtonId={'file-button'}
								menubarButtonName={'fileButton'}
								menubarButtonTextId={'file-button-text'}
								menubarButtonText={'File'}
								menubarButtonOnClick={handleMenubarButtonClick}
								menubarButtonOnMouseEnter={handleMenubarButtonMouseEnter}
							/>
							<MenubarDropdownMenu
								dropdownMenuId={'file-button-dropdown-menu'}
							>
								<MenubarDropdownMenuItem
									dropdownMenuItemClassName={'dropdown-menu-item'}
									dropdownMenuItemId={'dropdown-menu-item-restart'}
									dropdownMenuItemCheckmark={''}
									dropdownMenuItemText={'New Test...'}
									dropdownMenuItemShortcut={'&#8997;N'}
									dropdownMenuItemOnClick={handleMenuItemClick}
								/>
								<hr className="dropdown-menu-hr"/>
								<MenubarDropdownMenuItem
									dropdownMenuItemClassName={'dropdown-menu-item'}
									dropdownMenuItemId={'dropdown-menu-item-close'}
									dropdownMenuItemCheckmark={''}
									dropdownMenuItemText={'Close Window'}
									dropdownMenuItemShortcut={'&#8997;W'}
									dropdownMenuItemOnClick={handleMenuItemClick}
								/>
							</MenubarDropdownMenu>
						</MenubarButtonAndDropdownMenu>
						<MenubarButtonAndDropdownMenu
							menubarButtonAndDropdownMenuId={'menubar-button-and-dropdown-menu-container-edit'}
						>
							<MenubarButton
								menubarButtonContainerId={'edit-button-container'}
								menubarButtonId={'edit-button'}
								menubarButtonName={'editButton'}
								menubarButtonTextId={'edit-button-text'}
								menubarButtonText={'Edit'}
								menubarButtonOnClick={handleMenubarButtonClick}
								menubarButtonOnMouseEnter={handleMenubarButtonMouseEnter}
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
								<hr className="dropdown-menu-hr"/>
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
								menubarButtonId={'window-button'}
								menubarButtonName={'windowButton'}
								menubarButtonTextId={'window-button-text'}
								menubarButtonText={'Window'}
								menubarButtonOnClick={handleMenubarButtonClick}
								menubarButtonOnMouseEnter={handleMenubarButtonMouseEnter}
							/>
							<MenubarDropdownMenu
								dropdownMenuId={'window-button-dropdown-menu'}
							>
								<MenubarDropdownMenuItem
									dropdownMenuItemClassName={'dropdown-menu-item'}
									dropdownMenuItemId={'dropdown-menu-item-minimize'}
									dropdownMenuItemCheckmark={''}
									dropdownMenuItemText={'Minimize'}
									dropdownMenuItemShortcut={'&#8997;M'}
									dropdownMenuItemOnClick={handleMenuItemClick}
								/>
								<MenubarDropdownMenuItem
									dropdownMenuItemClassName={'dropdown-menu-item'}
									dropdownMenuItemId={'dropdown-menu-item-window-title'}
									dropdownMenuItemCheckmark={'&#x2714;'}
									dropdownMenuItemText={'Reaction Time Test'}
									dropdownMenuItemShortcut={''}
								/>
							</MenubarDropdownMenu>
						</MenubarButtonAndDropdownMenu>
					</MenubarLeftContainer>
				}
				<MenubarRightContainer>
					<MenubarClock/>
				</MenubarRightContainer>
			</div>
		</>
	);
};
