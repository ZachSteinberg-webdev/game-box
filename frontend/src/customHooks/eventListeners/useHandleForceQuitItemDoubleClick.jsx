import useModalClose from '../helperFunctions/useModalClose.jsx';
import useAppQuit from '../helperFunctions/useAppQuit.jsx';
import useHandleRttTestQuit from './useHandleRttTestQuit.jsx';

const useHandleForceQuitItemDoubleClick=(
	e,
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
	setRttValues
)=>{
	if(e.target.id==='fq-list-item-rtt'){
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
				windowModalOrdering.openWindowsModals,
				setWindowModalOrdering.setOpenWindowsModals,
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
	}else if(e.target.id==='fq-list-item-sc'){
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
	}else if(e.target.id==='fq-list-item-otw'){
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
	}else if(e.target.id==='fq-list-item-sp'){
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
};

export default useHandleForceQuitItemDoubleClick;
