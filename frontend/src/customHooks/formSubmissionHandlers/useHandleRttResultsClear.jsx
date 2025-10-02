import axios from 'axios';
import {isGuestSessionActive} from '../helperFunctions/guestSession.js';

const useHandleRttResultsClear=async(setUser)=>{
	if(isGuestSessionActive()){
		setUser((currentUser)=>({
			...currentUser,
			rttResults: [],
			updatedAt: new Date().toISOString(),
			isGuest: true
		}));
		return;
	};
	try{
		const {data}=await axios.post('/api/clearRttResults', {});
		if(data.success===true){
			setUser(data.user);
		};
	}catch(err){
		console.log('Error in useHandleRttResultsClear', err);
	};
};

export default useHandleRttResultsClear;
