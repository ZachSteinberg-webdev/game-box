import React, {useState, useContext, useRef} from 'react';
import {useWindowSize} from '@react-hook/window-size';

import {ModalContext} from '../../contexts/ModalContext.jsx';

import useHandleDockIconClick from '../../customHooks/eventListeners/useHandleDockIconClick.jsx';

import '../../css/Desktop/DockIcon.css';

export default function DockIcon({
	dockIconContainerClassName,
	dockIconButtonClassName,
	dockIconClassName,
	modalContextName
}){
	const [width, height]=useWindowSize();
	const {
		windowModalOrdering,
		setWindowModalOrdering,
		appOrdering,
		setAppOrdering,
		menubars,
		setMenubars,
		modals,
		setModals,
		modalShowClasses,
		setModalShowClasses,
		windowSizing,
		setWindowSizing
	}=useContext(ModalContext);
	const handleDockIconClick=(e)=>{useHandleDockIconClick(
		e,
		windowModalOrdering,
		setWindowModalOrdering,
		appOrdering,
		setAppOrdering,
		menubars,
		setMenubars,
		modals,
		setModals,
		setModalShowClasses,
		windowSizing,
		setWindowSizing
	)};
	return(
		<div
			className={dockIconContainerClassName}
		>
			<button
				className={dockIconButtonClassName}
				tabIndex='-1'
				onClick={handleDockIconClick}
			>
				<div
					className={dockIconClassName}
				>
				</div>
			</button>
			<div
				className='dock-icon-app-running-indicator'
			>
				{modals[modalContextName]?'▴':''}
			</div>
		</div>
	);
};
