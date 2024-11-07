import axios from 'axios';

const useHandleRttResultsClear=async(setUser)=>{
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
