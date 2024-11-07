import React, {useState, createContext, useContext} from 'react';

export const RttContext=createContext();

export const RttContextProvider=({children})=>{
	const [testButtonClickCounter, setTestButtonClickCounter]=useState(0);
	const [testResultsCounter, setTestResultsCounter]=useState(0);
	const [showTime, setShowTime]=useState(0);
	const [previousShowTime, setPreviousShowTime]=useState(0);
	const [clickTime, setClickTime]=useState(0);
	const [previousClickTime, setPreviousClickTime]=useState(0);
	const [testButtonFormClickTime, setTestButtonFormClickTime]=useState(0);
	const [latestSpaceOrEnterPress, setLatestSpaceOrEnterPress]=useState(0);
	const [anticheatAlertTriggeredYet, setAnticheatAlertTriggeredYet]=useState(false);
	const [anticheatTriggerCount, setAnticheatTriggerCount]=useState(0);
	const [newRunningAverage, setNewRunningAverage]=useState(0);
	const [resultsAverage, setResultsAverage]=useState(0);
	const [resultsSum, setResultsSum]=useState(0);
	const [reactionTimeResults, setReactionTimeResults]=useState([]);

const rttValues={
	testButtonClickCounter,
	testResultsCounter,
	showTime,
	previousShowTime,
	clickTime,
	previousClickTime,
	testButtonFormClickTime,
	latestSpaceOrEnterPress,
	anticheatAlertTriggeredYet,
	anticheatTriggerCount,
	newRunningAverage,
	resultsAverage,
	resultsSum,
	reactionTimeResults
};
const setRttValues={
	setTestButtonClickCounter,
	setTestResultsCounter,
	setShowTime,
	setPreviousShowTime,
	setClickTime,
	setPreviousClickTime,
	setTestButtonFormClickTime,
	setLatestSpaceOrEnterPress,
	setAnticheatAlertTriggeredYet,
	setAnticheatTriggerCount,
	setNewRunningAverage,
	setResultsAverage,
	setResultsSum,
	setReactionTimeResults
};
	return(
		<RttContext.Provider
			value={{
				rttValues,
				setRttValues
			}}
		>
			{children}
		</RttContext.Provider>
	);
};
