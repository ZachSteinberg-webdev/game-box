import axios from 'axios';

const useHandleRttResultAdd=async(reactionTime, setUser)=>{
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
