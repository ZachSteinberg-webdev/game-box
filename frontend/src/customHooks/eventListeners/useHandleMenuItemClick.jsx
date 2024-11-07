import useModalOpen from '../helperFunctions/useModalOpen.jsx';
import useWindowOpen from '../helperFunctions/useWindowOpen.jsx';
import useModalClose from '../helperFunctions/useModalClose.jsx';
import useWindowClose from '../helperFunctions/useWindowClose.jsx';
import useWindowMinimize from '../helperFunctions/useWindowMinimize.jsx';
import useWindowMaximize from '../helperFunctions/useWindowMaximize.jsx';
import useAppStart from '../helperFunctions/useAppStart.jsx';
import useAppQuit from '../helperFunctions/useAppQuit.jsx';
import useHandleShutdownRestartFromDesktop from '../helperFunctions/useHandleShutdownRestartFromDesktop.jsx';
import useHandleSleep from '../helperFunctions/useHandleSleep.jsx';
import useHandleLogout from '../formSubmissionHandlers/useHandleLogout.jsx';
import useHandleRttTestPause from './useHandleRttTestPause.jsx';
import useHandleRttTestQuit from './useHandleRttTestQuit.jsx';
import useHandleOtwGamePause from './useHandleOtwGamePause.jsx';


const useHandleMenuItemClick=(
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
	e.target.parentElement.classList.remove('dropdown-menu-in-use');
	e.target.parentElement.previousElementSibling.children[0].style.color = 'black';
	e.target.parentElement.previousElementSibling.children[0].style.backgroundColor = 'transparent';
	if(e.target.id==='dropdown-menu-item-about-system'){
		useAppStart(
			'ModalSystemAbout',
			windowModalOrdering.openWindowsModals,
			setWindowModalOrdering.setOpenWindowsModals,
			appOrdering.openApps,
			setAppOrdering.setOpenApps,
			'NoMenubar',
			setModals.setModalAboutSystemOpen,
			setModalShowClasses.setModalAboutSystemOpenShowClass,
			'about-system-container-in-use'
		);
	}else if(e.target.id==='dropdown-menu-item-system-preferences'){
		useAppStart(
			'WindowSpContainer',
			windowModalOrdering.openWindowsModals,
			setWindowModalOrdering.setOpenWindowsModals,
			appOrdering.openApps,
			setAppOrdering.setOpenApps,
			setMenubars.setMenubarSp,
			setModals.setModalSpContainerOpen,
			setModalShowClasses.setModalSpContainerOpenShowClass,
			'sp-container-in-use'
		);
		useWindowOpen(
			'.sp-container',
			windowSizing.modalSpContainerOriginalWidth,
			windowSizing.modalSpContainerOriginalHeight
		);
	}else if(e.target.id==='dropdown-menu-item-force-quit'){
		useAppStart(
			'ModalForceQuit',
			windowModalOrdering.openWindowsModals,
			setWindowModalOrdering.setOpenWindowsModals,
			appOrdering.openApps,
			setAppOrdering.setOpenApps,
			'NoMenubar',
			setModals.setModalForceQuitOpen,
			setModalShowClasses.setModalForceQuitOpenShowClass,
			'fq-container-in-use'
		);
	}else if(e.target.id==='dropdown-menu-item-computer-sleep'){
		useHandleSleep(setModals, setModalShowClasses);
	}else if(e.target.id==='dropdown-menu-item-computer-restart'){
		useHandleShutdownRestartFromDesktop(
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
		);
	}else if(e.target.id==='dropdown-menu-item-computer-shut-down'){
		useHandleShutdownRestartFromDesktop(
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
		);
	}else if(e.target.id==='dropdown-menu-item-lock-screen'){
		useHandleLogout(
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
		);
	}else if(e.target.id==='dropdown-menu-item-log-out'){
		useHandleLogout(
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
		);
	}else if(e.target.id==='dropdown-menu-item-quit-sp'){
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
	}else if(e.target.id==='dropdown-menu-item-close-sp'){
		useWindowClose('.sp-container');
	}else if(e.target.id==='sp-dropdown-menu-item-minimize'){
		useWindowMinimize('.sp-container');
	}else if(e.target.id==='sp-dropdown-menu-item-window-title'){
		useWindowOpen(
			'.sp-container',
			windowSizing.modalSpContainerOriginalWidth,
			windowSizing.modalSpContainerOriginalHeight
		);
	}else if(e.target.id==='rtt-dropdown-menu-item-about-reaction-time-test'){
		useModalOpen(
			'ModalRttAbout',
			windowModalOrdering.openWindowsModals,
			setWindowModalOrdering.setOpenWindowsModals,
			appModalOrdering.openRttModals,
			setAppModalOrdering.setOpenRttModals,
			setModals.setModalAboutReactionTimeTestOpen,
			setModalShowClasses.setModalAboutReactionTimeTestOpenShowClass,
			'about-reaction-time-test-container-in-use'
		);
	}else if(e.target.id==='rtt-dropdown-menu-item-reaction-time-test-instructions'){
		useModalOpen(
			'ModalRttInstructions',
			windowModalOrdering.openWindowsModals,
			setWindowModalOrdering.setOpenWindowsModals,
			appModalOrdering.openRttModals,
			setAppModalOrdering.setOpenRttModals,
			setModals.setModalRttInstructionsOpen,
			setModalShowClasses.setModalRttInstructionsOpenShowClass,
			'rtt-test-instructions-container-in-use'
		);
	}else if(e.target.id==='rtt-dropdown-menu-item-reaction-time-test-result-history'){
		useModalOpen(
			'ModalRttResultHistory',
			windowModalOrdering.openWindowsModals,
			setWindowModalOrdering.setOpenWindowsModals,
			appModalOrdering.openRttModals,
			setAppModalOrdering.setOpenRttModals,
			setModals.setModalRttResultHistoryOpen,
			setModalShowClasses.setModalRttResultHistoryOpenShowClass,
			'rtt-test-result-history-container-in-use'
		);
	}else if(e.target.id==='rtt-dropdown-menu-item-quit'){
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
	}else if(e.target.id==='rtt-dropdown-menu-item-restart'){
		useModalOpen(
			'ModalRttRestart',
			windowModalOrdering.openWindowsModals,
			setWindowModalOrdering.setOpenWindowsModals,
			appModalOrdering.openRttModals,
			setAppModalOrdering.setOpenRttModals,
			setModals.setModalRttRestartConfirmationOpen,
			setModalShowClasses.setModalRttRestartConfirmationOpenShowClass,
			'rtt-restart-confirmation-container-in-use'
		);
	}else if(e.target.id==='rtt-dropdown-menu-item-pause'){
		useHandleRttTestPause(
			setRttValues.setTestButtonClickCounter,
			setRttValues.setTestResultsCounter
		);
	}else if(e.target.id==='rtt-dropdown-menu-item-close'){
		useWindowClose('.rtt-test-container');
	}else if(e.target.id==='rtt-dropdown-menu-item-minimize'){
		useWindowMinimize('.rtt-test-container');
	}else if(e.target.id==='rtt-dropdown-menu-item-window-title'){
		useWindowMaximize('.rtt-test-container');
	}else if(e.target.id==='sc-dropdown-menu-item-about-speed-clicker'){
		useModalOpen(
			'ModalScAbout',
			windowModalOrdering.openWindowsModals,
			setWindowModalOrdering.setOpenWindowsModals,
			appModalOrdering.openScModals,
			setAppModalOrdering.setOpenScModals,
			setModals.setModalAboutSpeedClickerOpen,
			setModalShowClasses.setModalAboutSpeedClickerOpenShowClass,
			'about-speed-clicker-container-in-use'
		);
	}else if(e.target.id==='sc-dropdown-menu-item-speed-clicker-instructions'){
		useModalOpen(
			'ModalScInstructions',
			windowModalOrdering.openWindowsModals,
			setWindowModalOrdering.setOpenWindowsModals,
			appModalOrdering.openScModals,
			setAppModalOrdering.setOpenScModals,
			setModals.setModalScInstructionsOpen,
			setModalShowClasses.setModalScInstructionsOpenShowClass,
			'sc-test-instructions-container-in-use'
		);
	}else if(e.target.id==='sc-dropdown-menu-item-speed-clicker-result-history'){
		useModalOpen(
			'ModalScResultHistory',
			windowModalOrdering.openWindowsModals,
			setWindowModalOrdering.setOpenWindowsModals,
			appModalOrdering.openScModals,
			setAppModalOrdering.setOpenScModals,
			setModals.setModalScResultHistoryOpen,
			setModalShowClasses.setModalScResultHistoryOpenShowClass,
			'sc-test-result-history-container-in-use'
		);
	}else if(e.target.id==='sc-dropdown-menu-item-quit'){
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
	}else if(e.target.id==='sc-dropdown-menu-item-close'){
		useWindowClose('.sc-test-container');
	}else if(e.target.id==='sc-dropdown-menu-item-minimize'){
		useWindowMinimize('.sc-test-container');
	}else if(e.target.id==='sc-dropdown-menu-item-window-title'){
		useWindowMaximize('.sc-test-container');
	}else if(e.target.id==='otw-dropdown-menu-item-about-off-the-wall'){
		useModalOpen(
			'ModalOtwAbout',
			windowModalOrdering.openWindowsModals,
			setWindowModalOrdering.setOpenWindowsModals,
			appModalOrdering.openOtwModals,
			setAppModalOrdering.setOpenOtwModals,
			setModals.setModalAboutOffTheWallOpen,
			setModalShowClasses.setModalAboutOffTheWallOpenShowClass,
			'about-off-the-wall-container-in-use'
		);
	}else if(e.target.id==='otw-dropdown-menu-item-off-the-wall-instructions'){
		useModalOpen(
			'ModalOtwInstructions',
			windowModalOrdering.openWindowsModals,
			setWindowModalOrdering.setOpenWindowsModals,
			appModalOrdering.openOtwModals,
			setAppModalOrdering.setOpenOtwModals,
			setModals.setModalOtwInstructionsOpen,
			setModalShowClasses.setModalOtwInstructionsOpenShowClass,
			'otw-instructions-container-in-use'
		);
	}else if(e.target.id==='otw-dropdown-menu-item-off-the-wall-result-history'){
		useModalOpen(
			'ModalOtwResultHistory',
			windowModalOrdering.openWindowsModals,
			setWindowModalOrdering.setOpenWindowsModals,
			appModalOrdering.openOtwModals,
			setAppModalOrdering.setOpenOtwModals,
			setModals.setModalOtwResultHistoryOpen,
			setModalShowClasses.setModalOtwResultHistoryOpenShowClass,
			'otw-result-history-container-in-use'
		);
	}else if(e.target.id==='otw-dropdown-menu-item-quit'){
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
	}else if(e.target.id==='otw-dropdown-menu-item-pause'){
		// Handled in the useHandleOtwGamePause hook
	}else if(e.target.id==='otw-dropdown-menu-item-close'){
		useWindowClose('.otw-container');
	}else if(e.target.id==='otw-dropdown-menu-item-minimize'){
		useWindowMinimize('.otw-container');
	}else if(e.target.id==='otw-dropdown-menu-item-window-title'){
		useWindowMaximize('.otw-container');
	}else if(e.target.id==='dropdown-menu-item-date-and-time-preferences'){
		useAppStart(
			'WindowSpContainer',
			windowModalOrdering.openWindowsModals,
			setWindowModalOrdering.setOpenWindowsModals,
			appOrdering.openApps,
			setAppOrdering.setOpenApps,
			setMenubars.setMenubarSp,
			setModals.setModalSpContainerOpen,
			setModalShowClasses.setModalSpContainerOpenShowClass,
			'sp-container-in-use'
		);
		setPanesOpen.setAccountPaneOpen(false);
		setPanesOpen.setBackgroundPaneOpen(false);
		setPanesOpen.setTimePaneOpen(true);
	}else if(e.target.id==='dropdown-menu-item-account-preferences'){
		e.target.parentElement.previousElementSibling.firstElementChild.firstElementChild.children[0].style.fill='#464646';
		e.target.parentElement.previousElementSibling.firstElementChild.firstElementChild.children[1].style.fill='#464646';
		useAppStart(
			'WindowSpContainer',
			windowModalOrdering.openWindowsModals,
			setWindowModalOrdering.setOpenWindowsModals,
			appOrdering.openApps,
			setAppOrdering.setOpenApps,
			setMenubars.setMenubarSp,
			setModals.setModalSpContainerOpen,
			setModalShowClasses.setModalSpContainerOpenShowClass,
			'sp-container-in-use'
		);
		setPanesOpen.setAccountPaneOpen(true);
		setPanesOpen.setTimePaneOpen(false);
		setPanesOpen.setBackgroundPaneOpen(false);
	};
};

export default useHandleMenuItemClick;
