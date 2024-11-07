import React, {useState, useContext} from 'react';
import {useNavigate, Link} from 'react-router-dom';
import axios from 'axios';

import {ModalContext} from '../contexts/ModalContext.jsx';

import BackgroundImageRegister from '../components/Desktop/BackgroundImageRegister.jsx';
import SleepIcon from '../components/Icons/SleepIcon.jsx';
import RestartIcon from '../components/Icons/RestartIcon.jsx';
import ShutdownIcon from '../components/Icons/ShutdownIcon.jsx';
import HomeIcon from '../components/Icons/HomeIcon.jsx';
import SleepScreen from '../components/Desktop/SleepScreen.jsx';
import Spinner from '../components/spinner/Spinner.jsx';

import pearIconSilver from '../assets/pear-icon-with-bite-silver.png';

import useHandleUserChange from '../customHooks/stateChangeHandlers/useHandleUserChange.jsx';
import useHandleRegistrationSubmit from '../customHooks/formSubmissionHandlers/useHandleRegistrationSubmit.jsx';
import useHandleSleep from '../customHooks/helperFunctions/useHandleSleep.jsx';
import useHandleShutdownRestartFromLoginRegister from '../customHooks/helperFunctions/useHandleShutdownRestartFromLoginRegister.jsx';

import '../css/pages/Register.css';

export default function Register(){
	const navigate=useNavigate();
	const [user, setUser] = useState({username: '', password:''});
	const {username, password} = user;
	const {
		appOrdering,
		setAppOrdering,
		appModalOrdering,
		setAppModalOrdering,
		menubars,
		setMenubars,
		modals,
		setModals,
		modalShowClasses,
		setModalShowClasses,
		windowSizing,
		setWindowSizing,
		panesOpen,
		setPanesOpen
	}=useContext(ModalContext);
	const handleUserChange=(name)=>(e)=>{useHandleUserChange(name, e, user, setUser)};
	const handleRegistrationSubmit=(e)=>{useHandleRegistrationSubmit(e, username, password, setUser, navigate)};
	const handleSleep=(e)=>{useHandleSleep(setModals, setModalShowClasses)};
	const handleShutdownRestart=(e)=>{useHandleShutdownRestartFromLoginRegister(
		e,
		navigate,
		setModals,
		setModalShowClasses
	)};
	return(
		<>
			<div id='registration-page'>
				<BackgroundImageRegister/>
				<form id='registration-form' onSubmit={handleRegistrationSubmit}>
					<img id='registration-form-pear-icon' src={pearIconSilver}/>
					<p id='registration-form-header'>
						Pear OS
					</p>
					<div id='registration-inputs-container'>
						<div className='registration-input-label-container'>
							<label
								className='registration-input-label'
								htmlFor='registration-input-username'
							>
								Username:
							</label>
							<input
								className='registration-input'
								id='registration-input-username'
								type='text'
								name='username'
								value={username}
								autoFocus={true}
								onChange={handleUserChange('username')}
							/>
						</div>
						<p
							className='registration-message'
							id='registration-message-username'
						>
						</p>
						<div className='registration-input-label-container'>
							<label
								className='registration-input-label'
								htmlFor='registration-input-password'
							>
								Password:
							</label>
							<input
								className='registration-input'
								id='registration-input-password'
								type='password'
								name='password'
								value={password}
								onChange={handleUserChange('password')}
							/>
						</div>
						<p
							className='registration-message'
							id='registration-message-password'
						>
						</p>
					</div>
					<div
						id='registration-form-button-set-container'
					>
						<div
							className='registration-button-label-container'
							id='sleep-button-label-container'
						>
							<button
								className='registration-button'
								id='sleep-button'
								type='button'
								onClick={handleSleep}
							>
								<SleepIcon/>
							</button>
							<p
								className='registration-button-label'
								id='sleep-button-label'
							>
							Sleep
							</p>
						</div>
						<div
							className='registration-button-label-container'
							id='restart-button-label-container'
						>
							<button
								className='registration-button'
								id='restart-button'
								type='button'
								onClick={handleShutdownRestart}
							>
								<RestartIcon/>
							</button>
							<p
								className='registration-button-label'
								id='restart-button-label'
							>
							Restart
							</p>
						</div>
						<div
							className='registration-button-label-container'
							id='shutdown-button-label-container'
						>
							<button
								className='registration-button'
								id='shutdown-button'
								type='button'
								onClick={handleShutdownRestart}
							>
								<ShutdownIcon/>
							</button>
							<p
								className='registration-button-label'
								id='shutdown-button-label'
							>
							Shutdown
							</p>
						</div>
						<div
							className='registration-button-label-container'
							id='register-button-label-container'
						>
							<button
								className='registration-button'
								id='registration-button'
								type='submit'
							>
								<HomeIcon/>
							</button>
							<p
								className='registration-button-label'
								id='register-button-label'
							>
							Register
							</p>
						</div>
					</div>
				</form>
				<div
					className='login-link-container'
				>
					<p
						className='login-link-text'
					>
						Already have an account? Login <Link to='/login' className='login-link'>here</Link>.
					</p>
				</div>
			</div>
			{modals.modalSleepScreenOpen && <SleepScreen/>}
			<Spinner
				spinnerClassName={'spinner'}
			/>
		</>
	);
};
