import React, {useState, useEffect, useContext, useRef, useCallback} from 'react';
import {createPortal} from 'react-dom';
import {useWindowSize} from '@react-hook/window-size';

import {ModalContext} from '../../contexts/ModalContext.jsx';
import {UserContext} from '../../contexts/UserContext.jsx';
import {OtwContext} from '../../contexts/OtwContext.jsx';

import Window from '../commonComponents/Window.jsx';
import Titlebar from '../commonComponents/Titlebar.jsx';
import TitlebarLefthandButtons from '../commonComponents/TitlebarLefthandButtons.jsx';
import TitlebarTitle from '../commonComponents/TitlebarTitle.jsx';
import TitlebarRighthandButton from '../commonComponents/TitlebarRighthandButton.jsx';
import ResizeHandle from '../commonComponents/ResizeHandle.jsx';
import InstructionsButton from '../commonComponents/InstructionsButton.jsx';
import ModalOtwGameStartDialog from '../modals/ModalOtwGameStartDialog.jsx';
import ModalOtwGamePauseDialog from '../modals/ModalOtwGamePauseDialog.jsx';
import ModalOtwGameEndDialog from '../modals/ModalOtwGameEndDialog.jsx';
import ModalAboutOffTheWall from '../modals/ModalAboutOffTheWall.jsx';
import ModalOtwInstructions from '../modals/ModalOtwInstructions.jsx';
import ModalOtwResultHistory from '../modals/ModalOtwResultHistory.jsx';
import ResizeIcon from '../Icons/ResizeIcon.jsx';
import InfoIcon from '../Icons/InfoIcon.jsx';
import OtwBackground from '../windowOtwComponents/OtwBackground.jsx';
import OtwGameboard from '../windowOtwComponents/OtwGameboard.jsx';
import OtwGameball from '../windowOtwComponents/OtwGameball.jsx';

import offTheWallIcon from '../../assets/off-the-wall-icon-with-stroke.png';

import useModalOpen from '../../customHooks/helperFunctions/useModalOpen.jsx';
// import useModalClose from '../../customHooks/helperFunctions/useModalClose.jsx';
// import useWindowClose from '../../customHooks/helperFunctions/useWindowClose.jsx';
// import useWindowMinimize from '../../customHooks/helperFunctions/useWindowMinimize.jsx';
// import useWindowMaximize from '../../customHooks/helperFunctions/useWindowMaximize.jsx';
// import useMakeInert from '../../customHooks/helperFunctions/useMakeInert.jsx';
// import useHandleOtwResultAdd from '../../customHooks/formSubmissionHandlers/useHandleOtwResultAdd.jsx';

import useHandleOtwGameSetup from '../../customHooks/eventListeners/useHandleOtwGameSetup.jsx';

import '../../css/windows/WindowOtwContainer.css';

export default function WindowOtwContainer(){
	const [width, height]=useWindowSize();
	const {
		appModalOrdering,
		setAppModalOrdering,
		modals,
		setModals,
		modalShowClasses,
		setModalShowClasses
	}=useContext(ModalContext);
	const {user, setUser}=useContext(UserContext);
	const {otwValues, setOtwValues}=useContext(OtwContext);
	const modalOpen=(e)=>{useModalOpen(
		'ModalOtwInstructions',
		appModalOrdering.openOtwModals,
		setAppModalOrdering.setOpenOtwModals,
		setModals.setModalOtwInstructionsOpen,
		setModalShowClasses.setModalOtwInstructionsOpenShowClass,
		'otw-instructions-container-in-use'
	)};
	// const windowClose=(e)=>{useWindowClose('.otw-container')};
	// const windowMinimize=(e)=>{useWindowMinimize('.otw-container')};
	// const windowMaximize=(e)=>{useWindowMaximize('.otw-container')};
	useEffect(()=>{
		if(modals.modalOtwContainerOpen){
			return()=>{
				useHandleOtwGameSetup(
					setUser,
					appModalOrdering,
					setAppModalOrdering,
					modals,
					setModals,
					setModalShowClasses,
					otwValues,
					setOtwValues
				);
			};
		};
	},[width, height, modals.modalOtwContainerOpen]);
	return(
		<Window
			windowClassName={`window-modal-container window-container otw-container ${modalShowClasses.modalOtwContainerOpenShowClass}`}
			windowId={'WindowOtwContainer'}
		>
			<Titlebar
				titlebarClassName={"otw-modal-title-bar otw-title-container drag-handle"}
			>
				<TitlebarLefthandButtons
					lefthandButtonsContainerClassName={"otw-window-lefthand-buttons-container"}
					closeButtonClassName={"otw-window-button otw-window-close-button"}
					closeButtonId={"otw-window-close-button"}
					minimizeButtonClassName={"otw-window-button otw-window-minimize-button"}
					minimizeButtonId={"otw-window-minimize-button"}
					maximizeButtonClassName={"otw-window-button otw-window-maximize-button"}
					maximizeButtonId={"otw-window-maximize-button"}
					windowQuerySelector={'.otw-container'}
				/>
				<TitlebarTitle
					titleClassName={"otw-title"}
					title={"Off The Wall!"}
				/>
				<TitlebarRighthandButton
					righthandButtonContainerClassName={"otw-window-righthand-button-container"}
					righthandButtonClassName={"otw-window-righthand-button"}
				/>
			</Titlebar>
			<ResizeHandle
				resizeHandleClassName={'otw-modal-resize-handle resize-handle'}
			/>
			<InstructionsButton
				instructionsButtonClassName={"otw-instructions-button-container"}
				onClickFunction={modalOpen}
				infoButtonSvgId={'otw-info-icon'}
				infoButtonPathFillColor={'transparent'}
				infoButtonFontColor={'white'}
			/>
			<OtwBackground>
				<OtwGameboard>
					<OtwGameball/>
				</OtwGameboard>
			</OtwBackground>
			{/*<div
				className="otw-background-overlay"
			>
				<div
					className="otw-gameboard"
				>
					<div
						className="otw-gameball"
					>
						<span
							className="otw-shadow"
						>
						</span>
					</div>
				</div>
			</div>*/}
			{modals.modalOtwGameStartDialogOpen && <ModalOtwGameStartDialog/>}
			{modals.modalOtwGamePauseDialogOpen && <ModalOtwGamePauseDialog/>}
			{modals.modalOtwGameEndDialogOpen && <ModalOtwGameEndDialog/>}
			{modals.modalAboutOffTheWallOpen && <ModalAboutOffTheWall/>}
			{modals.modalOtwInstructionsOpen && <ModalOtwInstructions/>}
			{modals.modalOtwResultHistoryOpen && <ModalOtwResultHistory/>}
		</Window>
	);
};
