import React, {useEffect, useContext} from 'react';
import {useNavigate} from 'react-router-dom';

import {ModalContext} from '../../contexts/ModalContext.jsx';

import MenubarLeftContainer from './MenubarLeftContainer.jsx';
import MenubarButtonAndDropdownMenu from './MenubarButtonAndDropdownMenu.jsx';
import MenubarButton from './MenubarButton.jsx';
import MenubarDropdownMenu from './MenubarDropdownMenu.jsx';
import MenubarDropdownMenuItem from './MenubarDropdownMenuItem.jsx';
import MenubarRightContainer from './MenubarRightContainer.jsx';
import WifiIcon from '../Icons/WifiIcon.jsx';
import BluetoothIcon from '../Icons/BluetoothIcon.jsx';
import SpeakerIcon from '../Icons/SpeakerIcon.jsx';
import MenubarClock from './MenubarClock.jsx';
import MagnifyingGlassIcon from '../Icons/MagnifyingGlassIcon.jsx';

// import useClockSetupOnLoad from '../../customHooks/eventListeners/useClockSetupOnLoad.jsx';
import useAppStart from '../../customHooks/helperFunctions/useAppStart.jsx';
import useAppQuit from '../../customHooks/helperFunctions/useAppQuit.jsx';
import useWindowOpen from '../../customHooks/helperFunctions/useWindowOpen.jsx';
import useWindowClose from '../../customHooks/helperFunctions/useWindowClose.jsx';
import useWindowMinimize from '../../customHooks/helperFunctions/useWindowMinimize.jsx';
import useModalOpen from '../../customHooks/helperFunctions/useModalOpen.jsx';
import useModalClose from '../../customHooks/helperFunctions/useModalClose.jsx';
import useHandleLogout from '../../customHooks/formSubmissionHandlers/useHandleLogout.jsx';

import '../../css/Desktop/Menubar.css';

