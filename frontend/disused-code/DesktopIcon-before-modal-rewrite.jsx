import React, {useState, useContext, useRef} from 'react';
// import Draggable from 'react-draggable';
import {useWindowSize} from '@react-hook/window-size';

import {ModalContext} from '../../contexts/ModalContext.jsx';

import useHandleDesktopIconSingleClick from '../../customHooks/eventListeners/useHandleDesktopIconSingleClick.jsx';
import useHandleDesktopIconDoubleClick from '../../customHooks/eventListeners/useHandleDesktopIconDoubleClick.jsx';

import '../../css/Desktop/DesktopIcon.css';

export default function DesktopIcon({
	desktopIconContainerClassName,
	desktopIconButtonClassName,
	desktopIconClassName,
	desktopIconTitleClassName,
	desktopIconTitleText
}){
	// const nodeRef=useRef(null);
	const [width, height]=useWindowSize();
	// const [draggableKey, setDraggableKey]=useState(0);
	const {
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
	const handleDesktopIconSingleClick=(e)=>{useHandleDesktopIconSingleClick(e)};
	const handleDesktopIconDoubleClick=(e)=>{useHandleDesktopIconDoubleClick(
		e,
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
			className={desktopIconContainerClassName}
		>
			<button
				className={`drag-handle ${desktopIconButtonClassName}`}
				tabIndex="-1"
				onMouseDown={handleDesktopIconSingleClick}
				onDoubleClick={handleDesktopIconDoubleClick}
			>
				<div
					className={desktopIconClassName}
					/*onMouseDown={handleDesktopIconSingleClick}*/
					/*onDoubleClick={handleDesktopIconDoubleClick}*/
				>
				</div>
				<div
					className={desktopIconTitleClassName}
					/*onMouseDown={handleDesktopIconSingleClick}*/
					/*onDoubleClick={handleDesktopIconDoubleClick}*/
				>
					{desktopIconTitleText}
				</div>
			</button>
		</div>
	);
};
