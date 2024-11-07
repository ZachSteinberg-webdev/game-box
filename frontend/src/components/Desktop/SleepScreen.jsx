import React, {useContext} from 'react';

import {ModalContext} from '../../contexts/ModalContext.jsx';

import useHandleSleepScreenClick from '../../customHooks/eventListeners/useHandleSleepScreenClick.jsx';

import '../../css/Desktop/SleepScreen.css';

export default function SleepScreen(){
	const {
		modals,
		setModals,
		modalShowClasses,
		setModalShowClasses
	}=useContext(ModalContext);
	const handleSleepScreenClick=(e)=>{useHandleSleepScreenClick(
		e,
		setModals.setModalSleepScreenOpen,
		setModalShowClasses.setModalSleepScreenOpenShowClass
	)};
	return(
		<div
			className={`sleep-screen ${modalShowClasses.modalSleepScreenOpenShowClass}`}
			onClick={handleSleepScreenClick}
		>
		</div>
	);
};
