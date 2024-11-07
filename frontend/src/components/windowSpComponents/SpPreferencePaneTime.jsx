import React, {useEffect, useContext} from 'react';

import {UserContext} from '../../contexts/UserContext.jsx';

import MenubarClock from '../Desktop/MenubarClock.jsx';

import useClockSetupOnLoad from '../../customHooks/eventListeners/useClockSetupOnLoad.jsx';
import useHandleUserPreferenceChange from '../../customHooks/formSubmissionHandlers/useHandleUserPreferenceChange.jsx';

import '../../css/windowPieces/SpPreferencePaneTime.css';

export default function SpPreferencePaneTime(){
	const {user, setUser}=useContext(UserContext);
	const handleUserPreferenceChange=(name)=>(e)=>{useHandleUserPreferenceChange(name, e, setUser)};
	return(
		<div
			className='sp-window-preference-pane-time'
			id='sp-window-preference-pane-time'
		>
			<p
				className='sp-window-preference-pane-time-header'
			>
				Your current menubar clock setup:
			</p>
			<MenubarClock
				clockContainerId={'sp-window-preference-pane-time-clock-container'}
				clockId={'sp-window-preference-pane-time-clock'}
			/>
			<hr
				className='sp-window-preference-pane-time-hr'
			/>
			<form
				className='sp-window-preference-pane-time-show-date-and-time-form'
			>
				<input
					className='sp-window-preference-pane-time-input'
					id='sp-window-preference-pane-time-input-date-and-time'
					type='checkbox'
					name='dateAndTime'
					checked={user.showDateAndTime}
					onChange={handleUserPreferenceChange('dateAndTime')}
				/>
				<label
					className='sp-window-preference-pane-time-label'
					id='sp-window-preference-pane-time-label-date-and-time'
					htmlFor='sp-window-preference-pane-time-input-date-and-time'
					name='seconds'
				>
					Show the date and time in the menubar
				</label>
			</form>
			<div
				className='sp-window-preference-pane-time-header-form-groups-container'
			>
				<div
					className='sp-window-preference-pane-time-header-form-group'
				>
					<p
						className='sp-window-preference-pane-time-header'
					>
						Time options:
					</p>
					<form
						className='sp-window-preference-pane-time-form'
						id='sp-window-preference-pane-time-form-seconds'
					>
						<div
							className='sp-window-preference-pane-time-input-label-group'
							id='sp-window-preference-pane-time-input-label-group-seconds'
						>
							<input
								className='sp-window-preference-pane-time-input'
								id='sp-window-preference-pane-time-input-seconds'
								type='checkbox'
								name='seconds'
								checked={user.showSeconds}
								onChange={handleUserPreferenceChange('seconds')}
							/>
							<label
								className='sp-window-preference-pane-time-label'
								id='sp-window-preference-pane-time-label-seconds'
								htmlFor='sp-window-preference-pane-time-input-seconds'
								name='seconds'
							>
								Show seconds
							</label>
						</div>
						<div
							className='sp-window-preference-pane-time-input-label-group'
							id='sp-window-preference-pane-time-input-label-group-period'
						>
							<input
								className='sp-window-preference-pane-time-input'
								id='sp-window-preference-pane-time-input-period'
								type='checkbox'
								name='period'
								checked={user.showPeriod}
								onChange={handleUserPreferenceChange('period')}
								disabled={user.show24HourClock}
							/>
							<label
								className={`sp-window-preference-pane-time-label ${user.show24HourClock && 'label-disabled'}`}
								id='sp-window-preference-pane-time-label-period'
								htmlFor='sp-window-preference-pane-time-input-period'
								name='period'
							>
								Show AM/PM
							</label>
						</div>
						<div
							className='sp-window-preference-pane-time-input-label-group'
							id='sp-window-preference-pane-time-input-label-group-hour24'
						>
							<input
								className='sp-window-preference-pane-time-input'
								id='sp-window-preference-pane-time-input-hour24'
								type='checkbox'
								name='hour24'
								checked={user.show24HourClock}
								onChange={handleUserPreferenceChange('hour24')}
							/>
							<label
								className='sp-window-preference-pane-time-label'
								id='sp-window-preference-pane-time-label-hour24'
								htmlFor='sp-window-preference-pane-time-input-hour24'
								name='hour24'
							>
								Show 24-hour clock
							</label>
						</div>
					</form>
				</div>
				<div
					className='sp-window-preference-pane-time-header-form-group'
				>
					<p
						className='sp-window-preference-pane-time-header'
						id='sp-window-preference-pane-time-header-date-options'
					>
						Date options:
					</p>
					<form
						className='sp-window-preference-pane-time-form'
						id='sp-window-preference-pane-time-form-seconds'
					>
						<div
							className='sp-window-preference-pane-time-input-label-group'
							id='sp-window-preference-pane-time-input-label-group-day-name'
						>
							<input
								className='sp-window-preference-pane-time-input'
								id='sp-window-preference-pane-time-input-day-name'
								type='checkbox'
								name='dayName'
								checked={user.showDayName}
								onChange={handleUserPreferenceChange('dayName')}
							/>
							<label
								className='sp-window-preference-pane-time-label'
								id='sp-window-preference-pane-time-label-day-name'
								htmlFor='sp-window-preference-pane-time-input-day-name'
								name='dayName'
							>
								Show the name of the day
							</label>
						</div>
						<div
							className='sp-window-preference-pane-time-input-label-group'
							id='sp-window-preference-pane-time-input-label-group-month-name'
						>
							<input
								className='sp-window-preference-pane-time-input'
								id='sp-window-preference-pane-time-input-month-name'
								type='checkbox'
								name='monthName'
								checked={user.showMonthName}
								onChange={handleUserPreferenceChange('monthName')}
							/>
							<label
								className='sp-window-preference-pane-time-label'
								id='sp-window-preference-pane-time-label-month-name'
								htmlFor='sp-window-preference-pane-time-input-month-name'
								name='dayName'
							>
								Show the month name
							</label>
						</div>
						<div
							className='sp-window-preference-pane-time-input-label-group'
							id='sp-window-preference-pane-time-input-label-group-day'
						>
							<input
								className='sp-window-preference-pane-time-input'
								id='sp-window-preference-pane-time-input-day'
								type='checkbox'
								name='day'
								checked={user.showDay}
								onChange={handleUserPreferenceChange('day')}
							/>
							<label
								className='sp-window-preference-pane-time-label'
								id='sp-window-preference-pane-time-label-day'
								htmlFor='sp-window-preference-pane-time-input-day'
								name='day'
							>
								Show the day of the month
							</label>
						</div>
						<div
							className='sp-window-preference-pane-time-input-label-group'
							id='sp-window-preference-pane-time-input-label-group-year'
						>
							<input
								className='sp-window-preference-pane-time-input'
								id='sp-window-preference-pane-time-input-year'
								type='checkbox'
								name='year'
								checked={user.showYear}
								onChange={handleUserPreferenceChange('year')}
							/>
							<label
								className='sp-window-preference-pane-time-label'
								id='sp-window-preference-pane-time-label-year'
								htmlFor='sp-window-preference-pane-time-input-year'
								name='year'
							>
								Show the year
							</label>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
