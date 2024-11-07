// For use on modals with traffic light buttons
const useWindowOpen=(querySelector, originalWindowWidth, originalWindowHeight)=>{
	if(querySelector==='.sp-container'){
		const windowModal=document.querySelector(querySelector);
		if(windowModal){
			windowModal.style.visibility='visible';
			setTimeout(()=>{
				windowModal.style.height=originalWindowHeight;
				windowModal.style.width=originalWindowWidth;
				windowModal.style.left='25vw';
				windowModal.style.right='25vw';
				windowModal.style.top='15%';
				windowModal.style.bottom='15%';
				windowModal.style.opacity='var(--window-in-use-opacity)';
			},100);
		};
	}else{
		const windowModal=document.querySelector(querySelector);
		if(windowModal){
			windowModal.style.visibility='visible';
			setTimeout(()=>{
				windowModal.style.height=originalWindowHeight;
				windowModal.style.width=originalWindowWidth;
				windowModal.style.left='var(--window-position-left)';
				windowModal.style.top='var(--window-position-top)';
				windowModal.style.opacity='var(--window-in-use-opacity)';
			},100);
		};
	};
};

export default useWindowOpen;
