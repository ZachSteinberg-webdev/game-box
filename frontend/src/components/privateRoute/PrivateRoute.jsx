import React from 'react';
import {Route, Navigate} from 'react-router-dom';

export default function PrivateRoute({children}){
	const auth = localStorage.getItem('token');
	if(auth){
		return <>{children}</>
	}else{
		return <Navigate to='/login'/>;
	};
};
