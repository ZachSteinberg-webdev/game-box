import React, {useState, createContext, useContext, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

import useGetUser from '../customHooks/dataFetchers/useGetUser.jsx';

export const UserContext=createContext();

export const UserContextProvider=({children})=>{
	const navigate = useNavigate();
	const [user, setUser]=useState({
		username:'',
		showDayName: false,
		showDay: false,
		showYear: false,
		showSeconds: false,
		showPeriod: false,
		show24HourClock: false,
		showMonthName: false,
		showDateAndTime: false,
		showAccountInMenubar: false,
		wallpaper: '',
		rttResults: [],
		otwResults: [],
		scResults: [],
		role: 0,
		createdAt: '',
		updatedAt: ''
	});
	useEffect(()=>{useGetUser(setUser, navigate)},[]);
	return(
		<UserContext.Provider
			value={{user, setUser}}
		>
			{children}
		</UserContext.Provider>
	);
};
