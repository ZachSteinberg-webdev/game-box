import useModalOpen from '../helperFunctions/useModalOpen.jsx';
import useModalClose from '../helperFunctions/useModalClose.jsx';

const useHandleOtwGameSetup=(
	appModalOrdering,
	setAppModalOrdering,
	setModals,
	setModalShowClasses,
	otwValues,
	setOtwValues
)=>{
	const background=document.querySelector('.otw-background-overlay');
	const gameboard=document.querySelector('.otw-gameboard');
	const gameball=document.querySelector('.otw-gameball');
	const gameStartDialog=document.querySelector('.otw-game-start-dialog');
	const gameStartButton=document.querySelector('.otw-game-start-button');
	const gamePauseDialog=document.querySelector('.otw-game-pause-dialog');
	const gameResumeButton=document.querySelector('.otw-game-resume-button');
	const gameEndDialog=document.querySelector('.otw-game-end-dialog');
	const gameEndTotalMovesSpan=document.querySelector('.otw-move-total');
	const gameEndFinalMoveIntervalSpan=document.querySelector('.otw-final-move-interval');
	const gameEndFinalMoveIntervalCongratulations=document.querySelector('#otw-game-end-lowest-interval-congratulations');
	const gameEndTotalGamesPlayedSpan=document.querySelector('.otw-games-played-total');
	const gamePlayAgainButton=document.querySelector('.otw-game-play-again-button');

	let gameboardStyleData=window.getComputedStyle(gameball);

	const setupGame=(e)=>{
		console.log('In game setup');
		let ballSize=0;
		let ballInitialPositionTop=0;
		let ballInitialPositionLeft=0;
		console.log('gameboard.clientHeight', gameboard.clientHeight);
		setOtwValues.setGameboardHeight(currentValue=>gameboard.clientHeight);
		// gameboardHeight=gameboard.clientHeight;
		console.log('gameboard height', otwValues.gameboardHeight);
		console.log('gameboard.clientWidth', gameboard.clientWidth);
		setOtwValues.setGameboardWidth(currentValue=>gameboard.clientWidth);
		// gameboardWidth=gameboard.clientWidth;
		console.log('gameboard width', otwValues.gameboardWidth);
		setOtwValues.setMoveVerticalDistance(currentValue=>gameboard.clientHeight/10);
		// moveVerticalDistance=gameboardHeight/10;
		setOtwValues.setMoveHorizontalDistance(currentValue=>gameboard.clientWidth/10);
		// moveHorizontalDistance=gameboardWidth/10;
		if(otwValues.gameboardWidth>=otwValues.gameboardHeight){ // Landscape orientation
			setOtwValues.setBallSize(currentValue=>gameboard.clientHeight/10);
			console.log('ball size set from landscape block', gameboard.clientHeight/10);
			ballSize=gameboard.clientHeight/10;
		}else{                               // Portrait orientation
			setOtwValues.setBallSize(currentValue=>gameboard.clientWidth/10);
			console.log('ball size set from portrait block', gameboard.clientWidth/10);
			ballSize=gameboard.clientWidth/10;
		};
		setOtwValues.setBallInitialPositionTop(currentValue=>((gameboard.clientHeight-ballSize)/2)+'px');
		ballInitialPositionTop=((gameboard.clientHeight-ballSize)/2)+'px';
		setOtwValues.setBallInitialPositionLeft(currentValue=>((gameboard.clientWidth-ballSize)/2)+'px');
		ballInitialPositionLeft=((gameboard.clientWidth-ballSize)/2)+'px';
		gameball.style.height=ballSize+'px';
		gameball.style.width=ballSize+'px';
		gameball.style.top=ballInitialPositionTop;
		gameball.style.left=ballInitialPositionLeft;
		gameball.style.display='block';
	};

	const startGame=(e)=>{
		if(e.type==='click' || e.key===' '){
			document.removeEventListener('keydown', startGame);
			// gameStartButton.removeEventListener('click', startGame);
			console.log('start game event click', e);
			console.log('In game start');
			document.addEventListener('keydown', pauseGame);
			document.addEventListener('keydown', userBallMove);
			useModalClose(
				'ModalOtwGameStartDialog',
				appModalOrdering.openOtwModals,
				setAppModalOrdering.setOpenOtwModals,
				setModals.setModalOtwGameStartDialogOpen,
				setModalShowClasses.setModalOtwGameStartDialogOpenShowClass
			);
			// gameStartDialog.style.opacity='0';
			// gameStartDialog.style.visibility='hidden';
			runGameLoop();
		};
	};

	const endGame=()=>{
		clearInterval(otwValues.interval);
		// gameLost=true;
		setOtwValues.setGameLost((currentValue)=>currentValue=true);
		// numberOfGamesPlayed++;
		setOtwValues.setNumberOfGamesPlayed((currentValue)=>currentValue+=1);
		// gameboard.style.borderColor='red';
		background.style.backgroundColor='#ff000078';
		document.removeEventListener('keydown', userBallMove);
		document.removeEventListener('keydown', pauseGame);
		document.addEventListener('keydown', newGame);
		// gamePlayAgainButton.addEventListener('click', newGame);
		gameEndTotalMovesSpan.innerText=otwValues.numberOfMoves;
		gameEndFinalMoveIntervalSpan.innerText=otwValues.ballMoveDelay;
		if(otwValues.ballMoveDelay===100){
			gameEndFinalMoveIntervalCongratulations.style.display='block';
		}
		if(otwValues.numberOfGamesPlayed===1){
			gameEndTotalGamesPlayedSpan.innerText=otwValues.numberOfGamesPlayed+' '+'time.';
		}else if(otwValues.numberOfGamesPlayed>1){
			gameEndTotalGamesPlayedSpan.innerText=otwValues.numberOfGamesPlayed+' '+'times.';
		};
		useModalOpen(
			'ModalOtwGameEndDialog',
			appModalOrdering.openOtwModals,
			setAppModalOrdering.setOpenOtwModals,
			setModals.setModalOtwGameEndDialogOpen,
			setModalShowClasses.setModalOtwGameEndDialogOpenShowClass,
			'otw-game-end-dialog-in-use'
		);
		// gameEndDialog.style.visibility='visible';
		// gameEndDialog.style.opacity='100';
	};

	const newGame=(e)=>{
		if(e.type==='click' || e.key===' '){
			// gameLost=false;
			setOtwValues.setGameLost((currentValue)=>currentValue=false);
			// ballMoveDelay=750;
			setOtwValues.setBallMoveDelay((currentValue)=>currentValue=750);
			// numberOfMoves=0;
			setOtwValues.setNumberOfMoves((currentValue)=>currentValue=0);
			// gameboard.style.borderColor='blue';
			background.style.backgroundColor='#f000';
			document.removeEventListener('keydown', newGame);
			gamePlayAgainButton.removeEventListener('click', newGame);
			useModalClose(
				'ModalOtwGameEndDialog',
				appModalOrdering.openOtwModals,
				setAppModalOrdering.setOpenOtwModals,
				setModals.setModalOtwGameEndDialogOpen,
				setModalShowClasses.setModalOtwGameEndDialogOpenShowClass
			);
			// gameEndDialog.style.opacity='0';
			// setTimeout(()=>{
			// 	gameEndDialog.style.visibility='hidden';
			// },500);
			gameball.style.display='none';
			setupGame();
			startGame(e);
		};
	};

	let gameboardIntersectionOptions={
		root: gameboard,
		threshold: 1.0
	};
	let gameboardIntserctionCallback=(entries,observer)=>{
		if(!entries[0].isIntersecting){
			endGame();
		};
	};
	let gameboardObserver=new IntersectionObserver(gameboardIntserctionCallback, gameboardIntersectionOptions);
	gameboardObserver.observe(gameball);

	setupGame();
};


export default useHandleOtwGameSetup;
