import axios from 'axios';
import {
	migrateGuestDataIfNeeded,
	clearGuestSession
} from '../helperFunctions/guestSession.js';

const useHandleRegistrationSubmit=async(
	e,
	username,
	password,
	setUser,
	navigate
)=>{
	e.preventDefault();
	try{
		const {data} = await axios.post('/api/register', {
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
			const usernameMessage=document.querySelector('#registration-message-username');
			const passwordMessage=document.querySelector('#registration-message-password');
			if(data.usernameErrors.length>0){
				usernameMessage.style.color='red';
				usernameMessage.innerText=data.usernameErrors[0];
				usernameMessage.classList.add('registration-message-show');
				setTimeout(()=>{
					usernameMessage.classList.remove('registration-message-show');
					setTimeout(()=>{
						usernameMessage.style.color='';
						usernameMessage.innerText='';
					},300);
				},3000);
			};
			if(data.passwordErrors.length>0){
				passwordMessage.style.color='red';
				passwordMessage.innerText=data.passwordErrors[0];
				passwordMessage.classList.add('registration-message-show');
				setTimeout(()=>{
					passwordMessage.classList.remove('registration-message-show');
					setTimeout(()=>{
						passwordMessage.style.color='';
						passwordMessage.innerText='';
					},300);
				},3000);
			};
		};
	}catch(err){
		console.log('Error in frontend Register.jsx', err);
	};
};

export default useHandleRegistrationSubmit;
