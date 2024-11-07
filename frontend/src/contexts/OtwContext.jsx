import React, {useState, createContext, useContext} from 'react';

export const OtwContext=createContext();

export const OtwContextProvider=({children})=>{
	const [ballMoveDelay, setBallMoveDelay]=useState(750);
	const [gameLost, setGameLost]=useState(false);
	const [gameboardHeight, setGameboardHeight]=useState(0);
	const [gameboardWidth, setGameboardWidth]=useState(0);
	const [moveVerticalDistance, setMoveVerticalDistance]=useState(0);
	const [moveHorizontalDistance, setMoveHorizontalDistance]=useState(0);
	const [ballSize, setBallSize]=useState(0);
	const [ballInitialPositionTop, setBallInitialPositionTop]=useState('');
	const [ballInitialPositionLeft, setBallInitialPositionLeft]=useState('');
	const [interval, setInterval]=useState(0);
	const [numberOfMoves, setNumberOfMoves]=useState(0);
	const [numberOfGamesPlayed, setNumberOfGamesPlayed]=useState(0);
	const [previousMoveDirectionNumber, setPreviousMoveDirectionNumber]=useState(10);

	const otwValues={
		ballMoveDelay,
		gameLost,
		gameboardHeight,
		gameboardWidth,
		moveVerticalDistance,
		moveHorizontalDistance,
		ballSize,
		ballInitialPositionTop,
		ballInitialPositionLeft,
		interval,
		numberOfMoves,
		numberOfGamesPlayed,
		previousMoveDirectionNumber
	};
	const setOtwValues={
		setBallMoveDelay,
		setGameLost,
		setGameboardHeight,
		setGameboardWidth,
		setMoveVerticalDistance,
		setMoveHorizontalDistance,
		setBallSize,
		setBallInitialPositionTop,
		setBallInitialPositionLeft,
		setInterval,
		setNumberOfMoves,
		setNumberOfGamesPlayed,
		setPreviousMoveDirectionNumber
	};
	return(
		<OtwContext.Provider
			value={{
				otwValues,
				setOtwValues
			}}
		>
			{children}
		</OtwContext.Provider>
	);
};
