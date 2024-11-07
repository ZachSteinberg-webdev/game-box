import React, {useState, useEffect, useContext, useRef} from 'react';
import {createPortal} from 'react-dom';
import {useWindowSize} from '@react-hook/window-size';

import {ModalContext} from '../../contexts/ModalContext.jsx';
import {UserContext} from '../../contexts/UserContext.jsx';
import {RttContext} from '../../contexts/RttContext.jsx';

import ModalRttAnticheat from '../modals/ModalRttAnticheat.jsx';
import Window from '../commonComponents/Window.jsx';
import Titlebar from '../commonComponents/Titlebar.jsx';
import TitlebarLefthandButtons from '../commonComponents/TitlebarLefthandButtons.jsx';
import TitlebarTitle from '../commonComponents/TitlebarTitle.jsx';
import TitlebarRighthandButton from '../commonComponents/TitlebarRighthandButton.jsx';
import ResizeHandle from '../commonComponents/ResizeHandle.jsx';
import InstructionsButton from '../commonComponents/InstructionsButton.jsx';
import RttResultsTable from '../windowRttComponents/RttResultsTable.jsx';
import TestButtonContainer from '../commonComponents/TestButtonContainer.jsx';
import TestButtonForm from '../commonComponents/TestButtonForm.jsx';
import AquaButton from '../commonComponents/AquaButton.jsx';
import AquaButtonText from '../commonComponents/AquaButtonText.jsx';
import ResizeIcon from '../Icons/ResizeIcon.jsx';
import InfoIcon from '../Icons/InfoIcon.jsx';

import useModalOpen from '../../customHooks/helperFunctions/useModalOpen.jsx';
import useWindowClose from '../../customHooks/helperFunctions/useWindowClose.jsx';
import useWindowMinimize from '../../customHooks/helperFunctions/useWindowMinimize.jsx';
import useWindowMaximize from '../../customHooks/helperFunctions/useWindowMaximize.jsx';
import useHandleRttKeydown from '../../customHooks/eventListeners/useHandleRttKeydown.jsx';
import useHandleRttSpaceOrEnterPress from '../../customHooks/eventListeners/useHandleRttSpaceOrEnterPress.jsx';
import useHandleRttTestButtonFormClick from '../../customHooks/eventListeners/useHandleRttTestButtonFormClick.jsx';
import useHandleRttTestButtonTransitionEnd from '../../customHooks/eventListeners/useHandleRttTestButtonTransitionEnd.jsx';
import useHandleRttTestButtonClick from '../../customHooks/eventListeners/useHandleRttTestButtonClick.jsx';
import useMakeInert from '../../customHooks/helperFunctions/useMakeInert.jsx';

import '../../css/windows/WindowRttContainer.css';

