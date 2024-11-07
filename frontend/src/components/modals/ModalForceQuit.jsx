import React, {useContext} from 'react';

import {ModalContext} from '../../contexts/ModalContext.jsx';
import {UserContext} from '../../contexts/UserContext.jsx';
import {RttContext} from '../../contexts/RttContext.jsx';
import {OtwContext} from '../../contexts/OtwContext.jsx';

import Window from '../commonComponents/Window.jsx';
import Titlebar from '../commonComponents/Titlebar.jsx';
import TitlebarLefthandButtons from '../commonComponents/TitlebarLefthandButtons.jsx';
import TitlebarTitle from '../commonComponents/TitlebarTitle.jsx';
import TitlebarRighthandButton from '../commonComponents/TitlebarRighthandButton.jsx';
import ResizeHandle from '../commonComponents/ResizeHandle.jsx';
import AquaButton from '../commonComponents/AquaButton.jsx';
import AquaButtonText from '../commonComponents/AquaButtonText.jsx';

import useAppQuit from '../../customHooks/helperFunctions/useAppQuit.jsx';
import useHandleForceQuitItemSingleClick from '../../customHooks/eventListeners/useHandleForceQuitItemSingleClick.jsx';
import useHandleForceQuitItemDoubleClick from '../../customHooks/eventListeners/useHandleForceQuitItemDoubleClick.jsx';
import useHandleForceQuitButtonClick from '../../customHooks/eventListeners/useHandleForceQuitButtonClick.jsx';

import otwIcon from '../../assets/off-the-wall-icon.png';
import rttIcon from '../../assets/reaction-test-icon-g.png';
import scIcon from '../../assets/speed-clicker-icon-g.png';
import spIcon from '../../assets/system-preferences-icon-2.png';
import desktopIcon from '../../assets/pear-icon-with-bite-v2-in-color-g.png';

import '../../css/modals/ModalForceQuit.css';

export default function ModalForceQuit(){
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
	const appQuit=(e)=>{useAppQuit(
		'ModalForceQuit',
		windowModalOrdering.openWindowsModals,
		setWindowModalOrdering.setOpenWindowsModals,
		appOrdering.openApps,
		setAppOrdering.setOpenApps,
		'NoMenubar',
		setModals.setModalForceQuitOpen,
		setModalShowClasses.setModalForceQuitOpenShowClass
	)};
	const handleForceQuitItemSingleClick=(e)=>{useHandleForceQuitItemSingleClick(e)};
	const handleForceQuitItemDoubleClick=(e)=>{useHandleForceQuitItemDoubleClick(
		e,
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
		setRttValues
	)};
	const handleForceQuitButtonClick=(e)=>{useHandleForceQuitButtonClick(
		e,
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
		setRttValues
	)};
	return(
		<Window
			windowClassName={`window-modal-container window-container fq-container ${modalShowClasses.modalForceQuitOpenShowClass}`}
			windowId={'ModalForceQuit'}
		>
			<Titlebar
				titlebarClassName={'modal-title-bar fq-title-bar drag-handle'}
			>
				<TitlebarLefthandButtons
					lefthandButtonsContainerClassName={'fq-window-lefthand-buttons-container'}
					closeButtonClassName={'fq-window-button fq-window-close-button'}
					closeButtonId={'fq-window-close-button'}
					closeButtonEnabled={true}
					minimizeButtonClassName={'fq-window-button fq-window-minimize-button window-button-greyed-out'}
					minimizeButtonId={'fq-window-minimize-button'}
					minimizeButtonEnabled={false}
					maximizeButtonClassName={'fq-window-button fq-window-maximize-button'}
					maximizeButtonId={'fq-window-minimize-button'}
					maximizeButtonEnabled={true}
					windowQuerySelector={'.fq-container'}
					closeButtonQuits={true}
					appQuit={appQuit}
				/>
				<TitlebarTitle
					titleClassName={'fq-title'}
					title={'Force Quit Applications'}
				/>
				<TitlebarRighthandButton
					righthandButtonContainerClassName={'fq-window-righthand-button-container'}
					righthandButtonClassName={'fq-window-righthand-button'}
				/>
			</Titlebar>
			<ResizeHandle
				resizeHandleClassName={'fq-window-resize-handle resize-handle'}
			/>
			<div
				className='fq-contents-container'
			>
				<div
					className='fq-contents'
				>
					<p
						className='fq-message'
					>
						If an application doesn't respond for a while, select its name and click Force Quit.
					</p>
					<div
						className='fq-app-list'
					>
						{
							modals.modalOtwContainerOpen &&
							<div
								className='fq-list-item'
								id='fq-list-item-otw'
								onClick={handleForceQuitItemSingleClick}
								onDoubleClick={handleForceQuitItemDoubleClick}
							>
								<img
									className='fq-icon'
									id='fq-icon-otw'
									src={otwIcon}
								/>
								<span
									className='fq-app-name'
									id='fq-app-name-otw'
								>
									Off The Wall!
								</span>
							</div>
						}
						{
							modals.modalRttContainerOpen &&
							<div
								className='fq-list-item'
								id='fq-list-item-rtt'
								onClick={handleForceQuitItemSingleClick}
								onDoubleClick={handleForceQuitItemDoubleClick}
							>
								<img
									className='fq-icon'
									id='fq-icon-rtt'
									src={rttIcon}
								/>
								<span
									className='fq-app-name'
									id='fq-app-name-rtt'
								>
									Reaction Time Test
								</span>
							</div>
						}
						{
							modals.modalScContainerOpen &&
							<div
								className='fq-list-item'
								id='fq-list-item-sc'
								onClick={handleForceQuitItemSingleClick}
								onDoubleClick={handleForceQuitItemDoubleClick}
							>
								<img
									className='fq-icon'
									id='fq-icon-sc'
									src={scIcon}
								/>
								<span
									className='fq-app-name'
									id='fq-app-name-sc'
								>
									Speed Clicker
								</span>
							</div>
						}
						{
							modals.modalSpContainerOpen &&
							<div
								className='fq-list-item'
								id='fq-list-item-sp'
								onClick={handleForceQuitItemSingleClick}
								onDoubleClick={handleForceQuitItemDoubleClick}
							>
								<img
									className='fq-icon'
									id='fq-icon-sp'
									src={spIcon}
								/>
								<span
									className='fq-app-name'
									id='fq-app-name-sp'
								>
									System Preferences
								</span>
							</div>
						}
					</div>
				</div>
			</div>
			<div
				className='fq-close-button-container'
			>
				<span
					className='fq-close-button-message'
				>
					You can open this window by pressing Control-Option-Escape.
				</span>
				<AquaButton
					aquaButtonClassName={'close-button fq-close-button'}
					aquaButtonOnClick={handleForceQuitButtonClick}
				>
					<AquaButtonText
						aquaButtonTextClassName={'fq-close-button-text about-close-button-text'}
						aquaButtonText={'Force Quit'}
					/>
				</AquaButton>
			</div>
		</Window>
	);
};
