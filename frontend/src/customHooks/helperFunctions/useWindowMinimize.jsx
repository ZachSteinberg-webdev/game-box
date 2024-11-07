// For use on modals WITH traffic light buttons
const useWindowMinimize=(querySelector)=>{
	const windowModal=document.querySelector(querySelector);
	windowModal.style.minWidth='0px';
	windowModal.style.minHeight='0px';
	windowModal.style.height='1.375rem';
	windowModal.style.width='1vw';
	windowModal.style.left='50%';
	windowModal.style.top='calc(100% - 1.375rem)';
	windowModal.style.top='101%';
	windowModal.style.opacity='var(--window-in-use-opacity)';
	windowModal.style.justifyContent='flex-start';
	setTimeout(()=>{
		windowModal.style.transform='translate(0px, 0px)';
	},100);
};

export default useWindowMinimize;
