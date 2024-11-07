import axios from 'axios';

const useHandleOtwResultsSort=async(setUser)=>{
	try{
		const {data}=await axios.post('/api/sortOtwResults', {});
		if(data.success===true){
			setUser(data.user);
		};
	}catch(err){
		console.log('Error in useHandleOtwResultsSort', err);
	};
};

export default useHandleOtwResultsSort;
