import React, {useState, useEffect, useContext, useCallback} from 'react';
import {useNavigate} from 'react-router-dom';

import {ModalContext} from '../../contexts/ModalContext.jsx';
import {UserContext} from '../../contexts/UserContext.jsx';
import {RttContext} from '../../contexts/RttContext.jsx';
import {OtwContext} from '../../contexts/OtwContext.jsx';

import Spinner from '../spinner/Spinner.jsx';
import Background from './Background.jsx';
import Menubar from './Menubar.jsx';
import ModalAboutSystem from '../modals/ModalAboutSystem.jsx';
import ModalForceQuit from '../modals/ModalForceQuit.jsx';
// Reaction Time Test
import WindowRttContainer from '../windows/WindowRttContainer.jsx';
import ModalAboutReactionTimeTest from '../modals/ModalAboutReactionTimeTest.jsx';
import ModalRttRestartConfirmation from '../modals/ModalRttRestartConfirmation.jsx';
import ModalRttInstructions from '../modals/ModalRttInstructions.jsx';
import ModalRttResultHistory from '../modals/ModalRttResultHistory.jsx';
// Speed Clicker
import WindowScContainer from '../windows/WindowScContainer.jsx';
import ModalAboutSpeedClicker from '../modals/ModalAboutSpeedClicker.jsx';
import ModalScInstructions from '../modals/ModalScInstructions.jsx';
import ModalScResultHistory from '../modals/ModalScResultHistory.jsx';
// Off The Wall
import WindowOtwContainer from '../windows/WindowOtwContainer.jsx';
import ModalOtwGameStartDialog from '../modals/ModalOtwGameStartDialog.jsx';
import ModalOtwGamePauseDialog from '../modals/ModalOtwGamePauseDialog.jsx';
import ModalOtwGameEndDialog from '../modals/ModalOtwGameEndDialog.jsx';
import ModalAboutOffTheWall from '../modals/ModalAboutOffTheWall.jsx';
import ModalOtwInstructions from '../modals/ModalOtwInstructions.jsx';
import ModalOtwResultHistory from '../modals/ModalOtwResultHistory.jsx';
// System Preferences
import WindowSpContainer from '../windows/WindowSpContainer.jsx';
// Dock
import DockActivator from './DockActivator.jsx';
import DockDeactivator from './DockDeactivator.jsx';
import Dock from './Dock.jsx';
// Sleep Screen
import SleepScreen from './SleepScreen.jsx';

import useHandleBodyClick from '../../customHooks/eventListeners/useHandleBodyClick.jsx';
import useHandleKeyboardShortcuts from '../../customHooks/eventListeners/useHandleKeyboardShortcuts.jsx';

import '../../css/Desktop/Desktop.css';

export default function Desktop(){
	const navigate=useNavigate();
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
		setModalShowClasses,
		setMenubars,
		panesOpen,
		setPanesOpen,
		windowSizing
	}=useContext(ModalContext);
	const {user, setUser}=useContext(UserContext);
	const {rttValues, setRttValues}=useContext(RttContext);
	const {otwValues, setOtwValues}=useContext(OtwContext);
	const body=document.querySelector('body');
	const handleBodyClick=useCallback((e)=>useHandleBodyClick(
			e,
			body,
			windowModalOrdering.openWindowsModals,
			setWindowModalOrdering.setOpenWindowsModals,
			appOrdering.openApps,
			setAppOrdering.setOpenApps,
			appModalOrdering,
			setAppModalOrdering
	),[]);
	const handleKeyboardShortcuts=useCallback((e)=>useHandleKeyboardShortcuts(
		e,
		setUser,
		navigate,
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
	),[appOrdering]);
	useEffect(()=>{
		document.addEventListener('keypress', handleKeyboardShortcuts);
		body.addEventListener('mousedown', handleBodyClick);
		return()=>{
			document.removeEventListener('keypress', handleKeyboardShortcuts);
			body.removeEventListener('mousedown', handleBodyClick);
		};
	},[modals, appOrdering.openApps, appModalOrdering]);
	return(
		<>
			<Spinner
				spinnerClassName={'desktop-spinner'}
			/>
			<Background/>
			<Menubar/>
			{/* System Modals */}
			{modals.modalAboutSystemOpen && <ModalAboutSystem/>}
			{modals.modalForceQuitOpen && <ModalForceQuit/>}
			{/* Reaction Time Test */}
			{modals.modalRttContainerOpen && <WindowRttContainer/>}
			{modals.modalAboutReactionTimeTestOpen && modals.modalRttContainerOpen && <ModalAboutReactionTimeTest/>}
			{modals.modalRttRestartConfirmationOpen && modals.modalRttContainerOpen && <ModalRttRestartConfirmation/>}
			{modals.modalRttInstructionsOpen && modals.modalRttContainerOpen && <ModalRttInstructions/>}
			{modals.modalRttResultHistoryOpen && modals.modalRttContainerOpen && <ModalRttResultHistory/>}
			{/* Speed Clicker */}
			{modals.modalScContainerOpen && <WindowScContainer/>}
			{modals.modalAboutSpeedClickerOpen && modals.modalScContainerOpen && <ModalAboutSpeedClicker/>}
			{modals.modalScInstructionsOpen && modals.modalScContainerOpen && <ModalScInstructions/>}
			{modals.modalScResultHistoryOpen && modals.modalScContainerOpen && <ModalScResultHistory/>}
			{/* Off The Wall */}
			{modals.modalOtwContainerOpen && <WindowOtwContainer/>}
			{modals.modalAboutOffTheWallOpen && <ModalAboutOffTheWall/>}
			{modals.modalOtwInstructionsOpen && <ModalOtwInstructions/>}
			{modals.modalOtwResultHistoryOpen && <ModalOtwResultHistory/>}
			{/* System Preferences */}
			{modals.modalSpContainerOpen && <WindowSpContainer/>}
			<DockActivator/>
			<DockDeactivator/>
			<Dock/>
			{/* Sleep Screen */}
			{modals.modalSleepScreenOpen && <SleepScreen/>}
		</>
	);
};
