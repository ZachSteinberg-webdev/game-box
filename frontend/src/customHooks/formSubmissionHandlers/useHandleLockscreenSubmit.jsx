import axios from 'axios';
import {
	migrateGuestDataIfNeeded,
	clearGuestSession
} from '../helperFunctions/guestSession.js';

const useHandleLockscreenSubmit=async(
	e,
	username,
	password,
	setUser,
	navigate
)=>{
	e.preventDefault();
	try{
		const {data} = await axios.post('/api/login', {
			username,
			password
		});
		if(data.success===true){
			setUser({username: '', password:''});
			if(typeof window !== 'undefined'){
				localStorage.setItem('token', JSON.stringify(data));
				localStorage.setItem('username', JSON.stringify(data.user.username));
				localStorage.setItem('wallpaper', JSON.stringify(data.user.wallpaper));
			};
			const migrationResponse = await migrateGuestDataIfNeeded();
			if(migrationResponse?.user && typeof window !== 'undefined'){
				localStorage.setItem('wallpaper', JSON.stringify(migrationResponse.user.wallpaper));
			};
			clearGuestSession();
			navigate('/');
		}else if(data.success===false){
			const passwordMessage=document.querySelector('#lockscreen-message-password');
			if(data.passwordErrors.length>0){
				passwordMessage.style.color='red';
				passwordMessage.innerText=data.passwordErrors[0];
				passwordMessage.classList.add('lockscreen-message-show');
				setTimeout(()=>{
					passwordMessage.classList.remove('lockscreen-message-show');
					setTimeout(()=>{
						passwordMessage.style.color='';
						passwordMessage.innerText='';
					},300);
				},3000);
			};
		};
	}catch(err){
		console.log('Error in frontend LockScreen.jsx', err);
	};
};

export default useHandleLockscreenSubmit;
