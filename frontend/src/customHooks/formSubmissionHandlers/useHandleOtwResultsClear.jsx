import axios from 'axios';

const useHandleOtwResultsClear=async(setUser)=>{
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
