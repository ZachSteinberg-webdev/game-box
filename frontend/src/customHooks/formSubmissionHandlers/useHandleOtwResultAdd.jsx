import axios from 'axios';
import {isGuestSessionActive} from '../helperFunctions/guestSession.js';

const useHandleOtwResultAdd=async(numberOfMoves, setUser)=>{
	if(isGuestSessionActive()){
		setUser((currentUser)=>{
			const nextResults=Array.isArray(currentUser?.otwResults)?[...currentUser.otwResults, numberOfMoves]:[numberOfMoves];
			return {
				...currentUser,
				otwResults: nextResults,
				updatedAt: new Date().toISOString(),
				isGuest: true
			};
		});
		return;
	};
	try{
		const {data}=await axios.post('/api/addOtwResult', {numberOfMoves});
		if(data.success===true){
			setUser(data.user);
		};
	}catch(err){
		console.log('Error in useHandleOtwResultAdd', err);
	};
};

export default useHandleOtwResultAdd;
