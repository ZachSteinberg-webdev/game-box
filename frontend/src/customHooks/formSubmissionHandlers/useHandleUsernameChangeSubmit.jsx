import axios from 'axios';
import {isGuestSessionActive} from '../helperFunctions/guestSession.js';

const useHandleUsernameChangeSubmit=async(
	e,
	username,
	setUser,
	setUsername,
	setCurrentUsername
)=>{
		e.preventDefault();
		if(isGuestSessionActive()){
			const usernameChangeMessage=document.querySelector('#sp-window-preference-pane-account-username-change-message');
			if(usernameChangeMessage){
				usernameChangeMessage.style.color='red';
				usernameChangeMessage.innerText='Users in guest mode cannot change their username. Please register an account to enable this feature.';
				usernameChangeMessage.classList.add('sp-window-preference-pane-item-account-change-username-message-show');
				setTimeout(()=>{
					usernameChangeMessage.classList.remove('sp-window-preference-pane-item-account-change-message-show');
					setTimeout(()=>{
						usernameChangeMessage.style.color='';
						usernameChangeMessage.innerText='';
					},300);
				},2000);
			};
			return;
		};
		try{
			const usernameInput=document.querySelector('#sp-window-preference-pane-account-input-username');
			const usernameInputValue=usernameInput.value;
			if(usernameInput.value===''){
				username='';
			};
			const userDetailData = await axios.post('/api/updateUser', {usernameInputValue});
			if(userDetailData.data.success === true){
				setUser((currentData)=>{
					const newData={
						...currentData,
						username: username,
						createdAt: userDetailData.data.updatedUser.createdAt,
						updatedAt: userDetailData.data.updatedUser.updatedAt
					};
					return newData;
				});
				setUsername(currentValue=>currentValue='');
				setCurrentUsername(usernameInputValue);
				const usernameInput=document.querySelector('#sp-window-preference-pane-account-input-username');
				usernameInput.value='';
				const usernameChangeMessage=document.querySelector('#sp-window-preference-pane-account-username-change-message');
				usernameChangeMessage.style.color='green';
				usernameChangeMessage.innerText='You username has been updated.';
				usernameChangeMessage.classList.add('sp-window-preference-pane-item-account-change-username-message-show');
				setTimeout(()=>{
					usernameChangeMessage.classList.remove('sp-window-preference-pane-item-account-change-message-show');
					setTimeout(()=>{
						usernameChangeMessage.style.color='';
						usernameChangeMessage.innerText='';
					},300);
				},2000);
			}else if(userDetailData.data.success === false){
				const usernameChangeMessage=document.querySelector('#sp-window-preference-pane-account-username-change-message');
				usernameChangeMessage.style.color='red';
				usernameChangeMessage.innerText=userDetailData.data.message;
				usernameChangeMessage.classList.add('sp-window-preference-pane-item-account-change-message-show');
				setTimeout(()=>{
					usernameChangeMessage.classList.remove('sp-window-preference-pane-item-account-change-message-show');
					setTimeout(()=>{
						usernameChangeMessage.style.color='';
						usernameChangeMessage.innerText='';
					},300);
				},1000);
			};
		}catch(err){
			if(err?.response?.data?.error){
				console.log('Error from front end useHandleUsernameChangeSubmit', err.response.data.error);
			}else{
				console.log('Error from front end useHandleUsernameChangeSubmit', err);
			};
		};
	};

	export default useHandleUsernameChangeSubmit;
