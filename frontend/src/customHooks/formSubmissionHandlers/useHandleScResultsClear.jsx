import axios from 'axios';

const useHandleScResultsClear=async(setUser)=>{
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
