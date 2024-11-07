const useHandleRttTestPause=(setTestButtonClickCounter, setTestResultsCounter)=>{
	setTestButtonClickCounter((currentValue)=>currentValue=0);
setTestResultsCounter((currentValue)=>currentValue-=1);
const testButtonText=document.querySelector('.rtt-test-button-text');
testButtonText.innerText='Test paused - Click to resume';
};

export default useHandleRttTestPause;
