import axios from 'axios';

const useHandleScResultsSort=async(setUser)=>{
	try{
		const {data}=await axios.post('/api/sortScResults', {});
		if(data.success===true){
			setUser(data.user);
		};
	}catch(err){
		console.log('Error in useHandleScResultsSort', err);
	};
};

export default useHandleScResultsSort;
