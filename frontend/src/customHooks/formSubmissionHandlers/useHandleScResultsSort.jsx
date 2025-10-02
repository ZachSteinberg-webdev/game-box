import axios from 'axios';
import {isGuestSessionActive} from '../helperFunctions/guestSession.js';

const useHandleScResultsSort=async(setUser)=>{
	if(isGuestSessionActive()){
		setUser((currentUser)=>{
			const sortedResults=Array.isArray(currentUser?.scResults)?[...currentUser.scResults].sort((a,b)=>b-a):[];
			return {
				...currentUser,
				scResults: sortedResults,
				updatedAt: new Date().toISOString(),
				isGuest: true
			};
		});
		return;
	};
	try{
		const {data}=await axios.post('/api/sortScResults', {});
		if(data.success===true){
			setUser(data.user);
		};
	}catch(err){
		console.log('Error in useHandleScResultsSort', err);
	};
};

export default useHandleScResultsSort;
