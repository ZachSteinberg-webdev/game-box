import axios from 'axios';
import {isGuestSessionActive} from '../helperFunctions/guestSession.js';

const useHandleUserPreferenceChange=async(name, e, setUser)=>{
	e.preventDefault();
	const option=name;
	const guestActive=isGuestSessionActive();
	const preferenceMap={
		seconds: 'showSeconds',
		period: 'showPeriod',
		hour24: 'show24HourClock',
		dayName: 'showDayName',
		monthName: 'showMonthName',
		day: 'showDay',
		year: 'showYear',
		dateAndTime: 'showDateAndTime',
		accountInMenubar: 'showAccountInMenubar'
	};
	if(e.target.checked===true || e.target.checked===false){
		const checked=e.target.checked;
		if(guestActive){
			setUser((currentUser)=>{
				const nextUser={
					...currentUser,
					[preferenceMap[option]]: checked,
					updatedAt: new Date().toISOString(),
					isGuest: true
				};
				if(option==='hour24'){
					nextUser.show24HourClock=checked;
					nextUser.showPeriod=checked?false:true;
				};
				return nextUser;
			});
			return;
		};
		try{
			const {data}=await axios.post('/api/changeUserPreferences', {option, checked});
			if(data.success===true){
				setUser(data.user);
			};
		}catch(err){
			console.log('Error in useHandleUserPreferenceChange', err);
		};
	}else if(name.includes('Thumbnail')){ // Wallpaper change block
		if(guestActive){
			setUser((currentUser)=>({
				...currentUser,
				wallpaper: option,
				updatedAt: new Date().toISOString(),
				isGuest: true
			}));
			return;
		};
		try{
			const {data}=await axios.post('/api/changeUserPreferences', {option});
			if(data.success===true){
				localStorage.setItem('wallpaper', JSON.stringify(data.user.wallpaper));
				setUser(data.user);
			};
		}catch(err){
			console.log('Error in useHandleUserPreferenceChange', err);
		};
	};
};

export default useHandleUserPreferenceChange;
