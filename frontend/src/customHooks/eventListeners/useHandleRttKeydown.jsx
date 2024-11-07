const useHandleRttKeydown=(handleRttSpaceOrEnterPress)=>{
	document.addEventListener('keydown', handleRttSpaceOrEnterPress);
	return()=>{
		document.removeEventListener('keydown', handleRttSpaceOrEnterPress);
	};
};

export default useHandleRttKeydown;
