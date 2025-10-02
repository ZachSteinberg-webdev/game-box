import axios from 'axios';
import {isGuestSessionActive} from '../helperFunctions/guestSession.js';

const useHandleOtwResultsClear=async(setUser)=>{
	if(isGuestSessionActive()){
		setUser((currentUser)=>({
			...currentUser,
			otwResults: [],
			updatedAt: new Date().toISOString(),
			isGuest: true
		}));
		return;
	};
	try{
		const {data}=await axios.post('/api/clearOtwResults', {});
		if(data.success===true){
			setUser(data.user);
		};
	}catch(err){
		console.log('Error in useHandleOtwResultsClear', err);
	};
};

export default useHandleOtwResultsClear;
