import axios from 'axios';

const useHandleScResultAdd=async(numberOfClicks, setUser)=>{
	try{
		const {data}=await axios.post('/api/addScResult', {numberOfClicks});
		if(data.success===true){
			setUser(data.user);
		};
	}catch(err){
		console.log('Error in useHandleScResultAdd', err);
	};
};

export default useHandleScResultAdd;
