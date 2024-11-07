import React, {useState, useEffect, useContext} from 'react';
import {useNavigate, Link} from 'react-router-dom';
import axios from 'axios';

import {ModalContext} from '../contexts/ModalContext.jsx';

import BackgroundImageLogin from '../components/Desktop/BackgroundImageLogin.jsx';
import SleepIcon from '../components/Icons/SleepIcon.jsx';
import RestartIcon from '../components/Icons/RestartIcon.jsx';
import ShutdownIcon from '../components/Icons/ShutdownIcon.jsx';
import HomeIcon from '../components/Icons/HomeIcon.jsx';
import SleepScreen from '../components/Desktop/SleepScreen.jsx';
import Spinner from '../components/spinner/Spinner.jsx';

import pearIconSilver from '../assets/pear-icon-with-bite-silver.png';

import useHandleUserChange from '../customHooks/stateChangeHandlers/useHandleUserChange.jsx';
import useHandleLoginSubmit from '../customHooks/formSubmissionHandlers/useHandleLoginSubmit.jsx';
import useHandleSleep from '../customHooks/helperFunctions/useHandleSleep.jsx';
import useHandleShutdownRestartFromLoginRegister from '../customHooks/helperFunctions/useHandleShutdownRestartFromLoginRegister.jsx';

import '../css/pages/Login.css';

export default function Login(){
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
	const handleLoginSubmit=(e)=>{useHandleLoginSubmit(e, username, password, setUser, navigate)};
	const showLoginForm=()=>{
		const loginForm=document.querySelector('#login-form');
		loginForm.classList.add('login-form-after-load');
	};
	const handleSleep=(e)=>{useHandleSleep(setModals, setModalShowClasses)};
	const handleShutdownRestart=(e)=>{useHandleShutdownRestartFromLoginRegister(
		e,
		navigate,
		setModals,
		setModalShowClasses
	)};
	useEffect(()=>{
		showLoginForm();
	});
	return(
		<>
			<div id='login-page'>
				<BackgroundImageLogin/>
				<form className='login-form' id='login-form' onSubmit={handleLoginSubmit}>
					<img id='login-form-pear-icon' src={pearIconSilver}/>
					<p id='login-form-header'>
						Pear OS
					</p>
					<div id='login-inputs-container'>
						<div className='login-input-label-container'>
							<label
								className='login-input-label'
								htmlFor='login-input-username'
							>
								Username:
							</label>
							<input
								className='login-input'
								id='login-input-username'
								type='text'
								name='username'
								value={username}
								autoFocus={true}
								onChange={handleUserChange('username')}
							/>
						</div>
						<p
							className='login-message'
							id='login-message-username'
						>
						</p>
						<div className='login-input-label-container'>
							<label
								className='login-input-label'
								htmlFor='login-input-password'
							>
								Password:
							</label>
							<input
								className='login-input'
								id='login-input-password'
								type='password'
								name='password'
								value={password}
								onChange={handleUserChange('password')}
							/>
						</div>
						<p
							className='login-message'
							id='login-message-password'
						>
						</p>
					</div>
					<div
						id='login-form-button-set-container'
					>
						<div
							className='login-button-label-container'
							id='sleep-button-label-container'
						>
							<button
								className='login-button'
								id='sleep-button'
								type='button'
								onClick={handleSleep}
							>
								<SleepIcon/>
							</button>
							<p
								className='login-button-label'
								id='sleep-button-label'
							>
							Sleep
							</p>
						</div>
						<div
							className='login-button-label-container'
							id='restart-button-label-container'
						>
							<button
								className='login-button'
								id='restart-button'
								type='button'
								onClick={handleShutdownRestart}
							>
								<RestartIcon/>
							</button>
							<p
								className='login-button-label'
								id='restart-button-label'
							>
							Restart
							</p>
						</div>
						<div
							className='login-button-label-container'
							id='shutdown-button-label-container'
						>
							<button
								className='login-button'
								id='shutdown-button'
								type='button'
								onClick={handleShutdownRestart}
							>
								<ShutdownIcon/>
							</button>
							<p
								className='login-button-label'
								id='shutdown-button-label'
							>
							Shutdown
							</p>
						</div>
						<div
							className='login-button-label-container'
							id='register-button-label-container'
						>
							<button
								className='login-button'
								id='login-button'
								type='submit'
							>
								<HomeIcon/>
							</button>
							<p
								className='login-button-label'
								id='register-button-label'
							>
							Log In
							</p>
						</div>
					</div>
				</form>
				<div
					className='registration-link-container'
				>
					<p
						className='registration-link-text'
					>
						Don't have an account? Register <Link to='/register' className='registration-link'>here</Link>.</p>
				</div>
			</div>
			{modals.modalSleepScreenOpen && <SleepScreen/>}
			<Spinner
				spinnerClassName={'spinner'}
			/>
		</>
	);
};
