import React from 'react';
import {Route, Navigate} from 'react-router-dom';
import {isGuestSessionActive, getStoredGuestProfile} from '../../customHooks/helperFunctions/guestSession.js';

export default function PrivateRoute({children}){
	const auth = localStorage.getItem('token');
	const tokenValid = auth && auth !== 'null' && auth !== 'undefined';
	const guestActive = isGuestSessionActive() || getStoredGuestProfile();
	if(tokenValid || guestActive){
		return <>{children}</>
	}else{
		return <Navigate to='/login'/>;
	};
};