export default function WindowRttContainer(){
	const [width, height]=useWindowSize();
	const {
		windowModalOrdering,
		setWindowModalOrdering,
		appModalOrdering,
		setAppModalOrdering,
		modals,
		setModals,
		modalShowClasses,
		setModalShowClasses
	}=useContext(ModalContext);
	const {user, setUser}=useContext(UserContext);
	const {rttValues, setRttValues}=useContext(RttContext);
	const modalOpen=(e)=>{useModalOpen(
		'ModalRttInstructions',
		windowModalOrdering.openWindowsModals,
		setWindowModalOrdering.setOpenWindowsModals,
		appModalOrdering.openRttModals,
		setAppModalOrdering.setOpenRttModals,
		setModals.setModalRttInstructionsOpen,
		setModalShowClasses.setModalRttInstructionsOpenShowClass,
		'rtt-test-instructions-container-in-use'
	)};
	const windowClose=(e)=>{useWindowClose('.rtt-test-container')};
	const windowMinimize=(e)=>{useWindowMinimize('.rtt-test-container')};
	const windowMaximize=(e)=>{useWindowMaximize('.rtt-test-container')};
	const handleRttSpaceOrEnterPress=(e)=>{useHandleRttSpaceOrEnterPress(e, setRttValues.setLatestSpaceOrEnterPress)};
	const handleRttTestButtonFormClick=(e)=>{useHandleRttTestButtonFormClick(
		e,
		setRttValues.setTestButtonFormClickTime
	)};
	const handleRttTestButtonTransitionEnd=(e)=>{useHandleRttTestButtonTransitionEnd(
		e,
		setRttValues.setShowTime
	)};
	const handleRttTestButtonClick=(e)=>{useHandleRttTestButtonClick(
		e,
		setUser,
		rttValues,
		setRttValues,
		// rttValues.resultsSum,
		// rttValues.resultsAverage,
		setModals,
		setModalShowClasses,
		windowModalOrdering,
		setWindowModalOrdering,
		appModalOrdering,
		setAppModalOrdering
	)};
	useEffect(()=>{
		useHandleRttKeydown(handleRttSpaceOrEnterPress);
	},[]);
	return(
		<Window
			windowClassName={`window-modal-container window-container rtt-test-container ${modalShowClasses.modalRttContainerOpenShowClass}`}
			windowId={'WindowRttContainer'}
		>
			<Titlebar
				titlebarClassName={'rtt-modal-title-bar rtt-test-title-container drag-handle'}
			>
				<TitlebarLefthandButtons
					lefthandButtonsContainerClassName={'rtt-test-window-lefthand-buttons-container'}
					closeButtonClassName={'rtt-test-window-button rtt-test-window-close-button'}
					closeButtonId={'rtt-test-window-close-button'}
					closeButtonEnabled={true}
					minimizeButtonClassName={'rtt-test-window-button rtt-test-window-minimize-button'}
					minimizeButtonId={'rtt-test-window-minimize-button'}
					minimizeButtonEnabled={true}
					maximizeButtonClassName={'rtt-test-window-button rtt-test-window-maximize-button'}
					maximizeButtonId={'rtt-test-window-maximize-button'}
					maximizeButtonEnabled={true}
					windowQuerySelector={'.rtt-test-container'}
				/>
				<TitlebarTitle
					titleClassName={'rtt-test-title'}
					title={'Reaction Time Test'}
				/>
				<TitlebarRighthandButton
					righthandButtonContainerClassName={'rtt-test-window-righthand-button-container'}
					righthandButtonClassName={'rtt-test-window-righthand-button'}
				/>
			</Titlebar>
			<ResizeHandle
				resizeHandleClassName={'rtt-modal-resize-handle resize-handle'}
			/>
			<RttResultsTable/>
			<TestButtonContainer
				testButtonContainerClassName={'rtt-test-button-container'}
			>
				<TestButtonForm
					testButtonFormClassName={'rtt-test-button-form'}
					testButtonFormOnClick={handleRttTestButtonFormClick}
					testButtonWaitingMessageContainerClassName={'rtt-test-button-waiting-message-container'}
					testButtonWaitingMessageClassName={'rtt-test-button-waiting-message'}
					testButtonWaitingMessageText={'Get ready and...'}
				>
					<AquaButton
						aquaButtonClassName={'rtt-test-button'}
						aquaButtonOnClick={handleRttTestButtonClick}
						aquaButtonOnTransitionEnd={handleRttTestButtonTransitionEnd}
					>
						<AquaButtonText
							aquaButtonTextClassName={'rtt-test-button-text'}
							aquaButtonText={'Click here to get started!'}
						/>
					</AquaButton>
				</TestButtonForm>
				<InstructionsButton
					instructionsButtonClassName={'rtt-test-instructions-button-container'}
					onClickFunction={modalOpen}
					infoButtonSvgId={'rtt-test-info-icon'}
					infoButtonPathFillColor={'transparent'}
					infoButtonFontColor={'white'}
				/>
			</TestButtonContainer>
			{modals.modalRttAnticheatOpen && modals.modalRttContainerOpen && <ModalRttAnticheat/>}
		</Window>
	);
};
