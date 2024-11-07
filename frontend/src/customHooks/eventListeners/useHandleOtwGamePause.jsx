import useModalOpen from '../helperFunctions/useModalOpen.jsx';
import useModalClose from '../helperFunctions/useModalClose.jsx';
import useHandleOtwResultAdd from '../formSubmissionHandlers/useHandleOtwResultAdd.jsx';

const useHandleOtwGamePause=(
	e,
	setUser,
	windowModalOrdering,
	setWindowModalOrdering,
	appModalOrdering,
	setAppModalOrdering,
	modals,
	setModals,
	setModalShowClasses,
	otwValues,
	setOtwValues
)=>{
	// Setup for below sections
	const background=document.querySelector('.otw-background-overlay');
	const gameboard=document.querySelector('.otw-gameboard');
	const gameball=document.querySelector('.otw-gameball');
	const gameStartDialog=document.querySelector('.otw-game-start-dialog');
	const gameStartButton=document.querySelector('.otw-game-start-button');
	const gamePauseDialog=document.querySelector('.otw-game-pause-dialog');
	const gameEndDialog=document.querySelector('.otw-game-end-dialog');
	let gameboardStyleData;
	if(gameball){
		gameboardStyleData=window.getComputedStyle(gameball);
	};
	let interval=otwValues.interval;
	let gameLost=otwValues.gameLost;
	let previousMoveDirectionNumber=otwValues.previousMoveDirectionNumber;
	let ballMoveDelay=otwValues.ballMoveDelay;
	let moveVerticalDistance=otwValues.moveVerticalDistance;
	let moveHorizontalDistance=otwValues.moveHorizontalDistance;
	let gameboardHeight=otwValues.gameboardHeight;
	let gameboardWidth=otwValues.gameboardWidth;
	let numberOfMoves=otwValues.numberOfMoves;
	let ballSize=otwValues.ballSize;

	// Game loop
	const runGameLoop=()=>{
		if(!gameLost){
			let moveDirectionNumber=chooseMoveDirection();
			if(Math.abs(moveDirectionNumber-previousMoveDirectionNumber)===2){
				runGameLoop();
			}else{
				interval=setInterval(()=>{
					if(!gameLost){
						previousMoveDirectionNumber=moveDirectionNumber;
						moveGameball(moveDirectionNumber);
						numberOfMoves++;
						let newBallMoveDelay=ballMoveDelay-5;
						ballMoveDelay=Math.max(newBallMoveDelay, 100);
						gameball.style.transition=`top ${ballMoveDelay-200}ms linear 0ms, left ${ballMoveDelay-200}ms linear 0ms`;
						clearInterval(interval);
						runGameLoop();
					};
				}, ballMoveDelay);
				setOtwValues.setInterval(currentValue=>currentValue=interval);
			};
		};
	};
	// Computer ball movement direction decision
	const chooseMoveDirection=()=>{
		let randomNumber=Math.floor((Math.random()*4)+1);
		return randomNumber;
	};
	// Ball movement execution
	const move=(value)=>{
		if(value===1 || value==='ArrowUp'){
			if((parseInt(gameball.style.top)-moveVerticalDistance)<=0){
				gameball.style.top='-1px';
				gameball.style.left=gameball.style.left;
			}else{
				gameball.style.top=(parseInt(gameball.style.top)-moveVerticalDistance)+'px';
			};
		}else if(value===2 || value==='ArrowRight'){
			if((parseInt(gameball.style.left)+moveHorizontalDistance)>=(gameboardWidth-ballSize)){
				gameball.style.top=gameball.style.top;
				gameball.style.left=((gameboardWidth-ballSize)+1)+'px';
			}else{
				gameball.style.left=(parseInt(gameball.style.left)+moveHorizontalDistance)+'px';
			};
		}else if(value===3 || value==='ArrowDown'){
			if((parseInt(gameball.style.top)+moveVerticalDistance)>=(gameboardHeight-ballSize)){
				gameball.style.top=((gameboardHeight-ballSize)+1)+'px';
				gameball.style.left=gameball.style.left;
			}else{
				gameball.style.top=(parseInt(gameball.style.top)+moveVerticalDistance)+'px';
			};
		}else if(value===4 || value==='ArrowLeft'){
			if((parseInt(gameball.style.left)-moveHorizontalDistance)<=0){
				gameball.style.top=gameball.style.top;
				gameball.style.left='-1px';
			}else{
				gameball.style.left=(parseInt(gameball.style.left)-moveHorizontalDistance)+'px';
			};
		};
	};
	// Computer ball movement
	const moveGameball=(directionNumber)=>{
		if(!gameLost){
			move(directionNumber);
		};
	};
	// User ball movement
	const userBallMove=(e)=>{
		if(!gameLost){
			move(e.key);
		};
	};

	// Start game
	const startGame=(e)=>{
		if(e.type==='click' || e.key===' '){
			document.removeEventListener('keydown', startGame);
			gameStartButton.removeEventListener('click', startGame);
			document.addEventListener('keydown', pauseGame);
			document.addEventListener('keydown', userBallMove);
			useModalClose(
				'ModalOtwGameStartDialog',
				windowModalOrdering.openWindowsModals,
				setWindowModalOrdering.setOpenWindowsModals,
				appModalOrdering.openOtwModals,
				setAppModalOrdering.setOpenOtwModals,
				setModals.setModalOtwGameStartDialogOpen,
				setModalShowClasses.setModalOtwGameStartDialogOpenShowClass
			);
			runGameLoop();
		};
	};
	// Pause game
	const pauseGame=(e)=>{
		if(e.key===' ' || e.target.id==='otw-dropdown-menu-item-pause'){
			clearInterval(interval);
			setModals.setModalOtwGamePauseDialogOpen(true);
			setTimeout(()=>{
				const gameResumeButton=document.querySelector('.otw-game-resume-button');
				document.removeEventListener('keydown', pauseGame);
				document.removeEventListener('keydown', userBallMove);
				document.addEventListener('keydown', resumeGame);
				gameResumeButton.addEventListener('click', resumeGame);
				setModalShowClasses.setModalOtwGamePauseDialogOpenShowClass('otw-game-pause-dialog-in-use');
			},100);
		};
	};
	// Resume game
	const resumeGame=(e)=>{
		if(e.type==='click' || e.key===' '){
			const gameResumeButton=document.querySelector('.otw-game-resume-button');
			document.removeEventListener('keydown', resumeGame);
			gameResumeButton.removeEventListener('click', resumeGame);
			document.addEventListener('keydown', pauseGame);
			document.addEventListener('keydown', userBallMove);
			useModalClose(
				'ModalOtwGamePauseDialog',
				windowModalOrdering.openWindowsModals,
				setWindowModalOrdering.setOpenWindowsModals,
				appModalOrdering.openOtwModals,
				setAppModalOrdering.setOpenOtwModals,
				setModals.setModalOtwGamePauseDialogOpen,
				setModalShowClasses.setModalOtwGamePauseDialogOpenShowClass
			);
			runGameLoop();
		};
	};
	// End game
	const endGame=()=>{
		const gameballStyles=getComputedStyle(gameball);
		const gameballCurrentTop=gameballStyles.top;
		const gameballCurrentLeft=gameballStyles.left;
		gameball.style.top=gameballCurrentTop;
		gameball.style.left=gameballCurrentLeft;
		document.removeEventListener('keydown', userBallMove);
		document.removeEventListener('keydown', pauseGame);
		gameLost=true;
		setOtwValues.setGameLost(currentValue=>currentValue=true);
		clearInterval(interval);
		gameball.style.transition='top 0ms linear 0ms, left 0ms linear 0ms';
		setModals.setModalOtwGameEndDialogOpen(true);
		setTimeout(()=>{
			const gameEndTotalMovesSpan=document.querySelector('.otw-move-total');
			const gameEndFinalMoveIntervalSpan=document.querySelector('.otw-final-move-interval');
			const gameEndFinalMoveIntervalCongratulations=document.querySelector('#otw-game-end-lowest-interval-congratulations');
			const gameEndTotalGamesPlayedSpan=document.querySelector('.otw-games-played-total');
			const gamePlayAgainButton=document.querySelector('.otw-game-play-again-button');
			numberOfGamesPlayed++;
			background.style.backgroundColor='#ff000078';
			if(gamePlayAgainButton){
				document.addEventListener('keydown', newGame);
				gamePlayAgainButton.addEventListener('click', newGame);
			};
			if(gameEndTotalMovesSpan){
				gameEndTotalMovesSpan.innerText=numberOfMoves;
			};
			if(gameEndFinalMoveIntervalSpan){
				gameEndFinalMoveIntervalSpan.innerText=ballMoveDelay;
			};
			if(ballMoveDelay===100){
				gameEndFinalMoveIntervalCongratulations.style.display='block';
			};
			if(gameEndTotalGamesPlayedSpan){
				if(numberOfGamesPlayed===1){
					gameEndTotalGamesPlayedSpan.innerText=numberOfGamesPlayed+' '+'time.';
				}else if(numberOfGamesPlayed>1){
					gameEndTotalGamesPlayedSpan.innerText=numberOfGamesPlayed+' '+'times.';
				};
			};
			setModalShowClasses.setModalOtwGameEndDialogOpenShowClass('otw-game-end-dialog-in-use');
			if(numberOfMoves!==0 && gamePlayAgainButton){
				useHandleOtwResultAdd(numberOfMoves, setUser);
			};
		},100);
	};
	// New game
	const newGame=(e)=>{
		const gamePlayAgainButton=document.querySelector('.otw-game-play-again-button');
		if(e.type==='click' || e.key===' '){
			gameLost=false;
			setOtwValues.setGameLost(currentValue=>currentValue=false);
			ballMoveDelay=750;
			numberOfMoves=0;
			background.style.backgroundColor='#f000';
			document.removeEventListener('keydown', newGame);
			gamePlayAgainButton.removeEventListener('click', newGame);
			useModalClose(
				'ModalOtwGameEndDialog',
				windowModalOrdering.openWindowsModals,
				setWindowModalOrdering.setOpenWindowsModals,
				appModalOrdering.openOtwModals,
				setAppModalOrdering.setOpenOtwModals,
				setModals.setModalOtwGameEndDialogOpen,
				setModalShowClasses.setModalOtwGameEndDialogOpenShowClass
			);
			gameball.style.display='none';
			setupGame();
			startGame(e);
		};
	};
	// Pause game execution
	pauseGame(e);
};

export default useHandleOtwGamePause;
