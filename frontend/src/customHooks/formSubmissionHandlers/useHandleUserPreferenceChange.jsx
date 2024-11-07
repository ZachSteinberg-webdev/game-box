import axios from 'axios';

const useHandleUserPreferenceChange=async(name, e, setUser)=>{
	e.preventDefault();
	const option=name;
	if(e.target.checked===true || e.target.checked===false){
		const checked=e.target.checked;
		try{
			const {data}=await axios.post('/api/changeUserPreferences', {option, checked});
			if(data.success===true){
				setUser(data.user);
			};
		}catch(err){
			console.log('Error in useHandleUserPreferenceChange', err);
		};
	}else if(name.includes('Thumbnail')){ // Wallpaper change block
		try{
			const {data}=await axios.post('/api/changeUserPreferences', {option});
			if(data.success===true){
				localStorage.setItem('wallpaper', JSON.stringify(data.user.wallpaper));
				setUser(data.user);
			};
		}catch(err){
			console.log('Error in useHandleUserPreferenceChange', err);
		};
	};
};

export default useHandleUserPreferenceChange;
