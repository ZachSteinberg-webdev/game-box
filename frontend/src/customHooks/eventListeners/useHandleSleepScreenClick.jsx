const useHandleSleepScreenClick=(e, setModalOpen, setModalOpenShowClass)=>{
	setModalOpenShowClass('');
	setTimeout(()=>{
		setModalOpen(false);
	},500);
};

export default useHandleSleepScreenClick;
