const useHandleRttTestQuit=(
	setTestButtonClickCounter,
	setTestResultsCounter,
	setAnticheatAlertTriggeredYet
)=>{
	setTestButtonClickCounter((currentValue)=>currentValue=0);
setTestResultsCounter((currentValue)=>currentValue=0);
setAnticheatAlertTriggeredYet((currentValue)=>currentValue=false);
const testButtonText=document.querySelector('.rtt-test-button-text');
testButtonText.innerText='Click here to get started!';
};

export default useHandleRttTestQuit;
