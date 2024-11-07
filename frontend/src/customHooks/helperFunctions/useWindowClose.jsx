// For use on modals with traffic light buttons
const useWindowClose=(querySelector)=>{
	const windowModal=document.querySelector(querySelector);
	windowModal.style.opacity='var(--window-opacity)';
	setTimeout(()=>{
		windowModal.style.visibility='hidden';
	});
};

export default useWindowClose;
