import React, {useEffect, useContext} from 'react';
import {useNavigate} from 'react-router-dom';

import {ModalContext} from '../../contexts/ModalContext.jsx';
import {UserContext} from '../../contexts/UserContext.jsx';
import {RttContext} from '../../contexts/RttContext.jsx';
import {OtwContext} from '../../contexts/OtwContext.jsx';

import MenubarLeftContainer from './MenubarLeftContainer.jsx';
import MenubarLeftPearMenu from './MenubarLeftPearMenu.jsx';
import MenubarLeftDesktop from './MenubarLeftDesktop.jsx';
import MenubarLeftSp from './MenubarLeftSp.jsx';
import MenubarLeftRtt from './MenubarLeftRtt.jsx';
import MenubarLeftSc from './MenubarLeftSc.jsx';
import MenubarLeftOtw from './MenubarLeftOtw.jsx';
import MenubarRightContainer from './MenubarRightContainer.jsx';
import MenubarRightClock from './MenubarRightClock.jsx';
import MenubarRightAccount from './MenubarRightAccount.jsx';
import MagnifyingGlassIcon from '../Icons/MagnifyingGlassIcon.jsx';
import MenubarButtonAndDropdownMenu from './MenubarButtonAndDropdownMenu.jsx';
import MenubarDropdownMenu from './MenubarDropdownMenu.jsx';
import MenubarDropdownMenuItem from './MenubarDropdownMenuItem.jsx';

import useAppStart from '../../customHooks/helperFunctions/useAppStart.jsx';
import useAppQuit from '../../customHooks/helperFunctions/useAppQuit.jsx';
import useWindowOpen from '../../customHooks/helperFunctions/useWindowOpen.jsx';
import useWindowClose from '../../customHooks/helperFunctions/useWindowClose.jsx';
import useWindowMinimize from '../../customHooks/helperFunctions/useWindowMinimize.jsx';
import useModalOpen from '../../customHooks/helperFunctions/useModalOpen.jsx';
import useModalClose from '../../customHooks/helperFunctions/useModalClose.jsx';
import useHandleLogout from '../../customHooks/formSubmissionHandlers/useHandleLogout.jsx';
import useHandleMenubarButtonClick from '../../customHooks/eventListeners/useHandleMenubarButtonClick.jsx';
import useHandleMenubarButtonMouseEnter from '../../customHooks/eventListeners/useHandleMenubarButtonMouseEnter.jsx';
import useHandleMenuItemClick from '../../customHooks/eventListeners/useHandleMenuItemClick.jsx';

import '../../css/Desktop/Menubar.css';

export default function Menubar(){
	const navigate=useNavigate();
	const {
		windowModalOrdering,
		setWindowModalOrdering,
		appOrdering,
		setAppOrdering,
		appModalOrdering,
		setAppModalOrdering,
		menubars,
		setMenubars,
		modals,
		setModals,
		modalShowClasses,
		setModalShowClasses,
		windowSizing,
		setWindowSizing,
		panesOpen,
		setPanesOpen
	}=useContext(ModalContext);
	const {user, setUser}=useContext(UserContext);
	const {rttValues, setRttValues}=useContext(RttContext);
	const {otwValues, setOtwValues}=useContext(OtwContext);
	let openAppsMinusModals=windowModalOrdering.openWindowsModals.filter((app)=>app.includes('Window'));
	const handleMenubarButtonClick=(e)=>{useHandleMenubarButtonClick(e)};
	const handleMenubarButtonMouseEnter=(e)=>{useHandleMenubarButtonMouseEnter(e)};
	const handleMenuItemClick=(e)=>{useHandleMenuItemClick(
		e,
		setUser,
		navigate,
		windowModalOrdering,
		setWindowModalOrdering,
		appOrdering,
		setAppOrdering,
		appModalOrdering,
		setAppModalOrdering,
		modals,
		setModals,
		setModalShowClasses,
		setMenubars,
		panesOpen,
		setPanesOpen,
		rttValues,
		setRttValues,
		otwValues,
		setOtwValues,
		windowSizing
	)};
	return(
		<>
			<div className='menubar-container'>
				<MenubarLeftContainer>
					<MenubarLeftPearMenu
						menubarButtonOnClick={handleMenubarButtonClick}
						menubarButtonOnMouseEnter={handleMenubarButtonMouseEnter}
						dropdownMenuItemOnClick={handleMenuItemClick}
					/>
					{!menubars.menubarRtt &&
						!menubars.menubarSc &&
						!menubars.menubarOtw &&
						!menubars.menubarSp &&
						<MenubarLeftDesktop
							menubarButtonOnClick={handleMenubarButtonClick}
							menubarButtonOnMouseEnter={handleMenubarButtonMouseEnter}
							dropdownMenuItemOnClick={handleMenuItemClick}
						/>
					}
					{menubars.menubarSp &&
						openAppsMinusModals[0]==='WindowSpContainer' &&
						<MenubarLeftSp
							menubarButtonOnClick={handleMenubarButtonClick}
							menubarButtonOnMouseEnter={handleMenubarButtonMouseEnter}
							dropdownMenuItemOnClick={handleMenuItemClick}
						/>
					}
					{menubars.menubarRtt &&
						openAppsMinusModals[0]==='WindowRttContainer' &&
						<MenubarLeftRtt
							menubarButtonOnClick={handleMenubarButtonClick}
							menubarButtonOnMouseEnter={handleMenubarButtonMouseEnter}
							dropdownMenuItemOnClick={handleMenuItemClick}
						/>
					}
					{menubars.menubarSc &&
						openAppsMinusModals[0]==='WindowScContainer' &&
						<MenubarLeftSc
							menubarButtonOnClick={handleMenubarButtonClick}
							menubarButtonOnMouseEnter={handleMenubarButtonMouseEnter}
							dropdownMenuItemOnClick={handleMenuItemClick}
						/>
					}
					{menubars.menubarOtw &&
						openAppsMinusModals[0]==='WindowOtwContainer' &&
						<MenubarLeftOtw
							menubarButtonOnClick={handleMenubarButtonClick}
							menubarButtonOnMouseEnter={handleMenubarButtonMouseEnter}
							dropdownMenuItemOnClick={handleMenuItemClick}
						/>
					}
				</MenubarLeftContainer>
				<MenubarRightContainer>
					{user.showDateAndTime &&
						<MenubarRightClock
							menubarButtonOnClick={handleMenubarButtonClick}
							dropdownMenuItemOnClick={handleMenuItemClick}
							noMouseEnter={'no-mouse-enter'}
						/>
					}
					{user.showAccountInMenubar &&
						<MenubarRightAccount
							menubarButtonOnClick={handleMenubarButtonClick}
							dropdownMenuItemOnClick={handleMenuItemClick}
							noMouseEnter={'no-mouse-enter'}
						/>
					}
					<MagnifyingGlassIcon/>
				</MenubarRightContainer>
			</div>
		</>
	);
};
