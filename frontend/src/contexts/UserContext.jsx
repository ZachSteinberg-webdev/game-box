import React, {useState, createContext, useContext, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

import useGetUser from '../customHooks/dataFetchers/useGetUser.jsx';
import {
	isGuestSessionActive,
	getStoredGuestProfile,
	persistGuestProfile,
	buildGuestProfile
} from '../customHooks/helperFunctions/guestSession.js';

export const UserContext=createContext();

export const UserContextProvider=({children})=>{
	const navigate = useNavigate();
	const [user, setUserState]=useState(buildGuestProfile());
	const [isGuest, setIsGuest]=useState(isGuestSessionActive());
	const setUser=(value)=>{
		setUserState((currentValue)=>{
			const nextValue=typeof value==='function'?value(currentValue):value;
			const guestActive=isGuestSessionActive() || nextValue?.isGuest;
			if(guestActive){
				persistGuestProfile(nextValue);
				setIsGuest(true);
			}else{
				if(typeof window!=='undefined'){
					if(nextValue?.username){
						localStorage.setItem('username', JSON.stringify(nextValue.username));
					};
					if(nextValue?.wallpaper){
						localStorage.setItem('wallpaper', JSON.stringify(nextValue.wallpaper));
					};
				};
				setIsGuest(false);
			};
			return nextValue;
		});
	};
	useEffect(()=>{
		const token=typeof window!=='undefined'?localStorage.getItem('token'):null;
		if(token){
			setIsGuest(false);
			useGetUser(setUser, navigate);
			return;
		};
		const storedGuestProfile=getStoredGuestProfile();
		if(storedGuestProfile){
			setIsGuest(true);
			setUser(storedGuestProfile);
			return;
		};
		navigate('/login');
	},[]);
	return(
		<UserContext.Provider
			value={{user, setUser, isGuest}}
		>
			{children}
		</UserContext.Provider>
	);
};
