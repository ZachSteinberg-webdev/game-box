import useModalOpen from '../helperFunctions/useModalOpen.jsx';
import useModalClose from '../helperFunctions/useModalClose.jsx';
import useHandleOtwResultAdd from '../formSubmissionHandlers/useHandleOtwResultAdd.jsx';

const useHandleOtwGameSetup=(
	setUser,
	appModalOrdering,
	setAppModalOrdering,
	modals,
	setModals,
	setModalShowClasses,
	otwValues,
	setOtwValues
)=>{



};

useModalOpen(
	'ModalOtwGameStartDialog',
	appModalOrdering.openOtwModals,
	setAppModalOrdering.setOpenOtwModals,
	setModals.setModalOtwGameStartDialogOpen,
	setModalShowClasses.setModalOtwGameStartDialogOpenShowClass,
	'otw-result-history-container-in-use'
);
setTimeout(()=>{
	const background=document.querySelector('.otw-background-overlay');
	const gameboard=document.querySelector('.otw-gameboard');
	const gameball=document.querySelector('.otw-gameball');
	const gameStartDialog=document.querySelector('.otw-game-start-dialog');
	const gameStartButton=document.querySelector('.otw-game-start-button');
	const gamePauseDialog=document.querySelector('.otw-game-pause-dialog');
	// const gameResumeButton=document.querySelector('.otw-game-resume-button');
	const gameEndDialog=document.querySelector('.otw-game-end-dialog');
	// const gameEndTotalMovesSpan=document.querySelector('.otw-move-total');
	// const gameEndFinalMoveIntervalSpan=document.querySelector('.otw-final-move-interval');
	// const gameEndFinalMoveIntervalCongratulations=document.querySelector('#otw-game-end-lowest-interval-congratulations');
	// const gameEndTotalGamesPlayedSpan=document.querySelector('.otw-games-played-total');
	// const gamePlayAgainButton=document.querySelector('.otw-game-play-again-button');

	console.log(gameball);

	let gameboardStyleData;
	if(gameball){
		gameboardStyleData=window.getComputedStyle(gameball);
	};

	let ballMoveDelay=750;
	let gameLost=false;
	setOtwValues.setGameLost(currentValue=>currentValue=false);
	let gameboardHeight=0;
	let gameboardWidth=0;
	let moveVerticalDistance=0;
	let moveHorizontalDistance=0;
	let ballSize=0;
	let ballInitialPositionTop='';
	// let ballInitialPositionBottom='';
	let ballInitialPositionLeft='';
	// let ballInitialPositionRight='';
	let interval=0;
	let numberOfMoves=0;
	let numberOfGamesPlayed=0;
	let previousMoveDirectionNumber=10; // Needs to be a large enough or small enough value (7 or -2) to prevent a given ball auto move direction from being an impossible first move, due to condition "if(Math.abs(randomNumber-previousRandomNumber)===2)" in chooseMoveDirection function

	const setupGame=(e)=>{
		console.log('In game setup');
		if(gameboard){
			gameboardHeight=gameboard.clientHeight;
			console.log('gameboard height', gameboardHeight);
			gameboardWidth=gameboard.clientWidth;
			console.log('gameboard width', gameboardWidth);
		};
		moveVerticalDistance=gameboardHeight/10;
		moveHorizontalDistance=gameboardWidth/10;
		if(gameboardWidth>=gameboardHeight){ // Landscape orientation
			ballSize=gameboardHeight/10;
		}else{                               // Portrait orientation
			ballSize=gameboardWidth/10;
		};
		ballInitialPositionTop=((gameboardHeight-ballSize)/2)+'px';
		ballInitialPositionLeft=((gameboardWidth-ballSize)/2)+'px';
		if(gameball){
			gameball.style.height=ballSize+'px';
			gameball.style.width=ballSize+'px';
			gameball.style.top=ballInitialPositionTop;
			gameball.style.left=ballInitialPositionLeft;
			gameball.style.display='block';
		};
	};

	const runGameLoop=()=>{
		if(!gameLost){
			let moveDirectionNumber=chooseMoveDirection();
			if(Math.abs(moveDirectionNumber-previousMoveDirectionNumber)===2){
				console.log('In chooseMoveDirection randomNumber-previousRandomNumber block');
				runGameLoop();
			}else{
				interval=setInterval(()=>{
					if(!gameLost){
						console.log('In interval loop');
						previousMoveDirectionNumber=moveDirectionNumber;
						console.log(moveDirectionNumber);
						moveGameball(moveDirectionNumber);
						numberOfMoves++;
						console.log('Number of moves', numberOfMoves);
						let newBallMoveDelay=ballMoveDelay-5;
						ballMoveDelay=Math.max(newBallMoveDelay, 100);
						gameball.style.transition=`top ${ballMoveDelay-200}ms linear 0ms, left ${ballMoveDelay-200}ms linear 0ms`;
						console.log(ballMoveDelay);
						clearInterval(interval);
						runGameLoop();
					};
				}, ballMoveDelay);
				setOtwValues.setInterval(currentValue=>currentValue=interval);
			};
		}else if(gameLost){
			// gameboard.style.border='5px solid red';
			// document.removeEventListener('keydown', userBallMove);
		};
	};

	const chooseMoveDirection=()=>{
		let randomNumber=Math.floor((Math.random()*4)+1);
		return randomNumber;
	};

	const move=(value)=>{
		if(value===1 || value==='ArrowUp'){
			if((parseInt(gameball.style.top)-moveVerticalDistance)<=0){
				console.log('test');
				gameball.style.top='-1px';
				gameball.style.left=gameball.style.left;
			}else{
				gameball.style.top=(parseInt(gameball.style.top)-moveVerticalDistance)+'px';
			};
		}else if(value===2 || value==='ArrowRight'){
			if((parseInt(gameball.style.left)+moveHorizontalDistance)>=(gameboardWidth-ballSize)){
				console.log('test');
				gameball.style.top=gameball.style.top;
				gameball.style.left=((gameboardWidth-ballSize)+1)+'px';
			}else{
				gameball.style.left=(parseInt(gameball.style.left)+moveHorizontalDistance)+'px';
			};
		}else if(value===3 || value==='ArrowDown'){
			if((parseInt(gameball.style.top)+moveVerticalDistance)>=(gameboardHeight-ballSize)){
				console.log('test');
				gameball.style.top=((gameboardHeight-ballSize)+1)+'px';
				gameball.style.left=gameball.style.left;
			}else{
				gameball.style.top=(parseInt(gameball.style.top)+moveVerticalDistance)+'px';
			};
		}else if(value===4 || value==='ArrowLeft'){
			if((parseInt(gameball.style.left)-moveHorizontalDistance)<=0){
				console.log('test');
				gameball.style.top=gameball.style.top;
				gameball.style.left='-1px';
			}else{
				gameball.style.left=(parseInt(gameball.style.left)-moveHorizontalDistance)+'px';
			};
		};
	};

	const moveGameball=(directionNumber)=>{
		if(!gameLost){
			console.log('Computer moved the ball');
			move(directionNumber);
		};
	};

	const userBallMove=(e)=>{
		if(!gameLost){
			console.log('User moved the ball');
			move(e.key);
		};
	};

	// const userBallMove=(e)=>{
	// 	if(e.key==='ArrowUp'){
	// 		gameball.style.top=(parseInt(gameball.style.top)-moveVerticalDistance)+'px';
	// 	}else if(e.key==='ArrowRight'){
	// 		gameball.style.left=(parseInt(gameball.style.left)+moveHorizontalDistance)+'px';
	// 	}else if(e.key==='ArrowDown'){
	// 		gameball.style.top=(parseInt(gameball.style.top)+moveVerticalDistance)+'px';
	// 	}else if(e.key==='ArrowLeft'){
	// 		gameball.style.left=(parseInt(gameball.style.left)-moveHorizontalDistance)+'px';
	// 	};
	// };

	const startGame=(e)=>{
		if(e.type==='click' || e.key===' '){
			document.removeEventListener('keydown', startGame);
			gameStartButton.removeEventListener('click', startGame);
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

	const pauseGame=(e)=>{
		if(e.key===' '){
			clearInterval(interval);
			setModals.setModalOtwGamePauseDialogOpen(true);
			setTimeout(()=>{
				const gameResumeButton=document.querySelector('.otw-game-resume-button');
				document.removeEventListener('keydown', pauseGame);
				document.removeEventListener('keydown', userBallMove);
				document.addEventListener('keydown', resumeGame);
				gameResumeButton.addEventListener('click', resumeGame);
				// useModalOpen(
				// 	'ModalOtwGamePauseDialog',
				// 	appModalOrdering.openOtwModals,
				// 	setAppModalOrdering.setOpenOtwModals,
				// 	setModals.setModalOtwGamePauseDialogOpen,
				// 	setModalShowClasses.setModalOtwGamePauseDialogOpenShowClass,
				// 	'otw-game-pause-dialog-in-use'
				// );
				// gamePauseDialog.style.visibility='visible';
				// gamePauseDialog.style.opacity='100';
				setModalShowClasses.setModalOtwGamePauseDialogOpenShowClass('otw-game-pause-dialog-in-use');
			},100);
		};
	};

	const resumeGame=(e)=>{
		if(e.type==='click' || e.key===' '){
			const gameResumeButton=document.querySelector('.otw-game-resume-button');
			document.removeEventListener('keydown', resumeGame);
			gameResumeButton.removeEventListener('click', resumeGame);
			console.log('start game event click', e);
			console.log('In game start');
			document.addEventListener('keydown', pauseGame);
			document.addEventListener('keydown', userBallMove);
			useModalClose(
				'ModalOtwGamePauseDialog',
				appModalOrdering.openOtwModals,
				setAppModalOrdering.setOpenOtwModals,
				setModals.setModalOtwGamePauseDialogOpen,
				setModalShowClasses.setModalOtwGamePauseDialogOpenShowClass
			);
			// gamePauseDialog.style.opacity='0';
			// setTimeout(()=>{
			// 	gamePauseDialog.style.visibility='hidden';
			// },500);
			runGameLoop();
		};
	};
	const endGame=()=>{
		// useModalOpen(
		// 	'ModalOtwGameEndDialog',
		// 	appModalOrdering.openOtwModals,
		// 	setAppModalOrdering.setOpenOtwModals,
		// 	setModals.setModalOtwGameEndDialogOpen,
		// 	setModalShowClasses.setModalOtwGameEndDialogOpenShowClass,
		// 	'otw-game-end-dialog-in-use'
		// );
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
			// gameboard.style.borderColor='red';
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
			// gameEndDialog.style.visibility='visible';
			// gameEndDialog.style.opacity='100';
			setModalShowClasses.setModalOtwGameEndDialogOpenShowClass('otw-game-end-dialog-in-use');
			if(numberOfMoves!==0 && gamePlayAgainButton){
				useHandleOtwResultAdd(numberOfMoves, setUser);
			};
		},100);
	};

	const newGame=(e)=>{
		const gamePlayAgainButton=document.querySelector('.otw-game-play-again-button');
		if(e.type==='click' || e.key===' '){
			gameLost=false;
			setOtwValues.setGameLost(currentValue=>currentValue=false);
			ballMoveDelay=750;
			numberOfMoves=0;
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

	// const startPauseResume=(e)=>{
	// 	if(e.key=' '){
	// 		startGame();
	// 	};
	// };

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
	if(gameball){
		gameboardObserver.observe(gameball);
	};

	if(gameball){
		gameStartButton.addEventListener('click', startGame);
		document.addEventListener('keydown', startGame);
	};
	// window.addEventListener('load', setupGame);

	useModalClose(
		'ModalOtwGamePauseDialog',
		appModalOrdering.openOtwModals,
		setAppModalOrdering.setOpenOtwModals,
		setModals.setModalOtwGamePauseDialogOpen,
		setModalShowClasses.setModalOtwGamePauseDialogOpenShowClass
	);
	useModalClose(
		'ModalOtwGameEndDialog',
		appModalOrdering.openOtwModals,
		setAppModalOrdering.setOpenOtwModals,
		setModals.setModalOtwGameEndDialogOpen,
		setModalShowClasses.setModalOtwGameEndDialogOpenShowClass
	);

	setupGame();

	// return()=>{
	// 	gameStartButton.removeEventListener('click', startGame);
	// 	document.removeEventListener('keydown', startGame);
	// };

	// return {gameStartButton, startGame};
},500);

export default useHandleOtwGameSetup;
