import useModalClose from './useModalClose.jsx';
import useAppQuit from './useAppQuit.jsx';
import useHandleRttTestQuit from '../eventListeners/useHandleRttTestQuit.jsx';
import useHandleSleep from './useHandleSleep.jsx';
import useHandleWake from './useHandleWake.jsx';

const useHandleShutdownRestartFromDesktop=(
	e,
	setUser,
	navigate,
	windowModalOrdering,
	setWindowModalOrdering,
	appOrdering,
	setAppOrdering,
	appModalOrdering,
	setAppModalOrdering,
	modals,
	setModals,
	setModalShowClasses,
	setMenubars,
	panesOpen,
	setPanesOpen,
	rttValues,
	setRttValues,
	otwValues,
	setOtwValues,
	windowSizing
)=>{
	let openAppsMinusModals=windowModalOrdering.openWindowsModals.filter((app)=>app.includes('Window'));
	const delay=1000;
	let modalSpTimeout=0;
	let modalRttTimeout=0;
	let modalScTimeout=0;
	let modalOtwTimeout=0;
	let hideDesktopIconsTimeout=0;
	let hideMenubarTimeout=0;
	let showSpinnerTimeout=0;
	let sleepTimeout=0;
	let navigateTimeout=0;
	if(openAppsMinusModals[0]){
		switch(openAppsMinusModals[0]){
			case 'WindowSpContainer':
			modalSpTimeout=(delay*1);
			break;
			case 'WindowRttContainer':
			modalRttTimeout=(delay*1);
			break;
			case 'WindowScContainer':
			modalScTimeout=(delay*1);
			break;
			case 'WindowOtwContainer':
			modalOtwTimeout=(delay*1);
		};
	};
	if(openAppsMinusModals[1]){
		switch(openAppsMinusModals[1]){
			case 'WindowSpContainer':
			modalSpTimeout=(delay*2);
			break;
			case 'WindowRttContainer':
			modalRttTimeout=(delay*2);
			break;
			case 'WindowScContainer':
			modalScTimeout=(delay*2);
			break;
			case 'WindowOtwContainer':
			modalOtwTimeout=(delay*2);
		};
	};
	if(openAppsMinusModals[2]){
		switch(openAppsMinusModals[2]){
			case 'WindowSpContainer':
			modalSpTimeout=(delay*3);
			break;
			case 'WindowRttContainer':
			modalRttTimeout=(delay*3);
			break;
			case 'WindowScContainer':
			modalScTimeout=(delay*3);
			break;
			case 'WindowOtwContainer':
			modalOtwTimeout=(delay*3);
		};
	};
	if(openAppsMinusModals[3]){
		switch(openAppsMinusModals[3]){
			case 'WindowSpContainer':
			modalSpTimeout=(delay*4);
			break;
			case 'WindowRttContainer':
			modalRttTimeout=(delay*4);
			break;
			case 'WindowScContainer':
			modalScTimeout=(delay*4);
			break;
			case 'WindowOtwContainer':
			modalOtwTimeout=(delay*4);
		};
	};
	switch(openAppsMinusModals.length){
		case 0:
			hideDesktopIconsTimeout=(delay*1);
			hideMenubarTimeout=(delay*2);
			showSpinnerTimeout=(delay*3);
			sleepTimeout=(delay*4);
			navigateTimeout=(delay*6);
			break;
		case 1:
			hideDesktopIconsTimeout=(delay*2);
			hideMenubarTimeout=(delay*3);
			showSpinnerTimeout=(delay*4);
			sleepTimeout=(delay*5);
			navigateTimeout=(delay*7);
			break;
		case 2:
			hideDesktopIconsTimeout=(delay*3);
			hideMenubarTimeout=(delay*4);
			showSpinnerTimeout=(delay*5);
			sleepTimeout=(delay*6);
			navigateTimeout=(delay*8);
			break;
		case 3:
			hideDesktopIconsTimeout=(delay*4);
			hideMenubarTimeout=(delay*5);
			showSpinnerTimeout=(delay*6);
			sleepTimeout=(delay*7);
			navigateTimeout=(delay*9);
			break;
		case 4:
			hideDesktopIconsTimeout=(delay*5);
			hideMenubarTimeout=(delay*6);
			showSpinnerTimeout=(delay*7);
			sleepTimeout=(delay*8);
			navigateTimeout=(delay*10);
	};
	setTimeout(()=>{
		if(modals.modalSpContainerOpen){
			useAppQuit(
				'WindowSpContainer',
				windowModalOrdering.openWindowsModals,
				setWindowModalOrdering.setOpenWindowsModals,
				appOrdering.openApps,
				setAppOrdering.setOpenApps,
				setMenubars.setMenubarSp,
				setModals.setModalSpContainerOpen,
				setModalShowClasses.setModalSpContainerOpenShowClass
			);
		};
	},modalSpTimeout);
	setTimeout(()=>{
		if(modals.modalRttContainerOpen){
			if(modals.modalAboutReactionTimeTestOpen){
				useModalClose(
					'ModalRttAbout',
					windowModalOrdering.openWindowsModals,
					setWindowModalOrdering.setOpenWindowsModals,
					appModalOrdering.openRttModals,
					setAppModalOrdering.setOpenRttModals,
					setModals.setModalAboutReactionTimeTestOpen,
					setModalShowClasses.setModalAboutReactionTimeTestOpenShowClass
				);
			};
			if(modals.modalRttRestartConfirmationOpen){
				useModalClose(
					'ModalRttRestart',
					windowModalOrdering,
					setWindowModalOrdering,
					appModalOrdering.openRttModals,
					setAppModalOrdering.setOpenRttModals,
					setModals.setModalRttRestartConfirmationOpen,
					setModalShowClasses.setModalRttRestartConfirmationOpenShowClass
				);
			};
			if(modals.modalRttInstructionsOpen){
				useModalClose(
					'ModalRttInstructions',
					windowModalOrdering.openWindowsModals,
					setWindowModalOrdering.setOpenWindowsModals,
					appModalOrdering.openRttModals,
					setAppModalOrdering.setOpenRttModals,
					setModals.setModalRttInstructionsOpen,
					setModalShowClasses.setModalRttInstructionsOpenShowClass
				);
			};
			if(modals.modalRttAnticheatOpen){
				useModalClose(
					'ModalRttAnticheat',
					windowModalOrdering.openWindowsModals,
					setWindowModalOrdering.setOpenWindowsModals,
					appModalOrdering.openRttModals,
					setAppModalOrdering.setOpenRttModals,
					setModals.setModalRttAnticheatOpen,
					setModalShowClasses.setModalRttAnticheatOpenShowClass
				);
			};
			if(modals.modalRttResultHistoryOpen){
				useModalClose(
					'ModalRttResultHistory',
					windowModalOrdering.openWindowsModals,
					setWindowModalOrdering.setOpenWindowsModals,
					appModalOrdering.openRttModals,
					setAppModalOrdering.setOpenRttModals,
					setModals.setModalRttResultHistoryOpen,
					setModalShowClasses.setModalRttResultHistoryOpenShowClass
				);
			};
			useHandleRttTestQuit(
				setRttValues.setTestButtonClickCounter,
				setRttValues.setTestResultsCounter,
				setRttValues.setAnticheatAlertTriggeredYet
			);
			useAppQuit(
				'WindowRttContainer',
				windowModalOrdering.openWindowsModals,
				setWindowModalOrdering.setOpenWindowsModals,
				appOrdering.openApps,
				setAppOrdering.setOpenApps,
				setMenubars.setMenubarRtt,
				setModals.setModalRttContainerOpen,
				setModalShowClasses.setModalRttContainerOpenShowClass
			);
		};
	},modalRttTimeout);
	setTimeout(()=>{
		if(modals.modalScContainerOpen){
			if(modals.modalAboutSpeedClickerOpen){
				useModalClose(
					'ModalScAbout',
					windowModalOrdering.openWindowsModals,
					setWindowModalOrdering.setOpenWindowsModals,
					appModalOrdering.openScModals,
					setAppModalOrdering.setOpenScModals,
					setModals.setModalAboutSpeedClickerOpen,
					setModalShowClasses.setModalAboutSpeedClickerOpenShowClass
				);
			};
			if(modals.modalScInstructionsOpen){
				useModalClose(
					'ModalScInstructions',
					windowModalOrdering.openWindowsModals,
					setWindowModalOrdering.setOpenWindowsModals,
					appModalOrdering.openScModals,
					setAppModalOrdering.setOpenScModals,
					setModals.setModalScInstructionsOpen,
					setModalShowClasses.setModalScInstructionsOpenShowClass
				);
			};
			if(modals.modalScResultHistoryOpen){
				useModalClose(
					'ModalScResultHistory',
					windowModalOrdering.openWindowsModals,
					setWindowModalOrdering.setOpenWindowsModals,
					appModalOrdering.openScModals,
					setAppModalOrdering.setOpenScModals,
					setModals.setModalScResultHistoryOpen,
					setModalShowClasses.setModalScResultHistoryOpenShowClass
				);
			};
			useAppQuit(
				'WindowScContainer',
				windowModalOrdering.openWindowsModals,
				setWindowModalOrdering.setOpenWindowsModals,
				appOrdering.openApps,
				setAppOrdering.setOpenApps,
				setMenubars.setMenubarSc,
				setModals.setModalScContainerOpen,
				setModalShowClasses.setModalScContainerOpenShowClass
			);
		};
	},modalScTimeout);
	setTimeout(()=>{
		if(modals.modalOtwContainerOpen){
			if(modals.modalOtwGameStartDialogOpen){
				useModalClose(
					'ModalOtwGameStartDialog',
					windowModalOrdering.openWindowsModals,
					setWindowModalOrdering.setOpenWindowsModals,
					appModalOrdering.openOtwModals,
					setAppModalOrdering.setOpenOtwModals,
					setModals.setModalOtwGameStartDialogOpen,
					setModalShowClasses.setModalOtwGameStartDialogOpenShowClass
				);
			};
			if(modals.modalOtwGamePauseDialogOpen){
				useModalClose(
					'ModalOtwGamePauseDialog',
					windowModalOrdering.openWindowsModals,
					setWindowModalOrdering.setOpenWindowsModals,
					appModalOrdering.openOtwModals,
					setAppModalOrdering.setOpenOtwModals,
					setModals.setModalOtwGamePauseDialogOpen,
					setModalShowClasses.setModalOtwGamePauseDialogOpenShowClass
				);
			};
			if(modals.modalOtwGameEndDialogOpen){
				useModalClose(
					'ModalOtwGameEndDialog',
					windowModalOrdering.openWindowsModals,
					setWindowModalOrdering.setOpenWindowsModals,
					appModalOrdering.openOtwModals,
					setAppModalOrdering.setOpenOtwModals,
					setModals.setModalOtwGameEndDialogOpen,
					setModalShowClasses.setModalOtwGameEndDialogOpenShowClass
				);
			};
			if(modals.modalAboutOffTheWallOpen){
				useModalClose(
					'ModalOtwAbout',
					windowModalOrdering.openWindowsModals,
					setWindowModalOrdering.setOpenWindowsModals,
					appModalOrdering.openOtwModals,
					setAppModalOrdering.setOpenOtwModals,
					setModals.setModalAboutOffTheWallOpen,
					setModalShowClasses.setModalAboutOffTheWallOpenShowClass
				);
			};
			if(modals.modalOtwInstructionsOpen){
				useModalClose(
					'ModalOtwInstructions',
					windowModalOrdering.openWindowsModals,
					setWindowModalOrdering.setOpenWindowsModals,
					appModalOrdering.openOtwModals,
					setAppModalOrdering.setOpenOtwModals,
					setModals.setModalOtwInstructionsOpen,
					setModalShowClasses.setModalOtwInstructionsOpenShowClass
				);
			};
			if(modals.modalOtwResultHistoryOpen){
				useModalClose(
					'ModalOtwResultHistory',
					windowModalOrdering.openWindowsModals,
					setWindowModalOrdering.setOpenWindowsModals,
					appModalOrdering.openOtwModals,
					setAppModalOrdering.setOpenOtwModals,
					setModals.setModalOtwResultHistoryOpen,
					setModalShowClasses.setModalOtwResultHistoryOpenShowClass
				);
			};
			useAppQuit(
				'WindowOtwContainer',
				windowModalOrdering.openWindowsModals,
				setWindowModalOrdering.setOpenWindowsModals,
				appOrdering.openApps,
				setAppOrdering.setOpenApps,
				setMenubars.setMenubarOtw,
				setModals.setModalOtwContainerOpen,
				setModalShowClasses.setModalOtwContainerOpenShowClass
			);
		};
	},modalOtwTimeout);
	setTimeout(()=>{
		const desktopIcons=document.querySelectorAll('.desktop-icon-container');
		desktopIcons.forEach((icon, i) => {
			icon.style.display='none';
		});
	},hideDesktopIconsTimeout);
	setTimeout(()=>{
		const menubar=document.querySelector('.menubar-container');
		menubar.style.display='none';
	},hideMenubarTimeout);
	setTimeout(()=>{
		const desktopSpinner=document.querySelector('.desktop-spinner');
		desktopSpinner.style.display='block';
	},showSpinnerTimeout);
	setTimeout(()=>{
		useHandleSleep(setModals, setModalShowClasses);
	},sleepTimeout);
	setTimeout(()=>{
		useHandleWake(setModals, setModalShowClasses);
		if(e.target.id==='dropdown-menu-item-computer-shut-down'){
			navigate('/shutdown');
		}else if(e.target.id==='dropdown-menu-item-computer-restart'){
			navigate('/restart');
		};
	},navigateTimeout);
};

export default useHandleShutdownRestartFromDesktop;
