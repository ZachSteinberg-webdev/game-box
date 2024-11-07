const useHandleWake=(setModals, setModalShowClasses)=>{
	setModalShowClasses.setModalSleepScreenOpenShowClass('');
	setTimeout(()=>{
		setModals.setModalSleepScreenOpen(false);
	},500);
};

export default useHandleWake;