export default function Menubar({
	// setModalAboutSystemOpen,
	// setModalAboutSystemOpenShowClass,
	// setModalAboutReactionTimeTestOpen,
	// setModalAboutReactionTimeTestOpenShowClass,
	// setModalRttRestartConfirmationOpen,
	// setModalRttRestartConfirmationOpenShowClass,
	// modalRttContainerOpen,
	// setModalRttContainerOpen,
	// setModalRttContainerOpenShowClass

}){
	const navigate=useNavigate();
	const {
		appOrdering,
		setAppOrdering,
		menubars,
		setMenubars,
		modals,
		setModals,
		modalShowClasses,
		setModalShowClasses
	}=useContext(ModalContext);
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
			useModalOpen(
				setModals.setModalAboutSystemOpen,
				setModalShowClasses.setModalAboutSystemOpenShowClass,
				'about-system-container-in-use'
			);
		}else if(e.target.id==="dropdown-menu-item-system-preferences"){
			useAppStart(
				'WindowSPContainer',
				appOrdering.openApps,
				setAppOrdering.setOpenApps,
				setMenubars.setMenubarSp,
				setModals.setModalSPOpen,
				setModalShowClasses.setModalSPOpenShowClass,
				'sp-container-in-use'
			);
		}else if(e.target.id==="dropdown-menu-item-log-out"){
			useHandleLogout(navigate);
		}else if(e.target.id==="dropdown-menu-item-quit-sp"){
			useAppQuit(
				'WindowSPContainer',
				appOrdering.openApps,
				setAppOrdering.setOpenApps,
				setMenubars.setMenubarSp,
				setModals.setModalSPOpen,
				setModalShowClasses.setModalSPOpenShowClass
			);
		}else if(e.target.id==="rtt-dropdown-menu-item-about-reaction-time-test"){
			useModalOpen(
				setModals.setModalAboutReactionTimeTestOpen,
				setModalShowClasses.setModalAboutReactionTimeTestOpenShowClass,
				'about-reaction-time-test-container-in-use'
			);
		}else if(e.target.id==="rtt-dropdown-menu-item-quit"){
			if(modals.modalAboutReactionTimeTestOpen){
				useModalClose(
					setModals.setModalAboutReactionTimeTestOpen,
					setModalShowClasses.setModalAboutReactionTimeTestOpenShowClass
				);
			};
			if(modals.modalRttRestartConfirmationOpen){
				useModalClose(
					setModals.setModalRttRestartConfirmationOpen,
					setModalShowClasses.setModalRttRestartConfirmationOpenShowClass
				);
			};
			if(modals.modalRttInstructionsOpen){
				useModalClose(
					setModals.setModalRttInstructionsOpen,
					setModalShowClasses.setModalRttInstructionsOpenShowClass
				);
			};
			if(modals.modalRttAnticheatOpen){
				useModalClose(
					setModals.setModalRttAnticheatOpen,
					setModalShowClasses.setModalRttAnticheatOpenShowClass
				);
			};
			useAppQuit(
				'WindowRttContainer',
				appOrdering.openApps,
				setAppOrdering.setOpenApps,
				setMenubars.setMenubarRtt,
				setModals.setModalRttContainerOpen,
				setModalShowClasses.setModalRttContainerOpenShowClass
			);
		}else if(e.target.id==="rtt-dropdown-menu-item-restart"){
			useModalOpen(
				setModals.setModalRttRestartConfirmationOpen,
				setModalShowClasses.setModalRttRestartConfirmationOpenShowClass,
				'rtt-restart-confirmation-container-in-use'
			);
		}else if(e.target.id==="rtt-dropdown-menu-item-close"){
			useWindowClose('.rtt-test-container');
		}else if(e.target.id==="rtt-dropdown-menu-item-minimize"){
			useWindowMinimize('.rtt-test-container');
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

	// useEffect(()=>{
	// 	useClockSetupOnLoad();
	// },[]);
	return(
		<>
			<div className="menubar-container">
				{!menubars.menubarRtt &&
					!menubars.menubarSp &&
					<MenubarLeftContainer
					menubarLeftContainerId={'menubar-left-container-desktop'}
					>
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
									dropdownMenuItemClassName={'dropdown-menu-item'}
									dropdownMenuItemId={'dropdown-menu-item-system-preferences'}
									dropdownMenuItemOnClick={handleMenuItemClick}
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
								menubarButtonClassName={'menubar-button menubar-app-button'}
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
									dropdownMenuItemClassName={'dropdown-menu-item menu-item-greyed-out'}
									dropdownMenuItemId={'dropdown-menu-item-about-desktop'}
									dropdownMenuItemTitle={'This item is non-functional'}
									dropdownMenuItemCheckmark={''}
									dropdownMenuItemText={'About Desktop...'}
									dropdownMenuItemShortcut={''}
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
								menubarButtonClassName={'menubar-button'}
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
								menubarButtonClassName={'menubar-button'}
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
								menubarButtonClassName={'menubar-button'}
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
				{modals.modalSPOpen &&
					appOrdering.openApps[0]==='WindowSPContainer' &&
					<MenubarLeftContainer
					menubarLeftContainerId={'menubar-left-container-sp'}
					>
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
									dropdownMenuItemClassName={'dropdown-menu-item'}
									dropdownMenuItemId={'dropdown-menu-item-system-preferences'}
									dropdownMenuItemOnClick={handleMenuItemClick}
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
								menubarButtonClassName={'menubar-button menubar-app-button'}
								menubarButtonId={'app-button'}
								menubarButtonName={'appButton'}
								menubarButtonTextId={'app-button-text'}
								menubarButtonText={'System Preferences'}
								menubarButtonOnClick={handleMenubarButtonClick}
								menubarButtonOnMouseEnter={handleMenubarButtonMouseEnter}
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
								<hr className="dropdown-menu-hr"/>
								<MenubarDropdownMenuItem
									dropdownMenuItemClassName={'dropdown-menu-item'}
									dropdownMenuItemId={'dropdown-menu-item-quit-sp'}
									dropdownMenuItemOnClick={handleMenuItemClick}
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
								menubarButtonOnClick={handleMenubarButtonClick}
								menubarButtonOnMouseEnter={handleMenubarButtonMouseEnter}
							/>
							<MenubarDropdownMenu
								dropdownMenuId={'file-button-dropdown-menu'}
							>
								<MenubarDropdownMenuItem
									dropdownMenuItemClassName={'dropdown-menu-item'}
									dropdownMenuItemId={'dropdown-menu-item-new-window-sp'}
									dropdownMenuItemOnClick={handleMenuItemClick}
									dropdownMenuItemCheckmark={''}
									dropdownMenuItemText={'New Window...'}
									dropdownMenuItemShortcut={'&#8997;N'}
								/>
								<hr className="dropdown-menu-hr"/>
								<MenubarDropdownMenuItem
									dropdownMenuItemClassName={'dropdown-menu-item'}
									dropdownMenuItemId={'dropdown-menu-item-close-sp'}
									dropdownMenuItemOnClick={handleMenuItemClick}
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
								menubarButtonClassName={'menubar-button'}
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
									dropdownMenuItemOnClick={handleMenuItemClick}
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
				{modals.modalRttContainerOpen &&
					appOrdering.openApps[0]==='WindowRttContainer' &&
					<MenubarLeftContainer
					menubarLeftContainerId={'menubar-left-container-rtt'}
					>
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
									dropdownMenuItemClassName={'dropdown-menu-item'}
									dropdownMenuItemId={'dropdown-menu-item-system-preferences'}
									dropdownMenuItemOnClick={handleMenuItemClick}
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
							menubarButtonAndDropdownMenuId={'rtt-menubar-button-and-dropdown-menu-container-app'}
						>
							<MenubarButton
								menubarButtonContainerId={'app-button-container'}
								menubarButtonClassName={'menubar-button menubar-app-button'}
								menubarButtonId={'rtt-app-button'}
								menubarButtonName={'appButton'}
								menubarButtonTextId={'app-button-text'}
								menubarButtonText={'Reaction Time Test'}
								menubarButtonOnClick={handleMenubarButtonClick}
								menubarButtonOnMouseEnter={handleMenubarButtonMouseEnter}
							/>
							<MenubarDropdownMenu
								dropdownMenuId={'rtt-app-button-dropdown-menu'}
							>
								<MenubarDropdownMenuItem
									dropdownMenuItemClassName={'dropdown-menu-item'}
									dropdownMenuItemId={'rtt-dropdown-menu-item-about-reaction-time-test'}
									dropdownMenuItemCheckmark={''}
									dropdownMenuItemText={'About Reaction Time Test...'}
									dropdownMenuItemShortcut={''}
									dropdownMenuItemOnClick={handleMenuItemClick}
								/>
								<hr className="dropdown-menu-hr"/>
								<MenubarDropdownMenuItem
									dropdownMenuItemClassName={'dropdown-menu-item'}
									dropdownMenuItemId={'rtt-dropdown-menu-item-quit'}
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
								menubarButtonClassName={'menubar-button'}
								menubarButtonId={'rtt-file-button'}
								menubarButtonName={'fileButton'}
								menubarButtonTextId={'file-button-text'}
								menubarButtonText={'File'}
								menubarButtonOnClick={handleMenubarButtonClick}
								menubarButtonOnMouseEnter={handleMenubarButtonMouseEnter}
							/>
							<MenubarDropdownMenu
								dropdownMenuId={'rtt-file-button-dropdown-menu'}
							>
								<MenubarDropdownMenuItem
									dropdownMenuItemClassName={'dropdown-menu-item'}
									dropdownMenuItemId={'rtt-dropdown-menu-item-restart'}
									dropdownMenuItemCheckmark={''}
									dropdownMenuItemText={'New Test...'}
									dropdownMenuItemShortcut={'&#8997;N'}
									dropdownMenuItemOnClick={handleMenuItemClick}
								/>
								<hr className="dropdown-menu-hr"/>
								<MenubarDropdownMenuItem
									dropdownMenuItemClassName={'dropdown-menu-item'}
									dropdownMenuItemId={'rtt-dropdown-menu-item-close'}
									dropdownMenuItemCheckmark={''}
									dropdownMenuItemText={'Close Window'}
									dropdownMenuItemShortcut={'&#8997;W'}
									dropdownMenuItemOnClick={handleMenuItemClick}
								/>
							</MenubarDropdownMenu>
						</MenubarButtonAndDropdownMenu>
						<MenubarButtonAndDropdownMenu
							menubarButtonAndDropdownMenuId={'rtt-menubar-button-and-dropdown-menu-container-edit'}
						>
							<MenubarButton
								menubarButtonContainerId={'rtt-edit-button-container'}
								menubarButtonClassName={'menubar-button'}
								menubarButtonId={'rtt-edit-button'}
								menubarButtonName={'editButton'}
								menubarButtonTextId={'edit-button-text'}
								menubarButtonText={'Edit'}
								menubarButtonOnClick={handleMenubarButtonClick}
								menubarButtonOnMouseEnter={handleMenubarButtonMouseEnter}
							/>
							<MenubarDropdownMenu
								dropdownMenuId={'rtt-edit-button-dropdown-menu'}
							>
								<MenubarDropdownMenuItem
									dropdownMenuItemClassName={'dropdown-menu-item menu-item-greyed-out'}
									dropdownMenuItemId={'rtt-dropdown-menu-item-undo'}
									dropdownMenuItemTitle={'This item is non-functional'}
									dropdownMenuItemCheckmark={''}
									dropdownMenuItemText={'Undo'}
									dropdownMenuItemShortcut={'&#8997;Z'}
								/>
								<MenubarDropdownMenuItem
									dropdownMenuItemClassName={'dropdown-menu-item menu-item-greyed-out'}
									dropdownMenuItemId={'rtt-dropdown-menu-item-redo'}
									dropdownMenuItemTitle={'This item is non-functional'}
									dropdownMenuItemCheckmark={''}
									dropdownMenuItemText={'Redo'}
									dropdownMenuItemShortcut={'&#8997;Z'}
								/>
								<hr className="dropdown-menu-hr"/>
								<MenubarDropdownMenuItem
									dropdownMenuItemClassName={'dropdown-menu-item menu-item-greyed-out'}
									dropdownMenuItemId={'rtt-dropdown-menu-item-cut'}
									dropdownMenuItemTitle={'This item is non-functional'}
									dropdownMenuItemCheckmark={''}
									dropdownMenuItemText={'Cut'}
									dropdownMenuItemShortcut={'&#8997;X'}
								/>
								<MenubarDropdownMenuItem
									dropdownMenuItemClassName={'dropdown-menu-item menu-item-greyed-out'}
									dropdownMenuItemId={'rtt-dropdown-menu-item-copy'}
									dropdownMenuItemTitle={'This item is non-functional'}
									dropdownMenuItemCheckmark={''}
									dropdownMenuItemText={'Copy'}
									dropdownMenuItemShortcut={'&#8997;C'}
								/>
								<MenubarDropdownMenuItem
									dropdownMenuItemClassName={'dropdown-menu-item menu-item-greyed-out'}
									dropdownMenuItemId={'rtt-dropdown-menu-item-paste'}
									dropdownMenuItemTitle={'This item is non-functional'}
									dropdownMenuItemCheckmark={''}
									dropdownMenuItemText={'Paste'}
									dropdownMenuItemShortcut={'&#8997;V'}
								/>
							</MenubarDropdownMenu>
						</MenubarButtonAndDropdownMenu>
						<MenubarButtonAndDropdownMenu
							menubarButtonAndDropdownMenuId={'rtt-menubar-button-and-dropdown-menu-container-window'}
						>
							<MenubarButton
								menubarButtonContainerId={'rtt-window-button-container'}
								menubarButtonClassName={'menubar-button'}
								menubarButtonId={'rtt-window-button'}
								menubarButtonName={'windowButton'}
								menubarButtonTextId={'window-button-text'}
								menubarButtonText={'Window'}
								menubarButtonOnClick={handleMenubarButtonClick}
								menubarButtonOnMouseEnter={handleMenubarButtonMouseEnter}
							/>
							<MenubarDropdownMenu
								dropdownMenuId={'rtt-window-button-dropdown-menu'}
							>
								<MenubarDropdownMenuItem
									dropdownMenuItemClassName={'dropdown-menu-item'}
									dropdownMenuItemId={'rtt-dropdown-menu-item-minimize'}
									dropdownMenuItemCheckmark={''}
									dropdownMenuItemText={'Minimize'}
									dropdownMenuItemShortcut={'&#8997;M'}
									dropdownMenuItemOnClick={handleMenuItemClick}
								/>
								<MenubarDropdownMenuItem
									dropdownMenuItemClassName={'dropdown-menu-item'}
									dropdownMenuItemId={'rtt-dropdown-menu-item-window-title'}
									dropdownMenuItemCheckmark={'&#x2714;'}
									dropdownMenuItemText={'Reaction Time Test'}
									dropdownMenuItemShortcut={''}
								/>
							</MenubarDropdownMenu>
						</MenubarButtonAndDropdownMenu>
					</MenubarLeftContainer>
				}
				<MenubarRightContainer>
					<WifiIcon/>
					<BluetoothIcon/>
					<SpeakerIcon/>
					<MenubarClock/>
					<MagnifyingGlassIcon/>
				</MenubarRightContainer>
			</div>
		</>
	);
};
