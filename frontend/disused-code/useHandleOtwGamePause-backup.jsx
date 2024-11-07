const useHandleOtwGamePause=(modals, setModals, setModalShowClasses, otwValues, setOtwValues)=>{
	let gameLost=otwValues.gameLost;
	const userBallMove=(e)=>{
		if(!gameLost){
			console.log('User moved the ball');
			move(e.key);
		};
	};
	const pauseGame=()=>{
		clearInterval(otwValues.interval);
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
	pauseGame();
};

export default useHandleOtwGamePause;
