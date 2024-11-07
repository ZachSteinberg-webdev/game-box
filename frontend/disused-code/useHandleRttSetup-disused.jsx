const useHandleRttSetup=()=>{
	let testButtonClickCounter = 0;
	let testResultsCounter = 0;
	let randomInterval = 0;
	let showTime = 0;
	let previousShowTime = 0;
	let clickTime = 0;
	let previousClickTime = 0;
	let reactionTime = 0;
	let testButtonFormClickTime = 0;
	let latestSpaceOrEnterPress = 0;
	let anticheatAlertTriggeredYet = false;
	let anticheatTriggerCount = 0;
	let newRunningAverage = 0;
	let resultsAverage = 0;
	let resultsSum = 0;
	const reactionTimeResults = [];
	return {
		testButtonClickCounter,
		testResultsCounter,
		randomInterval,
		showTime,
		previousShowTime,
		clickTime,
		previousClickTime,
		reactionTime,
		testButtonFormClickTime,
		latestSpaceOrEnterPress,
		anticheatAlertTriggeredYet,
		anticheatTriggerCount,
		newRunningAverage,
		resultsAverage,
		resultsSum,
		reactionTimeResults
	};
};

export default useHandleRttSetup;
