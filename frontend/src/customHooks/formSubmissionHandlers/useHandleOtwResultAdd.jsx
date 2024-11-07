import axios from 'axios';

const useHandleOtwResultAdd=async(numberOfMoves, setUser)=>{
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
