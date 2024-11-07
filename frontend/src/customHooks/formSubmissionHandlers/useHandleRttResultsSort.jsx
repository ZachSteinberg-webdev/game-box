import axios from 'axios';

const useHandleRttResultsSort=async(setUser)=>{
	try{
		const {data}=await axios.post('/api/sortRttResults', {});
		if(data.success===true){
			setUser(data.user);
		};
	}catch(err){
		console.log('Error in useHandleRttResultsSort', err);
	};
};

export default useHandleRttResultsSort;
