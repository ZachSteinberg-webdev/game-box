import React, {useState, useEffect, useContext, useRef} from 'react';
import {createPortal} from 'react-dom';
import {useWindowSize} from '@react-hook/window-size';

import {ModalContext} from '../../contexts/ModalContext.jsx';
import {UserContext} from '../../contexts/UserContext.jsx';
import {ScContext} from '../../contexts/ScContext.jsx';

import Window from '../commonComponents/Window.jsx';
import Titlebar from '../commonComponents/Titlebar.jsx';
import TitlebarLefthandButtons from '../commonComponents/TitlebarLefthandButtons.jsx';
import TitlebarTitle from '../commonComponents/TitlebarTitle.jsx';
import TitlebarRighthandButton from '../commonComponents/TitlebarRighthandButton.jsx';
import ResizeHandle from '../commonComponents/ResizeHandle.jsx';
import InstructionsButton from '../commonComponents/InstructionsButton.jsx';
import ScResultsTable from '../windowScComponents/ScResultsTable.jsx';
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
import useHandleScTestSetup from '../../customHooks/eventListeners/useHandleScTestSetup.jsx';
import useHandleScTestButtonClick from '../../customHooks/eventListeners/useHandleScTestButtonClick.jsx';

import '../../css/windows/WindowScContainer.css';

export default function WindowScContainer(){
	const [width, height]=useWindowSize();
	const {
		windowModalOrdering,
		setWindowModalOrdering,
		appOrdering,
		setAppOrdering,
		appModalOrdering,
		setAppModalOrdering,
		modals,
		setModals,
		modalShowClasses,
		setModalShowClasses
	}=useContext(ModalContext);
	const {user, setUser}=useContext(UserContext);
	const {scValues, setScValues}=useContext(ScContext);
	const modalOpen=(e)=>{useModalOpen(
		'ModalScInstructions',
		windowModalOrdering.openWindowsModals,
		setWindowModalOrdering.setOpenWindowsModals,
		appModalOrdering.openScModals,
		setAppModalOrdering.setOpenScModals,
		setModals.setModalScInstructionsOpen,
		setModalShowClasses.setModalScInstructionsOpenShowClass,
		'sc-test-instructions-container-in-use'
	)};
	const windowClose=(e)=>{useWindowClose('.sc-test-container')};
	const windowMinimize=(e)=>{useWindowMinimize('.sc-test-container')};
	const windowMaximize=(e)=>{useWindowMaximize('.sc-test-container')};
	const scContainer=document.querySelector('#WindowScContainer');
	useEffect(()=>{
		useHandleScTestSetup(
			setUser,
			scValues,
			setScValues,
			setModals,
			setModalShowClasses,
			appOrdering,
			setAppOrdering,
			appModalOrdering,
			setAppModalOrdering
		);
		// Including useHandleScTestSetup statement above in useEffect block causes problem in development
		// but is needed in production or else test setup code does not run until ScTest window is closed
		return()=>{
			useHandleScTestSetup(
				setUser,
				scValues,
				setScValues,
				setModals,
				setModalShowClasses,
				appOrdering,
				setAppOrdering,
				appModalOrdering,
				setAppModalOrdering
			);
		};
	},[]);
	return(
		<Window
			windowClassName={`window-modal-container window-container sc-test-container ${modalShowClasses.modalScContainerOpenShowClass}`}
			windowId={'WindowScContainer'}
		>
			<Titlebar
				titlebarClassName={'sc-modal-title-bar sc-test-title-container drag-handle'}
			>
				<TitlebarLefthandButtons
					lefthandButtonsContainerClassName={'sc-test-window-lefthand-buttons-container'}
					closeButtonClassName={'sc-test-window-button sc-test-window-close-button'}
					closeButtonId={'sc-test-window-close-button'}
					closeButtonEnabled={true}
					minimizeButtonClassName={'sc-test-window-button sc-test-window-minimize-button'}
					minimizeButtonId={'sc-test-window-minimize-button'}
					minimizeButtonEnabled={true}
					maximizeButtonClassName={'sc-test-window-button sc-test-window-maximize-button'}
					maximizeButtonId={'sc-test-window-maximize-button'}
					maximizeButtonEnabled={true}
					windowQuerySelector={'.sc-test-container'}
				/>
				<TitlebarTitle
					titleClassName={'sc-test-title'}
					title={'Speed Clicker'}
				/>
				<TitlebarRighthandButton
					righthandButtonContainerClassName={'sc-test-window-righthand-button-container'}
					righthandButtonClassName={'sc-test-window-righthand-button'}
				/>
			</Titlebar>
			<ResizeHandle
				resizeHandleClassName={'sc-modal-resize-handle resize-handle'}
			/>
			<ScResultsTable/>
			<TestButtonContainer
				testButtonContainerClassName={'sc-test-button-container'}
			>
				<TestButtonForm
					testButtonFormClassName={'sc-test-button-form'}
					testButtonWaitingMessageContainerClassName={'sc-test-button-waiting-message-container'}
					testButtonWaitingMessageClassName={'sc-test-button-waiting-message'}
					testButtonWaitingMessageText={'Round finished!'}
				>
					<AquaButton
						aquaButtonClassName={'sc-test-button'}
					>
						<AquaButtonText
							aquaButtonTextClassName={'sc-test-button-text'}
							aquaButtonText={'Click here to get started!'}
						/>
					</AquaButton>
				</TestButtonForm>
				<InstructionsButton
					instructionsButtonClassName={'sc-test-instructions-button-container'}
					onClickFunction={modalOpen}
					infoButtonSvgId={'sc-test-info-icon'}
					infoButtonPathFillColor={'transparent'}
					infoButtonFontColor={'white'}
				/>
			</TestButtonContainer>
		</Window>
	);
};
