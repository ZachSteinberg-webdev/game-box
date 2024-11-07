import axios from 'axios';

const useHandlePasswordChangeSubmit=async(
	e,
	oldPassword,
	newPassword,
	setUser,
	setPassword
)=>{
		e.preventDefault();
		try{
			const oldPasswordInput=document.querySelector('#sp-window-preference-pane-account-input-password-old');
			const newPasswordInput=document.querySelector('#sp-window-preference-pane-account-input-password-new');
			if(oldPasswordInput.value===''){
				oldPassword='';
			};
			if(newPasswordInput.value===''){
				newPassword='';
			};
			const userPasswordData = await axios.post('/api/updatePassword', {
				oldPassword,
				newPassword
			});
			if(userPasswordData.data.success===true){
				setUser((currentData)=>{
					const newData={
						...currentData,
						username: userPasswordData.data.user.username,
						createdAt: userPasswordData.data.user.createdAt,
						updatedAt: userPasswordData.data.user.updatedAt
					};
					return newData;
				});
				setPassword({oldPassword: '', newPassword:''});
				const oldPasswordInput=document.querySelector('#sp-window-preference-pane-account-input-password-old');
				const newPasswordInput=document.querySelector('#sp-window-preference-pane-account-input-password-new');
				oldPasswordInput.value='';
				newPasswordInput.value='';
				const passwordChangeMessage=document.querySelector('#sp-window-preference-pane-account-password-change-message');
				passwordChangeMessage.style.color='green';
				passwordChangeMessage.innerText='You password has been changed.';
				passwordChangeMessage.classList.add('sp-window-preference-pane-item-account-change-password-message-show');
				setTimeout(()=>{
					passwordChangeMessage.classList.remove('sp-window-preference-pane-item-account-change-password-message-show');
					setTimeout(()=>{
						passwordChangeMessage.style.color='';
						passwordChangeMessage.innerText='';
					},300);
				},2000);
			}else if(userPasswordData.data.success===false){
				const passwordChangeMessage=document.querySelector('#sp-window-preference-pane-account-password-change-message');
				passwordChangeMessage.style.color='red';
				passwordChangeMessage.innerText=userPasswordData.data.message;
				passwordChangeMessage.classList.add('sp-window-preference-pane-item-account-change-password-message-show');
				setTimeout(()=>{
					passwordChangeMessage.classList.remove('sp-window-preference-pane-item-account-change-password-message-show');
					setTimeout(()=>{
						passwordChangeMessage.style.color='';
						passwordChangeMessage.innerText='';
					},300);
				},2000);
			};
		}catch(err){
			if(err?.response?.data?.error){
				console.log('Error from front end useHandlePasswordChangeSubmit', err.response.data.error);
			}else{
				console.log('Error from front end useHandleUsernameChangeSubmit', err);
			};
		};
	};

	export default useHandlePasswordChangeSubmit;
