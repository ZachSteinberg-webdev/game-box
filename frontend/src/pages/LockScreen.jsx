import React, {useState, useEffect} from 'react';
import {useNavigate, Link, Navigate} from 'react-router-dom';
import axios from 'axios';

import BackgroundImageLogin from '../components/Desktop/BackgroundImageLogin.jsx'
import SleepIcon from '../components/Icons/SleepIcon.jsx';
import RestartIcon from '../components/Icons/RestartIcon.jsx';
import ShutdownIcon from '../components/Icons/ShutdownIcon.jsx';
import HomeIcon from '../components/Icons/HomeIcon.jsx';

import pearIconSilver from '../assets/pear-icon-with-bite-silver.png';

import useHandleUserChange from '../customHooks/stateChangeHandlers/useHandleUserChange.jsx';
import useHandleLockscreenSubmit from '../customHooks/formSubmissionHandlers/useHandleLockscreenSubmit.jsx';

import '../css/pages/LockScreen.css';

export default function LockScreen(){
	const navigate=useNavigate();
	const [user, setUser] = useState({username: '', password:''});
	const {username, password} = user;
	const usernameLocalStorage=JSON.parse(localStorage.getItem('username'));
	try{
		if(usernameLocalStorage===null){
			// navigate('/login');
			return <Navigate to='/login'/>;
		};
	}catch(err){
		console.log('usernameLocalStorage error in LockScreen.jsx', err);
	};
	const handleUserChange=(name)=>(e)=>{useHandleUserChange(name, e, user, setUser)};
	const handleLockscreenSubmit=(e)=>{useHandleLockscreenSubmit(e, usernameLocalStorage, password, setUser, navigate)};
	return(
		<div
			className='lock-screen'
		>
			<BackgroundImageLogin/>
			<form id='lockscreen-form' onSubmit={handleLockscreenSubmit}>
				<img id='lockscreen-form-pear-icon' src={pearIconSilver}/>
				<p id='lockscreen-form-header'>
					Pear OS
				</p>
				<div id='lockscreen-inputs-container'>
					<div className='lockscreen-input-label-container'>

						<input
							className='lockscreen-input'
							id='lockscreen-input-username'
							type='text'
							name='username'
							value={usernameLocalStorage}
							autoFocus={true}
							disabled={true}
							onChange={handleUserChange('username')}
						/>
					</div>
					<p
						className='lockscreen-message'
						id='lockscreen-message-username'
					>
					</p>
					<div className='lockscreen-input-label-container'>
						<input
							className='lockscreen-input'
							id='lockscreen-input-password'
							type='password'
							name='password'
							value={password}
							onChange={handleUserChange('password')}
						/>
					</div>
					<p
						className='lockscreen-message'
						id='lockscreen-message-password'
					>
					</p>
				</div>
				<div
					id='lockscreen-form-button-set-container'
				>
					<div
						className='lockscreen-button-label-container'
						id='sleep-button-label-container'
					>
						<button
							className='lockscreen-button'
							id='sleep-button'
							type='button'
						>
							<SleepIcon/>
						</button>
						<p
							className='lockscreen-button-label'
							id='sleep-button-label'
						>
						Sleep
						</p>
					</div>
					<div
						className='lockscreen-button-label-container'
						id='restart-button-label-container'
					>
						<button
							className='lockscreen-button'
							id='restart-button'
							type='button'
						>
							<RestartIcon/>
						</button>
						<p
							className='lockscreen-button-label'
							id='restart-button-label'
						>
						Restart
						</p>
					</div>
					<div
						className='lockscreen-button-label-container'
						id='shutdown-button-label-container'
					>
						<button
							className='lockscreen-button'
							id='shutdown-button'
							type='button'
						>
							<ShutdownIcon/>
						</button>
						<p
							className='lockscreen-button-label'
							id='shutdown-button-label'
						>
						Shutdown
						</p>
					</div>
					<div
						className='lockscreen-button-label-container'
						id='register-button-label-container'
					>
						<button
							className='lockscreen-button'
							id='lockscreen-button'
							type='submit'
						>
							<HomeIcon/>
						</button>
						<p
							className='lockscreen-button-label'
							id='register-button-label'
						>
						Log In
						</p>
					</div>
				</div>
			</form>
		</div>
	);
};
