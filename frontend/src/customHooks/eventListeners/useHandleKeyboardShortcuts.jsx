import useModalOpen from '../helperFunctions/useModalOpen.jsx';
import useWindowOpen from '../helperFunctions/useWindowOpen.jsx';
import useModalClose from '../helperFunctions/useModalClose.jsx';
import useWindowClose from '../helperFunctions/useWindowClose.jsx';
import useWindowMinimize from '../helperFunctions/useWindowMinimize.jsx';
import useWindowMaximize from '../helperFunctions/useWindowMaximize.jsx';
import useAppStart from '../helperFunctions/useAppStart.jsx';
import useAppQuit from '../helperFunctions/useAppQuit.jsx';
import useHandleLogout from '../formSubmissionHandlers/useHandleLogout.jsx';
import useHandleRttTestPause from './useHandleRttTestPause.jsx';
import useHandleOtwGamePause from './useHandleOtwGamePause.jsx';

const useHandleKeyboardShortcuts=(
	e,
	setUser,
	navigate,
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
	if(appOrdering.openApps[0]==='WindowRttContainer'){
		if(e.altKey && e.code==='KeyI'){
			useModalOpen(
				'ModalRttInstructions',
				appModalOrdering.openRttModals,
				setAppModalOrdering.setOpenRttModals,
				setModals.setModalRttInstructionsOpen,
				setModalShowClasses.setModalRttInstructionsOpenShowClass,
				'rtt-test-instructions-container-in-use'
			);
		}else if(e.altKey && e.code==='KeyH'){
			useModalOpen(
				'ModalRttResultHistory',
				appModalOrdering.openRttModals,
				setAppModalOrdering.setOpenRttModals,
				setModals.setModalRttResultHistoryOpen,
				setModalShowClasses.setModalRttResultHistoryOpenShowClass,
				'rtt-test-result-history-container-in-use'
			);
		}else if(e.altKey && e.code==='KeyQ'){
			if(modals.modalAboutReactionTimeTestOpen){
				useModalClose(
					'ModalRttAbout',
					appModalOrdering.openRttModals,
					setAppModalOrdering.setOpenRttModals,
					setModals.setModalAboutReactionTimeTestOpen,
					setModalShowClasses.setModalAboutReactionTimeTestOpenShowClass
				);
			};
			if(modals.modalRttRestartConfirmationOpen){
				useModalClose(
					'ModalRttRestart',
					appModalOrdering.openRttModals,
					setAppModalOrdering.setOpenRttModals,
					setModals.setModalRttRestartConfirmationOpen,
					setModalShowClasses.setModalRttRestartConfirmationOpenShowClass
				);
			};
			if(modals.modalRttInstructionsOpen){
				useModalClose(
					'ModalRttInstructions',
					appModalOrdering.openRttModals,
					setAppModalOrdering.setOpenRttModals,
					setModals.setModalRttInstructionsOpen,
					setModalShowClasses.setModalRttInstructionsOpenShowClass
				);
			};
			if(modals.modalRttAnticheatOpen){
				useModalClose(
					'ModalRttAnticheat',
					appModalOrdering.openRttModals,
					setAppModalOrdering.setOpenRttModals,
					setModals.setModalRttAnticheatOpen,
					setModalShowClasses.setModalRttAnticheatOpenShowClass
				);
			};
			if(modals.modalRttResultHistoryOpen){
				useModalClose(
					'ModalRttResultHistory',
					appModalOrdering.openRttModals,
					setAppModalOrdering.setOpenRttModals,
					setModals.setModalRttResultHistoryOpen,
					setModalShowClasses.setModalRttResultHistoryOpenShowClass
				);
			};
			useAppQuit(
				'WindowRttContainer',
				appOrdering.openApps,
				setAppOrdering.setOpenApps,
				setMenubars.setMenubarRtt,
				setModals.setModalRttContainerOpen,
				setModalShowClasses.setModalRttContainerOpenShowClass
			);
		}else if(e.altKey && e.code==='KeyP'){
			useHandleRttTestPause(
				setRttValues.setTestButtonClickCounter,
				setRttValues.setTestResultsCounter
			);
		}else if(e.altKey && e.code==='KeyW'){
			useWindowClose('.rtt-test-container');
		}else if(e.altKey && e.code==='KeyM'){
			useWindowMinimize('.rtt-test-container');
		};
	}else if(appOrdering.openApps[0]==='WindowScContainer'){
		if(e.altKey && e.code==='KeyI'){
			useModalOpen(
				'ModalScInstructions',
				appModalOrdering.openScModals,
				setAppModalOrdering.setOpenScModals,
				setModals.setModalScInstructionsOpen,
				setModalShowClasses.setModalScInstructionsOpenShowClass,
				'sc-test-instructions-container-in-use'
			);
		}else if(e.altKey && e.code==='KeyH'){
			useModalOpen(
				'ModalScResultHistory',
				appModalOrdering.openScModals,
				setAppModalOrdering.setOpenScModals,
				setModals.setModalScResultHistoryOpen,
				setModalShowClasses.setModalScResultHistoryOpenShowClass,
				'sc-test-result-history-container-in-use'
			);
		}else if(e.altKey && e.code==='KeyQ'){
			if(modals.modalAboutSpeedClickerOpen){
				useModalClose(
					'ModalScAbout',
					appModalOrdering.openScModals,
					setAppModalOrdering.setOpenScModals,
					setModals.setModalAboutReactionTimeTestOpen,
					setModalShowClasses.setModalAboutReactionTimeTestOpenShowClass
				);
			};
			if(modals.modalScInstructionsOpen){
				useModalClose(
					'ModalScInstructions',
					appModalOrdering.openScModals,
					setAppModalOrdering.setOpenScModals,
					setModals.setModalScInstructionsOpen,
					setModalShowClasses.setModalScInstructionsOpenShowClass
				);
			};
			if(modals.modalScResultHistoryOpen){
				useModalClose(
					'ModalScResultHistory',
					appModalOrdering.openScModals,
					setAppModalOrdering.setOpenScModals,
					setModals.setModalScResultHistoryOpen,
					setModalShowClasses.setModalScResultHistoryOpenShowClass
				);
			};
			useAppQuit(
				'WindowScContainer',
				appOrdering.openApps,
				setAppOrdering.setOpenApps,
				setMenubars.setMenubarSc,
				setModals.setModalScContainerOpen,
				setModalShowClasses.setModalScContainerOpenShowClass
			);
		}else if(e.altKey && e.code==='KeyW'){
			useWindowClose('.sc-test-container');
		}else if(e.altKey && e.code==='KeyM'){
			useWindowMinimize('.sc-test-container');
		};
	}if(appOrdering.openApps[0]==='WindowOtwContainer'){
		if(e.altKey && e.code==='KeyI'){
			useModalOpen(
				'ModalOtwInstructions',
				appModalOrdering.openOtwModals,
				setAppModalOrdering.setOpenOtwModals,
				setModals.setModalOtwInstructionsOpen,
				setModalShowClasses.setModalOtwInstructionsOpenShowClass,
				'otw-instructions-container-in-use'
			);
		}else if(e.altKey && e.code==='KeyH'){
			useModalOpen(
				'ModalOtwResultHistory',
				appModalOrdering.openOtwModals,
				setAppModalOrdering.setOpenOtwModals,
				setModals.setModalOtwResultHistoryOpen,
				setModalShowClasses.setModalOtwResultHistoryOpenShowClass,
				'otw-result-history-container-in-use'
			);
		}else if(e.altKey && e.code==='KeyQ'){
			if(modals.modalAboutOffTheWallOpen){
				useModalClose(
					'ModalOtwAbout',
					appModalOrdering.openOtwModals,
					setAppModalOrdering.setOpenOtwModals,
					setModals.setModalAboutReactionTimeTestOpen,
					setModalShowClasses.setModalAboutReactionTimeTestOpenShowClass
				);
			};
			if(modals.modalOtwInstructionsOpen){
				useModalClose(
					'ModalOtwInstructions',
					appModalOrdering.openOtwModals,
					setAppModalOrdering.setOpenOtwModals,
					setModals.setModalOtwInstructionsOpen,
					setModalShowClasses.setModalOtwInstructionsOpenShowClass
				);
			};
			if(modals.modalOtwResultHistoryOpen){
				useModalClose(
					'ModalOtwResultHistory',
					appModalOrdering.openOtwModals,
					setAppModalOrdering.setOpenOtwModals,
					setModals.setModalOtwResultHistoryOpen,
					setModalShowClasses.setModalOtwResultHistoryOpenShowClass
				);
			};
			useAppQuit(
				'WindowOtwContainer',
				appOrdering.openApps,
				setAppOrdering.setOpenApps,
				setMenubars.setMenubarOtw,
				setModals.setModalOtwContainerOpen,
				setModalShowClasses.setModalOtwContainerOpenShowClass
			);
		}else if(e.altKey && e.code==='KeyP'){
			// Handled within useHandleOtwGameSetup
		}else if(e.altKey && e.code==='KeyW'){
			useWindowClose('.otw-container');
		}else if(e.altKey && e.code==='KeyM'){
			useWindowMinimize('.otw-container');
		};
	}if(appOrdering.openApps[0]==='WindowSpContainer'){
		if(e.altKey && e.code==='KeyQ'){
			useAppQuit(
				'WindowSpContainer',
				appOrdering.openApps,
				setAppOrdering.setOpenApps,
				setMenubars.setMenubarSp,
				setModals.setModalSpContainerOpen,
				setModalShowClasses.setModalSpContainerOpenShowClass
			);
		}else if(e.altKey && e.code==='KeyW'){
			useWindowClose('.sp-container');
		}else if(e.altKey && e.code==='KeyM'){
			useWindowMinimize('.sp-container');
		};
	};
};

export default useHandleKeyboardShortcuts;
