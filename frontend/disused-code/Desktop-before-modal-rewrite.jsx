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
import WindowRttContainer from '../windows/WindowRttContainer.jsx';
import WindowScContainer from '../windows/WindowScContainer.jsx';
import WindowOtwContainer from '../windows/WindowOtwContainer.jsx';
import WindowSpContainer from '../windows/WindowSpContainer.jsx';
import DockActivator from './DockActivator.jsx';
import DockDeactivator from './DockDeactivator.jsx';
import Dock from './Dock.jsx';
import SleepScreen from './SleepScreen.jsx';

import useHandleBodyClick from '../../customHooks/eventListeners/useHandleBodyClick.jsx';
import useHandleKeyboardShortcuts from '../../customHooks/eventListeners/useHandleKeyboardShortcuts.jsx';

import '../../css/Desktop/Desktop.css';

export default function Desktop(){
	const navigate=useNavigate();
	const {
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
			{modals.modalAboutSystemOpen && <ModalAboutSystem/>}
			{modals.modalForceQuitOpen && <ModalForceQuit/>}
			{modals.modalRttContainerOpen && <WindowRttContainer/>}
			{modals.modalScContainerOpen && <WindowScContainer/>}
			{modals.modalOtwContainerOpen && <WindowOtwContainer/>}
			{modals.modalSpContainerOpen && <WindowSpContainer/>}
			<DockActivator/>
			<DockDeactivator/>
			<Dock/>
			{modals.modalSleepScreenOpen && <SleepScreen/>}
		</>
	);
};
