const useHandleOtwGameRestart=(
	e,
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
		setOtwValues.setGameboardHeight((currentValue)=>currentValue=gameboard.clientHeight);
		// gameboardHeight=gameboard.clientHeight;
		// console.log('gameboard height', gameboardHeight);
		setOtwValues.setGameboardWidth((currentValue)=>currentValue=gameboard.clientWidth);
		// gameboardWidth=gameboard.clientWidth;
		// console.log('gameboard width', gameboardWidth);
		setOtwValues.setMoveVerticalDistance((currentValue)=>currentValue=otwValues.gameboardHeight/10);
		// moveVerticalDistance=gameboardHeight/10;
		setOtwValues.setMoveHorizontalDistance((currentValue)=>currentValue=otwValues.gameboardWidth/10);
		// moveHorizontalDistance=gameboardWidth/10;
		if(otwValues.gameboardWidth>=otwValues.gameboardHeight){ // Landscape orientation
			setOtwValues.setBallSize((currentValue)=>currentValue=otwValues.gameboardHeight/10);
			// ballSize=gameboardHeight/10;
		}else{                               // Portrait orientation
			setOtwValues.setBallSize((currentValue)=>currentValue=otwValues.gameboardWidth/10);
			// ballSize=gameboardWidth/10;
		};
		setOtwValues.setBallInitialPositionTop((currentValue)=>currentValue=((otwValues.gameboardHeight-otwValues.ballSize)/2)+'px');
		// ballInitialPositionTop=((gameboardHeight-ballSize)/2)+'px';
		setOtwValues.setBallInitialPositionLeft((currentValue)=>currentValue=((otwValues.gameboardWidth-otwValues.ballSize)/2)+'px');
		// ballInitialPositionLeft=((gameboardWidth-ballSize)/2)+'px';
		gameball.style.height=otwValues.ballSize+'px';
		gameball.style.width=otwValues.ballSize+'px';
		gameball.style.top=otwValues.ballInitialPositionTop;
		gameball.style.left=otwValues.ballInitialPositionLeft;
		gameball.style.display='block';
	};

	const runGameLoop=()=>{
		if(!otwValues.gameLost){
			let moveDirectionNumber=chooseMoveDirection();
			if(Math.abs(moveDirectionNumber-otwValues.previousMoveDirectionNumber)===2){
				console.log('In chooseMoveDirection randomNumber-previousRandomNumber block');
				runGameLoop();
			}else{
				let interval=setInterval(()=>{
					console.log('In interval loop');
					// previousMoveDirectionNumber=moveDirectionNumber;
					setOtwValues.setPreviousMoveDirectionNumber((currentValue)=>currentValue=moveDirectionNumber);
					console.log('moveDirectionNumber', moveDirectionNumber);
					moveGameball(moveDirectionNumber);
					// numberOfMoves++;
					setOtwValues.setNumberOfMoves((currentValue)=>currentValue+=1);
					console.log('Number of moves', otwValues.numberOfMoves);
					let newBallMoveDelay=otwValues.ballMoveDelay-5;
					// ballMoveDelay=Math.max(newBallMoveDelay, 100);
					setOtwValues.setBallMoveDelay((currentValue)=>currentValue=Math.max(newBallMoveDelay, 100));
					gameball.style.transition=`top ${otwValues.ballMoveDelay}ms linear 0ms, left ${otwValues.ballMoveDelay}ms linear 0ms`;
					console.log(otwValues.ballMoveDelay);
					clearInterval(otwValues.interval);
					runGameLoop();
				}, otwValues.ballMoveDelay);
				setOtwValues.setInterval((currentValue)=>currentValue=interval);
			};
		}else if(otwValues.gameLost){
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
			if((parseInt(gameball.style.top)-otwValues.moveVerticalDistance)<=0){
				console.log('test');
				gameball.style.top='-1px';
				gameball.style.left=gameball.style.left;
			}else{
				gameball.style.top=(parseInt(gameball.style.top)-otwValues.moveVerticalDistance)+'px';
			};
		}else if(value===2 || value==='ArrowRight'){
			if((parseInt(gameball.style.left)+otwValues.moveHorizontalDistance)>=(otwValues.gameboardWidth-otwValues.ballSize)){
				console.log('test');
				gameball.style.top=gameball.style.top;
				gameball.style.left=((otwValues.gameboardWidth-otwValues.ballSize)+1)+'px';
			}else{
				gameball.style.left=(parseInt(gameball.style.left)+otwValues.moveHorizontalDistance)+'px';
			};
		}else if(value===3 || value==='ArrowDown'){
			if((parseInt(gameball.style.top)+otwValues.moveVerticalDistance)>=(otwValues.gameboardHeight-otwValues.ballSize)){
				console.log('test');
				gameball.style.top=((otwValues.gameboardHeight-otwValues.ballSize)+1)+'px';
				gameball.style.left=gameball.style.left;
			}else{
				gameball.style.top=(parseInt(gameball.style.top)+otwValues.moveVerticalDistance)+'px';
			};
		}else if(value===4 || value==='ArrowLeft'){
			if((parseInt(gameball.style.left)-otwValues.moveHorizontalDistance)<=0){
				console.log('test');
				gameball.style.top=gameball.style.top;
				gameball.style.left='-1px';
			}else{
				gameball.style.left=(parseInt(gameball.style.left)-otwValues.moveHorizontalDistance)+'px';
			};
		};
	};

	const moveGameball=(directionNumber)=>{
		move(directionNumber);
	};

	const userBallMove=(e)=>{
		move(e.key);
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

	newGame(e);
};

export default useHandleOtwGameRestart;
