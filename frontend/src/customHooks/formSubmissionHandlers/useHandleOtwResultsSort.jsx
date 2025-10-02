import axios from 'axios';
import {isGuestSessionActive} from '../helperFunctions/guestSession.js';

const useHandleOtwResultsSort=async(setUser)=>{
	if(isGuestSessionActive()){
		setUser((currentUser)=>{
			const sortedResults=Array.isArray(currentUser?.otwResults)?[...currentUser.otwResults].sort((a,b)=>b-a):[];
			return {
				...currentUser,
				otwResults: sortedResults,
				updatedAt: new Date().toISOString(),
				isGuest: true
			};
		});
		return;
	};
	try{
		const {data}=await axios.post('/api/sortOtwResults', {});
		if(data.success===true){
			setUser(data.user);
		};
	}catch(err){
		console.log('Error in useHandleOtwResultsSort', err);
	};
};

export default useHandleOtwResultsSort;
