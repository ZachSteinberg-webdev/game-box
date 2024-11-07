const useHandleRttTestButtonTransitionEnd=(e, setShowTime)=>{
	if(e.propertyName==='opacity'){
		setShowTime(e.timeStamp);
	};
};

export default useHandleRttTestButtonTransitionEnd;
