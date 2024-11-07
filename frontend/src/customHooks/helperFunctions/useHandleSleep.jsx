const useHandleSleep=(setModals, setModalShowClasses)=>{
	setModals.setModalSleepScreenOpen(true);
	setTimeout(()=>{
		setModalShowClasses.setModalSleepScreenOpenShowClass('sleep-screen-in-use');
	},100);
};

export default useHandleSleep;
