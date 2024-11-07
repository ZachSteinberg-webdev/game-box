import React, {useState, useContext, useRef} from 'react';

import {UserContext} from '../../contexts/UserContext.jsx';

import useHandleUsernameChange from '../../customHooks/stateChangeHandlers/useHandleUsernameChange.jsx';
import useHandlePasswordChange from '../../customHooks/stateChangeHandlers/useHandlePasswordChange.jsx';
import useHandleUsernameChangeSubmit from '../../customHooks/formSubmissionHandlers/useHandleUsernameChangeSubmit.jsx';
import useHandlePasswordChangeSubmit from '../../customHooks/formSubmissionHandlers/useHandlePasswordChangeSubmit.jsx';
import useHandleUserPreferenceChange from '../../customHooks/formSubmissionHandlers/useHandleUserPreferenceChange.jsx';

import '../../css/windowPieces/SpPreferencePaneAccount.css';

export default function SpPreferencePaneAccount(){
	const {user, setUser}=useContext(UserContext);
	const [username, setUsername]=useState('');
	const [currentUsername, setCurrentUsername] = useState(user.username);
	const currentUsernameFromLocalStorage=JSON.parse(localStorage.getItem('username'));
	const [password, setPassword]=useState({oldPassword: '', newPassword:''});
	const {oldPassword, newPassword}=password;
	const handleUsernameChange=(name)=>(e)=>{useHandleUsernameChange(name, e, user, setUser, setUsername)};
	const handleUsernameChangeSubmit=(e)=>{useHandleUsernameChangeSubmit(e, username, setUser, setUsername, setCurrentUsername)};
	const handlePasswordChange=(name)=>(e)=>{useHandlePasswordChange(name, e, password, setPassword)};
	const handlePasswordChangeSubmit=(e)=>{useHandlePasswordChangeSubmit(e, oldPassword, newPassword, setUser, setPassword)};
	const handleUserPreferenceChange=(name)=>(e)=>{useHandleUserPreferenceChange(name, e, setUser)};
	return(
		<div
			className='sp-window-preference-pane-account'
			id='sp-window-preference-pane-account'
		>
			<p
				className='sp-window-preference-pane-item-account'
				id='sp-window-preference-pane-account-username'
			>
				Account name: {currentUsername?currentUsername:currentUsernameFromLocalStorage}
			</p>
			<p
				className='sp-window-preference-pane-item-account'
				id='sp-window-preference-pane-account-created'
			>
				Account first created: {new Date(user.createdAt).toLocaleDateString()} at {new Date(user.createdAt).toLocaleTimeString()}
			</p>
			<p
				className='sp-window-preference-pane-item-account'
				id='sp-window-preference-pane-account-updated'
			>
				Account last updated: {new Date(user.updatedAt).toLocaleDateString()} at {new Date(user.updatedAt).toLocaleTimeString()}
			</p>
			<hr className='sp-window-preference-pane-hr'/>
			<form
				className='sp-window-preference-pane-item-account'
				id='sp-window-preference-pane-account-username-update-form'
				onSubmit={handleUsernameChangeSubmit}
			>
				<p
					className='sp-window-preference-pane-item-account-form-title'
					id='sp-window-preference-pane-account-update-username-title'
				>
					Update your username
				</p>
				<div
					className='sp-window-preference-pane-item-account'
					id='sp-window-preference-pane-label-input-group'
				>
					<label
						className='sp-window-preference-pane-account-input-label'
						id='sp-window-preference-pane-account-input-label-update-username'
						htmlFor='sp-window-preference-pane-account-input-username'
					>
						Username:
					</label>
					<input
						className='sp-window-preference-pane-account-input'
						id='sp-window-preference-pane-account-input-username'
						type='text'
						name='username'
						value={username}
						onChange={handleUsernameChange('username')}
					/>
				</div>
				<p
					className='sp-window-preference-pane-item-account-change-username-message'
					id='sp-window-preference-pane-account-username-change-message'
				>
				</p>
				<button
					className='sp-window-preference-pane-button-account'
					id='sp-window-preference-pane-button-account-username'
					type='submit'
				>
				Update
				</button>
			</form>
			<hr className='sp-window-preference-pane-hr'/>
			<form
				className='sp-window-preference-pane-item-account'
				id='sp-window-preference-pane-account-password-update-form'
				onSubmit={handlePasswordChangeSubmit}
			>
				<p
					className='sp-window-preference-pane-item-account-form-title'
					id='sp-window-preference-pane-account-update-password-title'
				>
					Change your password
				</p>
				<div
					className='sp-window-preference-pane-item-account'
					id='sp-window-preference-pane-label-input-group'
				>
					<label
						className='sp-window-preference-pane-account-input-label'
						id='sp-window-preference-pane-account-input-label-update-password-old'
						htmlFor='sp-window-preference-pane-account-input-password-old'
					>
						Old password:
					</label>
					<input
						className='sp-window-preference-pane-account-input'
						id='sp-window-preference-pane-account-input-password-old'
						type='password'
						name='oldPassword'
						value={password.oldPassword}
						onChange={handlePasswordChange('oldPassword')}
					/>
				</div>
				<div
					className='sp-window-preference-pane-item-account'
					id='sp-window-preference-pane-label-input-group'
				>
					<label
						className='sp-window-preference-pane-account-input-label'
						id='sp-window-preference-pane-account-input-label-update-password-new'
						htmlFor='sp-window-preference-pane-account-input-password-new'
					>
						New password:
					</label>
					<input
						className='sp-window-preference-pane-account-input'
						id='sp-window-preference-pane-account-input-password-new'
						type='password'
						name='newPassword'
						value={password.newPassword}
						onChange={handlePasswordChange('newPassword')}
					/>
				</div>
				<p
					className='sp-window-preference-pane-item-account-change-password-message'
					id='sp-window-preference-pane-account-password-change-message'
				>
				</p>
				<button
					className='sp-window-preference-pane-button-account'
					id='sp-window-preference-pane-button-account-password'
					type='submit'
				>
				Change
				</button>
			</form>
			<form
				id='sp-window-preference-pane-account-show-in-menubar-form'
			>
				<input
					className='sp-window-preference-pane-account-input'
					id='sp-window-preference-pane-account-input-show-in-menubar'
					type='checkbox'
					name='accountInMenubar'
					checked={user.showAccountInMenubar}
					onChange={handleUserPreferenceChange('accountInMenubar')}
				/>
				<label
					className='sp-window-preference-pane-account-input-label'
					id='sp-window-preference-pane-account-label-show-in-menubar'
					htmlFor='sp-window-preference-pane-account-input-show-in-menubar'
					name='accountInMenubar'
				>
					Show your user account name in the menubar
				</label>
			</form>
		</div>
	);
};
