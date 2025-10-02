import axios from 'axios';
import {isGuestSessionActive} from '../helperFunctions/guestSession.js';

const useHandleRttResultsSort=async(setUser)=>{
	if(isGuestSessionActive()){
		setUser((currentUser)=>{
			const sortedResults=Array.isArray(currentUser?.rttResults)?[...currentUser.rttResults].sort((a,b)=>a-b):[];
			return {
				...currentUser,
				rttResults: sortedResults,
				updatedAt: new Date().toISOString(),
				isGuest: true
			};
		});
		return;
	};
	try{
		const {data}=await axios.post('/api/sortRttResults', {});
		if(data.success===true){
			setUser(data.user);
		};
	}catch(err){
		console.log('Error in useHandleRttResultsSort', err);
	};
};

export default useHandleRttResultsSort;
