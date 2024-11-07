import React, {useState, useContext} from 'react';

import {UserContext} from '../../contexts/UserContext.jsx';

import AccountIcon from '../Icons/AccountIcon.jsx';

export default function MenubarAccountName({
	menubarButtonContainerId,
	menubarButtonId,
	menubarButtonOnClick
}){
	const {user, setUser}=useContext(UserContext);
	return(
		<div
			className='menubar-button-container account-icon-container'
			id={menubarButtonContainerId}
		>
			<div
				className='menubar-button menubar-account-icon-and-account-name'
				id={menubarButtonId}
				onClick={menubarButtonOnClick}
			>
				<AccountIcon
					accountIconClassName='menubar-account-icon'
				/>
				<div
					id='menubar-account-name'
				>
					{user.username}
				</div>
			</div>
		</div>
	);
};
