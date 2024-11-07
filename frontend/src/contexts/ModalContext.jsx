import React, {useState, createContext, useContext} from 'react';

export const ModalContext=createContext();

export const ModalContextProvider=({children})=>{
	// Window and modal ordering
	const [openWindowsModals, setOpenWindowsModals]=useState([]);
	// App ordering
	const [appOrder, setAppOrder]=useState([]);
	const [frontmostApp, setFrontmostApp]=useState(null);
	const [openApps, setOpenApps]=useState([]);
	// App modal ordering
	const [openSystemModals, setOpenSystemModals]=useState([]);
	const [openRttModals, setOpenRttModals]=useState([]);
	const [openScModals, setOpenScModals]=useState([]);
	const [openOtwModals, setOpenOtwModals]=useState([]);
	// Modals and modal show classes
		// Reaction Time Test
	const [modalAboutReactionTimeTestOpen, setModalAboutReactionTimeTestOpen]=useState(false);
	const [modalAboutReactionTimeTestOpenShowClass, setModalAboutReactionTimeTestOpenShowClass]=useState('');
	const [modalRttRestartConfirmationOpen, setModalRttRestartConfirmationOpen]=useState(false);
	const [modalRttRestartConfirmationOpenShowClass, setModalRttRestartConfirmationOpenShowClass]=useState('');
	const [modalRttInstructionsOpen, setModalRttInstructionsOpen]=useState(false);
	const [modalRttInstructionsOpenShowClass, setModalRttInstructionsOpenShowClass]=useState('');
	const [modalRttResultHistoryOpen, setModalRttResultHistoryOpen]=useState(false);
	const [modalRttResultHistoryOpenShowClass, setModalRttResultHistoryOpenShowClass]=useState('');
	const [modalRttAnticheatOpen, setModalRttAnticheatOpen]=useState(false);
	const [modalRttAnticheatOpenShowClass, setModalRttAnticheatOpenShowClass]=useState('');
	const [modalAboutSpeedClickerOpen, setModalAboutSpeedClickerOpen]=useState(false);
	const [modalAboutSpeedClickerOpenShowClass, setModalAboutSpeedClickerOpenShowClass]=useState('');
	const [modalScInstructionsOpen, setModalScInstructionsOpen]=useState(false);
	const [modalScInstructionsOpenShowClass, setModalScInstructionsOpenShowClass]=useState('');
	const [modalScResultHistoryOpen, setModalScResultHistoryOpen]=useState(false);
	const [modalScResultHistoryOpenShowClass, setModalScResultHistoryOpenShowClass]=useState('');
	const [modalAboutOffTheWallOpen, setModalAboutOffTheWallOpen]=useState(false);
	const [modalAboutOffTheWallOpenShowClass, setModalAboutOffTheWallOpenShowClass]=useState('');
	const [modalOtwInstructionsOpen, setModalOtwInstructionsOpen]=useState(false);
	const [modalOtwInstructionsOpenShowClass, setModalOtwInstructionsOpenShowClass]=useState('');
	const [modalOtwResultHistoryOpen, setModalOtwResultHistoryOpen]=useState(false);
	const [modalOtwResultHistoryOpenShowClass, setModalOtwResultHistoryOpenShowClass]=useState('');
	const [modalOtwGameStartDialogOpen, setModalOtwGameStartDialogOpen]=useState(false);
	const [modalOtwGameStartDialogOpenShowClass, setModalOtwGameStartDialogOpenShowClass]=useState('');
	const [modalOtwGamePauseDialogOpen, setModalOtwGamePauseDialogOpen]=useState(false);
	const [modalOtwGamePauseDialogOpenShowClass, setModalOtwGamePauseDialogOpenShowClass]=useState('');
	const [modalOtwGameEndDialogOpen, setModalOtwGameEndDialogOpen]=useState(false);
	const [modalOtwGameEndDialogOpenShowClass, setModalOtwGameEndDialogOpenShowClass]=useState('');
	// Windows and window show classes
		// About System
	const [modalAboutSystemOpen, setModalAboutSystemOpen]=useState(false);
	const [modalAboutSystemOpenShowClass, setModalAboutSystemOpenShowClass]=useState('');
	const [modalAboutSystemOriginalWidth, setModalAboutSystemOriginalWidth]=useState('45%');
	const [modalAboutSystemOriginalHeight, setModalAboutSystemOriginalHeight]=useState('min-content');
		// Force Quit
	const [modalForceQuitOpen, setModalForceQuitOpen]=useState(false);
	const [modalForceQuitOpenShowClass, setModalForceQuitOpenShowClass]=useState('');
	const [modalForceQuitOriginalWidth, setModalForceQuitOriginalWidth]=useState('25%');
	const [modalForceQuitOriginalHeight, setModalForceQuitOriginalHeight]=useState('40%');
		// Reaction Time Test
	const [modalRttContainerOpen, setModalRttContainerOpen]=useState(false);
	const [modalRttContainerOpenShowClass, setModalRttContainerOpenShowClass]=useState('');
	const [modalRttContainerOriginalWidth, setModalRttContainerOriginalWidth]=useState('100vw');
	const [modalRttContainerOriginalHeight, setModalRttContainerOriginalHeight]=useState('calc(100% - 1.375rem)');
		// Speed Clicker
	const [modalScContainerOpen, setModalScContainerOpen]=useState(false);
	const [modalScContainerOpenShowClass, setModalScContainerOpenShowClass]=useState('');
	const [modalScContainerOriginalWidth, setModalScContainerOriginalWidth]=useState('100vw');
	const [modalScContainerOriginalHeight, setModalScContainerOriginalHeight]=useState('calc(100% - 1.375rem)');
		// Off The Wall
	const [modalOtwContainerOpen, setModalOtwContainerOpen]=useState(false);
	const [modalOtwContainerOpenShowClass, setModalOtwContainerOpenShowClass]=useState('');
	const [modalOtwContainerOriginalWidth, setModalOtwContainerOriginalWidth]=useState('100vw');
	const [modalOtwContainerOriginalHeight, setModalOtwContainerOriginalHeight]=useState('calc(100% - 1.375rem)');
		// System Preferences
	const [modalSpContainerOpen, setModalSpContainerOpen]=useState(false);
	const [modalSpContainerOpenShowClass, setModalSpContainerOpenShowClass]=useState('');
	const [modalSpContainerOriginalWidth, setModalSpContainerOriginalWidth]=useState('50vw');
	const [modalSpContainerOriginalHeight, setModalSpContainerOriginalHeight]=useState('calc(75% - 1.375rem)');
	// Other screens
		// Sleep screen
	const [modalSleepScreenOpen, setModalSleepScreenOpen]=useState(false);
	const [modalSleepScreenOpenShowClass, setModalSleepScreenOpenShowClass]=useState('');
		// Lock screen
	const [modalLockScreenOpen, setModalLockScreenOpen]=useState(false);
	const [modalLockScreenOpenShowClass, setModalLockScreenOpenShowClass]=useState('');
	// Menubars
	const [menubarRtt, setMenubarRtt]=useState(false);
	const [menubarSc, setMenubarSc]=useState(false);
	const [menubarOtw, setMenubarOtw]=useState(false);
	const [menubarSp, setMenubarSp]=useState(false);
	// Preference panes
	const [accountPaneOpen, setAccountPaneOpen]=useState(true);
	const [timePaneOpen, setTimePaneOpen]=useState(false);
	const [backgroundPaneOpen, setBackgroundPaneOpen]=useState(false);

	const windowModalOrdering={
		openWindowsModals
	};
	const setWindowModalOrdering={
		setOpenWindowsModals
	}
	const appOrdering={
		appOrder,
		frontmostApp,
		openApps
	};
	const setAppOrdering={
		setAppOrder,
		setFrontmostApp,
		setOpenApps
	};
	const appModalOrdering={
		openSystemModals,
		openRttModals,
		openScModals,
		openOtwModals
	};
	const setAppModalOrdering={
		setOpenSystemModals,
		setOpenRttModals,
		setOpenScModals,
		setOpenOtwModals
	};
	const menubars={
		menubarRtt,
		menubarSc,
		menubarOtw,
		menubarSp
	};
	const setMenubars={
		setMenubarRtt,
		setMenubarSc,
		setMenubarOtw,
		setMenubarSp
	};
	const modals={
		modalAboutSystemOpen,
		modalForceQuitOpen,
		modalAboutReactionTimeTestOpen,
		modalRttRestartConfirmationOpen,
		modalRttResultHistoryOpen,
		modalRttInstructionsOpen,
		modalRttAnticheatOpen,
		modalRttContainerOpen,
		modalAboutSpeedClickerOpen,
		modalScResultHistoryOpen,
		modalScInstructionsOpen,
		modalScContainerOpen,
		modalOtwGameStartDialogOpen,
		modalOtwGamePauseDialogOpen,
		modalOtwGameEndDialogOpen,
		modalAboutOffTheWallOpen,
		modalOtwInstructionsOpen,
		modalOtwResultHistoryOpen,
		modalOtwContainerOpen,
		modalSpContainerOpen,
		modalSleepScreenOpen,
		modalLockScreenOpen
	};
	const setModals={
		setModalAboutSystemOpen,
		setModalForceQuitOpen,
		setModalAboutReactionTimeTestOpen,
		setModalRttRestartConfirmationOpen,
		setModalRttResultHistoryOpen,
		setModalRttInstructionsOpen,
		setModalRttAnticheatOpen,
		setModalRttContainerOpen,
		setModalAboutSpeedClickerOpen,
		setModalScResultHistoryOpen,
		setModalScInstructionsOpen,
		setModalScContainerOpen,
		setModalOtwGameStartDialogOpen,
		setModalOtwGamePauseDialogOpen,
		setModalOtwGameEndDialogOpen,
		setModalAboutOffTheWallOpen,
		setModalOtwInstructionsOpen,
		setModalOtwResultHistoryOpen,
		setModalOtwContainerOpen,
		setModalSpContainerOpen,
		setModalSleepScreenOpen,
		setModalLockScreenOpen
	};
	const modalShowClasses={
		modalAboutSystemOpenShowClass,
		modalForceQuitOpenShowClass,
		modalAboutReactionTimeTestOpenShowClass,
		modalRttRestartConfirmationOpenShowClass,
		modalRttResultHistoryOpenShowClass,
		modalRttInstructionsOpenShowClass,
		modalRttAnticheatOpenShowClass,
		modalRttContainerOpenShowClass,
		modalAboutSpeedClickerOpenShowClass,
		modalScResultHistoryOpenShowClass,
		modalScInstructionsOpenShowClass,
		modalScContainerOpenShowClass,
		modalOtwGameStartDialogOpenShowClass,
		modalOtwGamePauseDialogOpenShowClass,
		modalOtwGameEndDialogOpenShowClass,
		modalAboutOffTheWallOpenShowClass,
		modalOtwInstructionsOpenShowClass,
		modalOtwResultHistoryOpenShowClass,
		modalOtwContainerOpenShowClass,
		modalSpContainerOpenShowClass,
		modalSleepScreenOpenShowClass,
		modalLockScreenOpenShowClass
	};
	const setModalShowClasses={
		setModalAboutSystemOpenShowClass,
		setModalForceQuitOpenShowClass,
		setModalAboutReactionTimeTestOpenShowClass,
		setModalRttRestartConfirmationOpenShowClass,
		setModalRttResultHistoryOpenShowClass,
		setModalRttInstructionsOpenShowClass,
		setModalRttAnticheatOpenShowClass,
		setModalRttContainerOpenShowClass,
		setModalAboutSpeedClickerOpenShowClass,
		setModalScResultHistoryOpenShowClass,
		setModalScInstructionsOpenShowClass,
		setModalScContainerOpenShowClass,
		setModalOtwGameStartDialogOpenShowClass,
		setModalOtwGamePauseDialogOpenShowClass,
		setModalOtwGameEndDialogOpenShowClass,
		setModalAboutOffTheWallOpenShowClass,
		setModalOtwInstructionsOpenShowClass,
		setModalOtwResultHistoryOpenShowClass,
		setModalOtwContainerOpenShowClass,
		setModalSpContainerOpenShowClass,
		setModalSleepScreenOpenShowClass,
		setModalLockScreenOpenShowClass
	};
	const windowSizing={
		modalAboutSystemOriginalWidth,
		modalAboutSystemOriginalHeight,
		modalForceQuitOriginalWidth,
		modalForceQuitOriginalHeight,
		modalRttContainerOriginalWidth,
		modalRttContainerOriginalHeight,
		modalScContainerOriginalWidth,
		modalScContainerOriginalHeight,
		modalOtwContainerOriginalWidth,
		modalOtwContainerOriginalHeight,
		modalSpContainerOriginalWidth,
		modalSpContainerOriginalHeight
	};
	const setWindowSizing={
		setModalAboutSystemOriginalWidth,
		setModalAboutSystemOriginalHeight,
		setModalForceQuitOriginalWidth,
		setModalForceQuitOriginalHeight,
		setModalRttContainerOriginalWidth,
		setModalRttContainerOriginalHeight,
		setModalScContainerOriginalWidth,
		setModalScContainerOriginalHeight,
		setModalOtwContainerOriginalWidth,
		setModalOtwContainerOriginalHeight,
		setModalSpContainerOriginalWidth,
		setModalSpContainerOriginalHeight
	};
	const panesOpen={
		accountPaneOpen,
		timePaneOpen,
		backgroundPaneOpen
};
	const setPanesOpen={
		setAccountPaneOpen,
		setTimePaneOpen,
		setBackgroundPaneOpen
	};
	return(
		<ModalContext.Provider
			value={{
				windowModalOrdering,
				setWindowModalOrdering,
				appOrdering,
				setAppOrdering,
				appModalOrdering,
				setAppModalOrdering,
				menubars,
				setMenubars,
				modals,
				setModals,
				modalShowClasses,
				setModalShowClasses,
				windowSizing,
				setWindowSizing,
				panesOpen,
				setPanesOpen
			}}
		>
			{children}
		</ModalContext.Provider>
	);
};
