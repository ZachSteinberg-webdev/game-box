import axios from 'axios';

const GUEST_PROFILE_KEY = 'guestProfile';
const GUEST_SESSION_FLAG = 'guestSessionActive';
const GUEST_ALERT_KEY = 'guestBannerDismissed';

const defaultWallpaper = 'mountain8433234Thumbnail';

const buildDefaultGuestProfile = () => ({
	username: 'Guest',
	showAccountInMenubar: true,
	showDateAndTime: true,
	showDayName: true,
	showMonthName: true,
	showDay: true,
	showYear: true,
	showSeconds: true,
	showPeriod: true,
	show24HourClock: false,
	wallpaper: defaultWallpaper,
	rttResults: [],
	otwResults: [],
	scResults: [],
	role: 0,
	createdAt: new Date().toISOString(),
	updatedAt: new Date().toISOString(),
	isGuest: true
});

const safeParse = (value) => {
	try{
		return JSON.parse(value);
	}catch(err){
		return null;
	}
};

export const isGuestSessionActive = () => {
	if(typeof window === 'undefined'){
		return false;
	};
	return localStorage.getItem(GUEST_SESSION_FLAG) === 'true';
};

export const getStoredGuestProfile = () => {
	if(typeof window === 'undefined'){
		return null;
	};
	const rawProfile = localStorage.getItem(GUEST_PROFILE_KEY);
	if(!rawProfile){
		return null;
	};
	const parsedProfile = safeParse(rawProfile);
	if(parsedProfile){
		return parsedProfile;
	};
	return null;
};

export const persistGuestProfile = (profile) => {
	if(typeof window === 'undefined'){
		return;
	};
	const profileToPersist = {
		...buildDefaultGuestProfile(),
		...profile,
		updatedAt: new Date().toISOString(),
		isGuest: true
	};
	localStorage.setItem(GUEST_SESSION_FLAG, 'true');
	localStorage.setItem(GUEST_PROFILE_KEY, JSON.stringify(profileToPersist));
	localStorage.setItem('username', JSON.stringify(profileToPersist.username));
	localStorage.setItem('wallpaper', JSON.stringify(profileToPersist.wallpaper));
};

export const startGuestSession = () => {
	if(typeof window === 'undefined'){
		return null;
	};
	const profile = buildDefaultGuestProfile();
	localStorage.setItem(GUEST_SESSION_FLAG, 'true');
	localStorage.setItem(GUEST_PROFILE_KEY, JSON.stringify(profile));
	localStorage.setItem('username', JSON.stringify(profile.username));
	localStorage.setItem('wallpaper', JSON.stringify(profile.wallpaper));
	localStorage.removeItem(GUEST_ALERT_KEY);
	return profile;
};

export const clearGuestSession = () => {
	if(typeof window === 'undefined'){
		return;
	};
	localStorage.removeItem(GUEST_SESSION_FLAG);
	localStorage.removeItem(GUEST_PROFILE_KEY);
	localStorage.removeItem(GUEST_ALERT_KEY);
};

export const resetGuestAlertDismissal = () => {
	if(typeof window === 'undefined'){
		return;
	};
	localStorage.removeItem(GUEST_ALERT_KEY);
};

export const buildGuestProfile = buildDefaultGuestProfile;

export const migrateGuestDataIfNeeded = async()=>{
	if(typeof window === 'undefined'){
		return null;
	};
	const profile=getStoredGuestProfile();
	if(!profile){
		return null;
	};
	const payload={
		rttResults: Array.isArray(profile.rttResults)?profile.rttResults:[],
		otwResults: Array.isArray(profile.otwResults)?profile.otwResults:[],
		scResults: Array.isArray(profile.scResults)?profile.scResults:[],
		preferences: {
			showAccountInMenubar: profile.showAccountInMenubar,
			showDateAndTime: profile.showDateAndTime,
			showDayName: profile.showDayName,
			showMonthName: profile.showMonthName,
			showDay: profile.showDay,
			showYear: profile.showYear,
			showSeconds: profile.showSeconds,
			showPeriod: profile.showPeriod,
			show24HourClock: profile.show24HourClock
		},
		wallpaper: profile.wallpaper
	};
	const hasResultData=
		payload.rttResults.length>0 ||
		payload.otwResults.length>0 ||
		payload.scResults.length>0;
	const defaults=buildDefaultGuestProfile();
	const preferenceKeys=Object.keys(payload.preferences);
	const preferencesChanged=preferenceKeys.some((key)=>payload.preferences[key]!==defaults[key]);
	const wallpaperChanged=payload.wallpaper && payload.wallpaper!==defaults.wallpaper;
	try{
		if(!hasResultData && !preferencesChanged && !wallpaperChanged){
			return null;
		};
		const {data}=await axios.post('/api/migrateGuestData', payload);
		return data;
	}catch(err){
		console.log('Error migrating guest data', err);
		return null;
	};
};
