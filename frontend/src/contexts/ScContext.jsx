import React, {useState, createContext, useContext} from 'react';

export const ScContext=createContext();

export const ScContextProvider=({children})=>{
	const [numberOfClicks, setNumberOfClicks]=useState(0);
	const [roundEnded, setRoundEnded]=useState(false);
	const [clickResults, setClickResults]=useState([]);
	const [newRunningAverage, setNewRunningAverage]=useState(0);
	const [roundCounter, setRoundCounter]=useState(0);

	const scValues={
		numberOfClicks,
		roundEnded,
		clickResults,
		newRunningAverage,
		roundCounter
	};
	const setScValues={
		setNumberOfClicks,
		setRoundEnded,
		setClickResults,
		setNewRunningAverage,
		setRoundCounter
	};
	return(
		<ScContext.Provider
			value={{
				scValues,
				setScValues
			}}
		>
			{children}
		</ScContext.Provider>
	);
};
