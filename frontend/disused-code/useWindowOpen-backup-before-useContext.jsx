const useWindowOpen=(e, setModalOpen, setModalOpenShowClass)=>{
	if(e.target.classList.contains('rtt-test-icon') || e.target.classList.contains('rtt-test-icon-title')){
		setModalOpen(true);
		setTimeout(()=>{
			setModalOpenShowClass('rtt-test-container-in-use');
		},100);
	};
};

export default useWindowOpen;
