import axios from 'axios';
import {isGuestSessionActive} from '../helperFunctions/guestSession.js';

const useHandleRttResultAdd=async(reactionTime, setUser)=>{
	if(isGuestSessionActive()){
		setUser((currentUser)=>{
			const nextRttResults=Array.isArray(currentUser?.rttResults)?[...currentUser.rttResults, reactionTime]:[reactionTime];
			return {
				...currentUser,
				rttResults: nextRttResults,
				updatedAt: new Date().toISOString(),
				isGuest: true
			};
		});
		return;
	};
	try{
		const {data}=await axios.post('/api/addRttResult', {reactionTime});
		if(data.success===true){
			setUser(data.user);
		};
	}catch(err){
		console.log('Error in useHandleRttResultAdd', err);
	};
};

export default useHandleRttResultAdd;
