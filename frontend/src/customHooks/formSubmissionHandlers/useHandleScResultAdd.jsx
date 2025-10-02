import axios from 'axios';
import {isGuestSessionActive} from '../helperFunctions/guestSession.js';

const useHandleScResultAdd=async(numberOfClicks, setUser)=>{
	if(isGuestSessionActive()){
		setUser((currentUser)=>{
			const nextResults=Array.isArray(currentUser?.scResults)?[...currentUser.scResults, numberOfClicks]:[numberOfClicks];
			return {
				...currentUser,
				scResults: nextResults,
				updatedAt: new Date().toISOString(),
				isGuest: true
			};
		});
		return;
	};
	try{
		const {data}=await axios.post('/api/addScResult', {numberOfClicks});
		if(data.success===true){
			setUser(data.user);
		};
	}catch(err){
		console.log('Error in useHandleScResultAdd', err);
	};
};

export default useHandleScResultAdd;
