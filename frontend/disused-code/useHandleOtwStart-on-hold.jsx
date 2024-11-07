const useHandleOtwStart=(e)=>{
	const background=document.querySelector('.background-overlay');
	const gameboard=document.querySelector('.gameboard');
	const gameball=document.querySelector('.gameball');
	const gameStartDialog=document.querySelector('.game-start-dialog');
	const gameStartButton=document.querySelector('.game-start-button');
	const gamePauseDialog=document.querySelector('.game-pause-dialog');
	const gameResumeButton=document.querySelector('.game-resume-button');
	const gameEndDialog=document.querySelector('.game-end-dialog');
	const gameEndTotalMovesSpan=document.querySelector('.move-total');
	const gameEndFinalMoveIntervalSpan=document.querySelector('.final-move-interval');
	const gameEndFinalMoveIntervalCongratulations=document.querySelector('#game-end-lowest-interval-congratulations');
	const gameEndTotalGamesPlayedSpan=document.querySelector('.games-played-total');
	const gamePlayAgainButton=document.querySelector('.game-play-again-button');

	let gameboardStyleData=window.getComputedStyle(gameball);

	let ballMoveDelay=750;
	let gameLost=false;
	let gameboardHeight=0;
	let gameboardWidth=0;
	let moveVerticalDistance=0;
	let moveHorizontalDistance=0;
	let ballSize=0;
	let ballInitialPositionTop='';
	let ballInitialPositionLeft='';
	let interval=0;
	let numberOfMoves=0;
	let numberOfGamesPlayed=0;
	let previousMoveDirectionNumber=10; // Needs to be a large enough or small enough value (7 or -2) to prevent a given ball auto move direction from being an impossible first move, due to condition "if(Math.abs(randomNumber-previousRandomNumber)===2)" in chooseMoveDirection function

	const setupGame=(e)=>{
		console.log('In game setup');
		gameboardHeight=gameboard.clientHeight;
		console.log('gameboard height', gameboardHeight);
		gameboardWidth=gameboard.clientWidth;
		console.log('gameboard width', gameboardWidth);
		moveVerticalDistance=gameboardHeight/10;
		moveHorizontalDistance=gameboardWidth/10;
		if(gameboardWidth>=gameboardHeight){ // Landscape orientation
			ballSize=gameboardHeight/10;
		}else{                               // Portrait orientation
			ballSize=gameboardWidth/10;
		};
		ballInitialPositionTop=((gameboardHeight-ballSize)/2)+'px';
		ballInitialPositionLeft=((gameboardWidth-ballSize)/2)+'px';
		gameball.style.height=ballSize+'px';
		gameball.style.width=ballSize+'px';
		gameball.style.top=ballInitialPositionTop;
		gameball.style.left=ballInitialPositionLeft;
		gameball.style.display='block';
	};

	const runGameLoop=()=>{
		if(!gameLost){
			let moveDirectionNumber=chooseMoveDirection();
			if(Math.abs(moveDirectionNumber-previousMoveDirectionNumber)===2){
				console.log('In chooseMoveDirection randomNumber-previousRandomNumber block');
				runGameLoop();
			}else{
				interval=setInterval(()=>{
					console.log('In interval loop');
					previousMoveDirectionNumber=moveDirectionNumber;
					console.log(moveDirectionNumber);
					moveGameball(moveDirectionNumber);
					numberOfMoves++;
					console.log('Number of moves', numberOfMoves);
					newBallMoveDelay=ballMoveDelay-5;
					ballMoveDelay=Math.max(newBallMoveDelay, 100);
					gameball.style.transition=`top ${ballMoveDelay}ms linear 0ms, left ${ballMoveDelay}ms linear 0ms`;
					console.log(ballMoveDelay);
					clearInterval(interval);
					runGameLoop();
				}, ballMoveDelay);
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
				gamebal.style.left=gameball.style.left;
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
		move(directionNumber);
	};

	const userBallMove=(e)=>{
		move(e.key);
	};

	// const startGame=(e)=>{
	// 	if(e.type==='click' || e.key===' '){
	// 		document.removeEventListener('keydown', startGame);
	// 		gameStartButton.removeEventListener('click', startGame);
	// 		console.log('start game event click', e);
	// 		console.log('In game start');
	// 		document.addEventListener('keydown', pauseGame);
	// 		document.addEventListener('keydown', userBallMove);
	// 		gameStartDialog.style.opacity='0';
	// 		gameStartDialog.style.visibility='hidden';
	// 		runGameLoop();
	// 	};
	// };

	const pauseGame=(e)=>{
		if(e.key===' '){
			clearInterval(interval);
			document.removeEventListener('keydown', pauseGame);
			document.removeEventListener('keydown', userBallMove);
			document.addEventListener('keydown', resumeGame);
			gameResumeButton.addEventListener('click', resumeGame);
			gamePauseDialog.style.visibility='visible';
			gamePauseDialog.style.opacity='100';
		};
	};

	const resumeGame=(e)=>{
		if(e.type==='click' || e.key===' '){
			document.removeEventListener('keydown', resumeGame);
			gameResumeButton.removeEventListener('click', resumeGame);
			console.log('start game event click', e);
			console.log('In game start');
			document.addEventListener('keydown', pauseGame);
			document.addEventListener('keydown', userBallMove);
			gamePauseDialog.style.opacity='0';
			setTimeout(()=>{
				gamePauseDialog.style.visibility='hidden';
			},500);
			runGameLoop();
		};
	};
	const endGame=()=>{
		clearInterval(interval);
		gameLost=true;
		numberOfGamesPlayed++;
		// gameboard.style.borderColor='red';
		background.style.backgroundColor='#ff000078';
		document.removeEventListener('keydown', userBallMove);
		document.removeEventListener('keydown', pauseGame);
		document.addEventListener('keydown', newGame);
		gamePlayAgainButton.addEventListener('click', newGame);
		gameEndTotalMovesSpan.innerText=numberOfMoves;
		gameEndFinalMoveIntervalSpan.innerText=ballMoveDelay;
		if(ballMoveDelay===100){
			gameEndFinalMoveIntervalCongratulations.style.display='block';
		}
		if(numberOfGamesPlayed===1){
			gameEndTotalGamesPlayedSpan.innerText=numberOfGamesPlayed+' '+'time.';
		}else if(numberOfGamesPlayed>1){
			gameEndTotalGamesPlayedSpan.innerText=numberOfGamesPlayed+' '+'times.';
		};
		gameEndDialog.style.visibility='visible';
		gameEndDialog.style.opacity='100';
	};

	const newGame=(e)=>{
		if(e.type==='click' || e.key===' '){
			gameLost=false;
			ballMoveDelay=750;
			numberOfMoves=0;
			// gameboard.style.borderColor='blue';
			background.style.backgroundColor='#f000';
			document.removeEventListener('keydown', newGame);
			gamePlayAgainButton.removeEventListener('click', newGame);
			gameEndDialog.style.opacity='0';
			setTimeout(()=>{
				gameEndDialog.style.visibility='hidden';
			},500);
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

	gameStartButton.addEventListener('click', startGame);
	document.addEventListener('keydown', startGame);
	window.addEventListener('load', setupGame);
};

export default useHandleOtwStart;
