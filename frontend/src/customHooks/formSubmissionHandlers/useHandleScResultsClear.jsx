import axios from 'axios';
import {isGuestSessionActive} from '../helperFunctions/guestSession.js';

const useHandleScResultsClear=async(setUser)=>{
	if(isGuestSessionActive()){
		setUser((currentUser)=>({
			...currentUser,
			scResults: [],
			updatedAt: new Date().toISOString(),
			isGuest: true
		}));
		return;
	};
	try{
		const {data}=await axios.post('/api/clearScResults', {});
		if(data.success===true){
			setUser(data.user);
		};
	}catch(err){
		console.log('Error in useHandleScResultsClear', err);
	};
};

export default useHandleScResultsClear;
