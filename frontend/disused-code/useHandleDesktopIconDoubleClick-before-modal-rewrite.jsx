import useAppStart from '../helperFunctions/useAppStart.jsx';
import useWindowOpen from '../helperFunctions/useWindowOpen.jsx';

const useHandleDesktopIconDoubleClick=(
	e,
	appOrdering,
	setAppOrdering,
	menubars,
	setMenubars,
	modals,
	setModals,
	setModalShowClasses,
	windowSizing,
	setWindowSizing
)=>{
	console.log('handleDesktopIconDoubleClick', e.target);
	if(e.target.classList.contains('desktop-rtt-test-icon-button')){
		if(!modals.modalRttContainerOpen){
			useAppStart(
				'WindowRttContainer',
				appOrdering.openApps,
				setAppOrdering.setOpenApps,
				setMenubars.setMenubarRtt,
				setModals.setModalRttContainerOpen,
				setModalShowClasses.setModalRttContainerOpenShowClass,
				'rtt-test-container-in-use'
			);
		}else if(modals.modalRttContainerOpen){
			useAppStart(
				'WindowRttContainer',
				appOrdering.openApps,
				setAppOrdering.setOpenApps,
				setMenubars.setMenubarRtt,
				setModals.setModalRttContainerOpen,
				setModalShowClasses.setModalRttContainerOpenShowClass,
				'rtt-test-container-in-use'
			);
			useWindowOpen(
				'.rtt-test-container',
				windowSizing.modalRttContainerOriginalWidth,
				windowSizing.modalRttContainerOriginalHeight
			);
		};
	}else if(e.target.classList.contains('desktop-sc-test-icon-button')){
		if(!modals.modalScContainerOpen){
			useAppStart(
				'WindowScContainer',
				appOrdering.openApps,
				setAppOrdering.setOpenApps,
				setMenubars.setMenubarSc,
				setModals.setModalScContainerOpen,
				setModalShowClasses.setModalScContainerOpenShowClass,
				'sc-test-container-in-use'
			);
		}else if(modals.modalScContainerOpen){
			useAppStart(
				'WindowScContainer',
				appOrdering.openApps,
				setAppOrdering.setOpenApps,
				setMenubars.setMenubarSc,
				setModals.setModalScContainerOpen,
				setModalShowClasses.setModalScContainerOpenShowClass,
				'sc-test-container-in-use'
			);
			useWindowOpen(
				'.sc-test-container',
				windowSizing.modalScContainerOriginalWidth,
				windowSizing.modalScContainerOriginalHeight
			);
		};
	}else if(e.target.classList.contains('desktop-otw-icon-button')){
		if(!modals.modalOtwContainerOpen){
			useAppStart(
				'WindowOtwContainer',
				appOrdering.openApps,
				setAppOrdering.setOpenApps,
				setMenubars.setMenubarOtw,
				setModals.setModalOtwContainerOpen,
				setModalShowClasses.setModalOtwContainerOpenShowClass,
				'otw-container-in-use'
			);
		}else if(modals.modalOtwContainerOpen){
			useAppStart(
				'WindowOtwContainer',
				appOrdering.openApps,
				setAppOrdering.setOpenApps,
				setMenubars.setMenubarOtw,
				setModals.setModalOtwContainerOpen,
				setModalShowClasses.setModalOtwContainerOpenShowClass,
				'otw-container-in-use'
			);
			useWindowOpen(
				'.otw-container',
				windowSizing.modalOtwContainerOriginalWidth,
				windowSizing.modalOtwContainerOriginalHeight
			);
		};
	};
};

export default useHandleDesktopIconDoubleClick;
