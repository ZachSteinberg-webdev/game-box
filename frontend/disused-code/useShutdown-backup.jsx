import useModalClose from './useModalClose.jsx';
import useAppQuit from './useAppQuit.jsx';
import useHandleRttTestQuit from '../eventListeners/useHandleRttTestQuit.jsx';

const useShutdown=(
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
	let modalSpTimeout=0;
	let modalRttTimeout=0;
	let modalScTimeout=0;
	let modalOtwTimeout=0;
	if(modals.modalSpContainerOpen){
		modalSpTimeout=1000;
	};
	if(modals.modalRttContainerOpen){
		modalRttTimeout=1000;
	};
	if(modals.modalScContainerOpen){
		modalScTimeout=1000;
	};
	if(modals.modalOtwContainerOpen){
		modalOtwTimeout=1000;
	};
	setTimeout(()=>{
		if(modals.modalSpContainerOpen){
			useAppQuit(
				'WindowSpContainer',
				appOrdering.openApps,
				setAppOrdering.setOpenApps,
				setMenubars.setMenubarSp,
				setModals.setModalSpContainerOpen,
				setModalShowClasses.setModalSpContainerOpenShowClass
			);
		};
		setTimeout(()=>{
			if(modals.modalRttContainerOpen){
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
				useHandleRttTestQuit(
					setRttValues.setTestButtonClickCounter,
					setRttValues.setTestResultsCounter,
					setRttValues.setAnticheatAlertTriggeredYet
				);
				useAppQuit(
					'WindowRttContainer',
					appOrdering.openApps,
					setAppOrdering.setOpenApps,
					setMenubars.setMenubarRtt,
					setModals.setModalRttContainerOpen,
					setModalShowClasses.setModalRttContainerOpenShowClass
				);
			};
			setTimeout(()=>{
				if(modals.modalScContainerOpen){
					if(modals.modalAboutSpeedClickerOpen){
						useModalClose(
							'ModalScAbout',
							appModalOrdering.openScModals,
							setAppModalOrdering.setOpenScModals,
							setModals.setModalAboutSpeedClickerOpen,
							setModalShowClasses.setModalAboutSpeedClickerOpenShowClass
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
				};
				setTimeout(()=>{
					if(modals.modalOtwContainerOpen){
						if(modals.modalOtwGameStartDialogOpen){
							useModalClose(
								'ModalOtwGameStartDialog',
								appModalOrdering.openOtwModals,
								setAppModalOrdering.setOpenOtwModals,
								setModals.setModalOtwGameStartDialogOpen,
								setModalShowClasses.setModalOtwGameStartDialogOpenShowClass
							);
						};
						if(modals.modalOtwGamePauseDialogOpen){
							useModalClose(
								'ModalOtwGamePauseDialog',
								appModalOrdering.openOtwModals,
								setAppModalOrdering.setOpenOtwModals,
								setModals.setModalOtwGamePauseDialogOpen,
								setModalShowClasses.setModalOtwGamePauseDialogOpenShowClass
							);
						};
						if(modals.modalOtwGameEndDialogOpen){
							useModalClose(
								'ModalOtwGameEndDialog',
								appModalOrdering.openOtwModals,
								setAppModalOrdering.setOpenOtwModals,
								setModals.setModalOtwGameEndDialogOpen,
								setModalShowClasses.setModalOtwGameEndDialogOpenShowClass
							);
						};
						if(modals.modalAboutOffTheWallOpen){
							useModalClose(
								'ModalOtwAbout',
								appModalOrdering.openOtwModals,
								setAppModalOrdering.setOpenOtwModals,
								setModals.setModalAboutOffTheWallOpen,
								setModalShowClasses.setModalAboutOffTheWallOpenShowClass
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
					};
					setTimeout(()=>{
						const menubar=document.querySelector('.menubar-container');
						menubar.style.display='none';
						setTimeout(()=>{
							const desktopSpinner=document.querySelector('.desktop-spinner');
							desktopSpinner.style.display='block';
							setTimeout(()=>{
								navigate('/shutdown');
							},1000);
						},1000);
					},1000);
				},modalOtwTimeout);
			},modalScTimeout);
		},modalRttTimeout);
	},modalSpTimeout);
};

export default useShutdown;
