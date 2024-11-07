// For use on modals WITH traffic light buttons
const useWindowMaximize=(querySelector)=>{
	const windowModal=document.querySelector(querySelector);
	if(querySelector==='.fq-container'){
		windowModal.style.transform='translate(0px, 0px)';
		windowModal.style.minWidth='25%';
		windowModal.style.minHeight='40%';
		windowModal.style.height='var(--window-height)';
		windowModal.style.width='var(--window-width)';
		windowModal.style.left='var(--window-position-left)';
		windowModal.style.top='var(--window-position-top)';
		windowModal.style.opacity='var(--window-in-use-opacity)';
		windowModal.style.visibility='visible';
	}else{
		windowModal.style.transform='translate(0px, 0px)';
		windowModal.style.minWidth='var(--window-min-width)';
		windowModal.style.minHeight='var(--window-min-height)';
		windowModal.style.height='var(--window-height)';
		windowModal.style.width='var(--window-width)';
		windowModal.style.left='var(--window-position-left)';
		windowModal.style.top='var(--window-position-top)';
		windowModal.style.opacity='var(--window-in-use-opacity)';
		windowModal.style.visibility='visible';
	};
};

export default useWindowMaximize;
