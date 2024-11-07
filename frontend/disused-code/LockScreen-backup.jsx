import React, {useContext} from 'react';

import {ModalContext} from '../../contexts/ModalContext.jsx';

// import useHandleSleepScreenClick from '../../customHooks/eventListeners/useHandleSleepScreenClick.jsx';

import '../../css/Desktop/LockScreen.css';

export default function SleepScreen(){
	const {
		modals,
		setModals,
		modalShowClasses,
		setModalShowClasses
	}=useContext(ModalContext);
	// const handleSleepScreenClick=(e)=>{useHandleSleepScreenClick(
	// 	e,
	// 	setModals.setModalSleepScreenOpen,
	// 	setModalShowClasses.setModalSleepScreenOpenShowClass
	// )};
	return(
		<div
			className={`lock-screen ${modalShowClasses.modalLockScreenOpenShowClass}`}
		>
			<form
				className='lock-screen-unlock-form'
			>
			</form>
		</div>
	);
};
