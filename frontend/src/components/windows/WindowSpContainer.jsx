import React, {useState, useContext, useRef} from 'react';
import {useWindowSize} from '@react-hook/window-size';

import {UserContext} from '../../contexts/UserContext.jsx';
import {ModalContext} from '../../contexts/ModalContext.jsx';

import Window from '../commonComponents/Window.jsx';
import Titlebar from '../commonComponents/Titlebar.jsx';
import TitlebarLefthandButtons from '../commonComponents/TitlebarLefthandButtons.jsx';
import TitlebarTitle from '../commonComponents/TitlebarTitle.jsx';
import TitlebarRighthandButton from '../commonComponents/TitlebarRighthandButton.jsx';
import SpTabBar from '../windowSpComponents/SpTabBar.jsx';
import SpTabButton from '../windowSpComponents/SpTabButton.jsx';
import AccountIcon from '../Icons/AccountIcon.jsx';
import TimeIcon from '../Icons/TimeIcon.jsx';
import BackgroundIcon from '../Icons/BackgroundIcon.jsx';
import SpPreferencePaneAccount from '../windowSpComponents/SpPreferencePaneAccount.jsx';
import SpPreferencePaneTime from '../windowSpComponents/SpPreferencePaneTime.jsx';
import SpPreferencePaneBackground from '../windowSpComponents/SpPreferencePaneBackground.jsx';

import useAppQuit from '../../customHooks/helperFunctions/useAppQuit.jsx';
import useModalOpen from '../../customHooks/helperFunctions/useModalOpen.jsx';
import useWindowClose from '../../customHooks/helperFunctions/useWindowClose.jsx';
import useWindowMinimize from '../../customHooks/helperFunctions/useWindowMinimize.jsx';
import useSpPrefPaneOpen from '../../customHooks/helperFunctions/useSpPrefPaneOpen.jsx';

import '../../css/windows/WindowSpContainer.css';

export default function WindowSpContainer(){
	const [width, height]=useWindowSize();
	const {
		windowModalOrdering,
		setWindowModalOrdering,
		appOrdering,
		setAppOrdering,
		modals,
		setModals,
		modalShowClasses,
		setModalShowClasses,
		menubars,
		setMenubars,
		panesOpen,
		setPanesOpen
	}=useContext(ModalContext);
	const spPrefPaneOpen=(e)=>{useSpPrefPaneOpen(e, setPanesOpen)};
	const modalOpen=(e)=>{useModalOpen(
		setModals.setModalSpContainerOpen,
		setModalShowClasses.setModalSpContainerOpenShowClass,
		'sp-container-in-use'
	)};
	const appQuit=(e)=>{useAppQuit(
		'WindowSpContainer',
		windowModalOrdering.openWindowsModals,
		setWindowModalOrdering.setOpenWindowsModals,
		appOrdering.openApps,
		setAppOrdering.setOpenApps,
		setMenubars.setMenubarSp,
		setModals.setModalSpContainerOpen,
		setModalShowClasses.setModalSpContainerOpenShowClass
	)};
	const windowClose=(e)=>{useWindowClose('.sp-container')};
	const windowMinimize=(e)=>{useWindowMinimize('.sp-container')};
	return(
		<Window
			windowClassName={`window-modal-container window-container sp-container ${modalShowClasses.modalSpContainerOpenShowClass}`}
			windowId={'WindowSpContainer'}
		>
			<Titlebar
				titlebarClassName={'sp-modal-title-bar sp-title-container drag-handle'}
			>
				<TitlebarLefthandButtons
					lefthandButtonsContainerClassName={'sp-window-lefthand-buttons-container'}
					closeButtonClassName={'sp-window-button sp-window-close-button'}
					closeButtonId={'sp-window-close-button'}
					closeButtonEnabled={true}
					minimizeButtonClassName={'sp-window-button sp-window-minimize-button'}
					minimizeButtonId={'sp-window-minimize-button'}
					minimizeButtonEnabled={true}
					maximizeButtonClassName={'sp-window-button sp-window-maximize-button window-button-greyed-out'}
					maximizeButtonId={'sp-window-minimize-button'}
					maximizeButtonEnabled={false}
					windowQuerySelector={'.sp-container'}
					closeButtonQuits={true}
					appQuit={appQuit}
				/>
				<TitlebarTitle
					titleClassName={'sp-title'}
					title={'System Preferences'}
				/>
				<TitlebarRighthandButton
					righthandButtonContainerClassName={'sp-window-righthand-button-container'}
					righthandButtonClassName={'sp-window-righthand-button'}
				/>
			</Titlebar>
			<SpTabBar>
				<SpTabButton
					spTabButtonClassName={`sp-window-tab-button ${panesOpen.accountPaneOpen && 'pref-pane-tab-button-selected'}`}
					spButtonTabId={'sp-window-tab-button-account'}
					spButtonTabOnClick={spPrefPaneOpen}
					spButtonTabButtonIconId={'sp-window-tab-button-icon-account'}
					spButtonTabSpanId={'sp-window-tab-button-span-account'}
					spButtonTabInnerText={'Account'}
				>
					<AccountIcon
						accountIconClassName={'sp-window-tab-button-svg'}
						accountIconId={'sp-window-tab-button-svg-account'}
					/>
				</SpTabButton>
				<SpTabButton
					spTabButtonClassName={`sp-window-tab-button ${panesOpen.timePaneOpen && 'pref-pane-tab-button-selected'}`}
					spButtonTabId={'sp-window-tab-button-time'}
					spButtonTabOnClick={spPrefPaneOpen}
					spButtonTabButtonIconId={'sp-window-tab-button-icon-time'}
					spButtonTabSpanId={'sp-window-tab-button-span-time'}
					spButtonTabInnerText={'Date & Time'}
				>
					<TimeIcon/>
				</SpTabButton>
				<SpTabButton
					spTabButtonClassName={`sp-window-tab-button ${panesOpen.backgroundPaneOpen && 'pref-pane-tab-button-selected'}`}
					spButtonTabId={'sp-window-tab-button-background'}
					spButtonTabOnClick={spPrefPaneOpen}
					spButtonTabButtonIconId={'sp-window-tab-button-icon-background'}
					spButtonTabSpanId={'sp-window-tab-button-span-background'}
					spButtonTabInnerText={'Background'}
				>
					<BackgroundIcon/>
				</SpTabButton>
			</SpTabBar>
			{panesOpen.accountPaneOpen && <SpPreferencePaneAccount/>}
			{panesOpen.timePaneOpen && <SpPreferencePaneTime/>}
			{panesOpen.backgroundPaneOpen && <SpPreferencePaneBackground/>}
		</Window>
	);
};
