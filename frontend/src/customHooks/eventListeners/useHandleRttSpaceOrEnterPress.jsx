const useHandleRttSpaceOrEnterPress=(e, setLatestSpaceOrEnterPress)=>{
	const testButton=document.querySelector('.rtt-test-button');
	if(testButton && getComputedStyle(testButton).getPropertyValue('visibility') === 'hidden'){
		if(e.key===' ' || e.key==='Spacebar' || e.key==='Enter'){
			setLatestSpaceOrEnterPress((currentValue)=>currentValue=e.timeStamp);
		};
	};
};

export default useHandleRttSpaceOrEnterPress;
