import React, {useEffect, useContext} from 'react';

import {ModalContext} from '../../contexts/ModalContext.jsx';
import {UserContext} from '../../contexts/UserContext.jsx';

import useClockSetupOnLoad from '../../customHooks/eventListeners/useClockSetupOnLoad.jsx';

export default function MenubarClock({
	children,
	clockContainerId,
	clockId,
	menubarButtonOnClick
}){
	const {user, setUser}=useContext(UserContext);
	const {
		modals,
		setModals,
		modalShowClasses,
		setModalShowClasses,
		panesOpen,
		setPanesOpen
	}=useContext(ModalContext);
	useEffect(()=>{
		useClockSetupOnLoad();
	},[user, panesOpen.timePaneOpen]);
	return(
		<>
			<div
				className='menubar-button-container clock-container'
				id={clockContainerId}
			>
				<div
					className='menubar-button clock'
					id={clockId}
					onClick={menubarButtonOnClick}
				>
					{user.showDayName && <div className='day-name'></div>}
					{user.showDayName && user.showMonthName && <div className='day-month-separator'>,</div>}
					{user.showDayName && <div className='day-name-separator'>&nbsp;</div>}
					{user.showMonthName && <div className='month-name'></div>}
					{user.showMonthName && <div className='month-day-separator'>&nbsp;</div>}
					{user.showDay && <div className='day'>00</div>}
					{user.showDay && user.showYear && <div className='day-year-comma'>,</div>}
					{user.showDay && <div className='day-year-separator'>&nbsp;</div>}
					{user.showYear && <div className='year'>0000</div>}
					{user.showYear && <div className='year-hour-separator'>&nbsp;</div>}
					{!user.show24HourClock && <div className='hour-12'>00</div>}
					{user.show24HourClock && <div className='hour-24'>00</div>}
					<div className='hour-minute-separator'>:</div>
					<div className='minute'>00</div>
					{user.showSeconds && <div className='minute-second-separator'>:</div>}
					{user.showSeconds && <div className='second'>00</div>}
					{user.showPeriod && <div className='second-period-separator'>&nbsp;</div>}
					{user.showPeriod && !user.show24HourClock && <div className='period'>AM</div>}
				</div>
			</div>
			{children}
		</>
	);
};
