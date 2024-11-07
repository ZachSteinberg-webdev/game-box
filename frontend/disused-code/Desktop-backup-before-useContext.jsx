import React, {useState, useEffect, useContext} from 'react';

import {ModalContextProvider} from '../contexts/ModalContext.jsx';
import {ModalContext} from '../contexts/ModalContext.jsx';

import Background from '../components/Background.jsx';
import Menubar from '../components/Menubar.jsx';
import ModalAboutSystem from '../components/ModalAboutSystem.jsx';
import ModalAboutReactionTimeTest from '../components/ModalAboutReactionTimeTest.jsx';
import ModalRttRestartConfirmation from '../components/ModalRttRestartConfirmation.jsx';
import ModalRttContainer from '../components/ModalRttContainer.jsx';

import useHandleDesktopIconSingleClick from '../customHooks/helperFunctions/useHandleDesktopIconSingleClick.jsx';
import useHandleDesktopIconDoubleClick from '../customHooks/helperFunctions/useHandleDesktopIconDoubleClick.jsx';
import useWindowOpen from '../customHooks/helperFunctions/useWindowOpen.jsx';
import useHandleBodyClick from '../customHooks/helperFunctions/useHandleBodyClick.jsx';

export default function Desktop(){
	const {
		modals,
		setModals,
		modalShowClasses,
		setModalShowClasses
	}=useContext(ModalContext);
	// const [modalAboutSystemOpen, setModalAboutSystemOpen]=useState(false);
	// const [modalAboutSystemOpenShowClass, setModalAboutSystemOpenShowClass]=useState('');
	// const [modalAboutReactionTimeTestOpen, setModalAboutReactionTimeTestOpen]=useState(false);
	// const [modalAboutReactionTimeTestOpenShowClass, setModalAboutReactionTimeTestOpenShowClass]=useState('');
	// const [modalRttRestartConfirmationOpen, setModalRttRestartConfirmationOpen]=useState(false);
	// const [modalRttRestartConfirmationOpenShowClass, setModalRttRestartConfirmationOpenShowClass]=useState('');
	// const [modalRttContainerOpen, setModalRttContainerOpen]=useState(false);
	// const [modalRttContainerOpenShowClass, setModalRttContainerOpenShowClass]=useState('');
	const handleDesktopIconSingleClick=(e)=>{useHandleDesktopIconSingleClick(e)};
	const handleDesktopIconDoubleClick=(e)=>{useHandleDesktopIconDoubleClick(
		e,
		setModalRttContainerOpen,
		setModalRttContainerOpenShowClass
	)};

	useEffect(()=>{
		useHandleBodyClick();
	},[modalRttContainerOpen]);
	return(
		<>
			<ModalContextProvider>
				<Background
					desktopIconButtonOnSingleClick={handleDesktopIconSingleClick}
					desktopIconButtonOnDoubleClick={handleDesktopIconDoubleClick}
				/>
				<Menubar
					setModalAboutSystemOpen={setModalAboutSystemOpen}
					setModalAboutSystemOpenShowClass={setModalAboutSystemOpenShowClass}
					setModalAboutReactionTimeTestOpen={setModalAboutReactionTimeTestOpen}
					setModalAboutReactionTimeTestOpenShowClass={setModalAboutReactionTimeTestOpenShowClass}
					setModalRttRestartConfirmationOpen={setModalRttRestartConfirmationOpen}
					setModalRttRestartConfirmationOpenShowClass={setModalRttRestartConfirmationOpenShowClass}
					modalRttContainerOpen={modalRttContainerOpen}
					setModalRttContainerOpen={setModalRttContainerOpen}
					setModalRttContainerOpenShowClass={setModalRttContainerOpenShowClass}
				/>
				{modals.modalAboutSystemOpen &&
					<ModalAboutSystem
						setModalAboutSystemOpen={setModalAboutSystemOpen}
						modalAboutSystemOpenShowClass={modalAboutSystemOpenShowClass}
						setModalAboutSystemOpenShowClass={setModalAboutSystemOpenShowClass}
					/>
				}
				{modals.modalAboutReactionTimeTestOpen &&
					<ModalAboutReactionTimeTest
						setModalAboutReactionTimeTestOpen={setModalAboutReactionTimeTestOpen}
						modalAboutReactionTimeTestOpenShowClass={modalAboutReactionTimeTestOpenShowClass}
						setModalAboutReactionTimeTestOpenShowClass={setModalAboutReactionTimeTestOpenShowClass}
					/>
				}
				{modals.modalRttRestartConfirmationOpen &&
					<ModalRttRestartConfirmation
						setModalRttRestartConfirmationOpen={setModalRttRestartConfirmationOpen}
						modalRttRestartConfirmationOpenShowClass={modalRttRestartConfirmationOpenShowClass}
						setModalRttRestartConfirmationOpenShowClass={setModalRttRestartConfirmationOpenShowClass}
						setModalRttContainerOpen={setModalRttContainerOpen}
						setModalRttContainerOpenShowClass={setModalRttContainerOpenShowClass}
					/>
				}
				{modals.modalRttContainerOpen &&
					<ModalRttContainer
						setModalRttContainerOpen={setModalRttContainerOpen}
						modalRttContainerOpenShowClass={modalRttContainerOpenShowClass}
						setModalRttContainerOpenShowClass={setModalRttContainerOpenShowClass}
					/>
				}
			</ModalContextProvider>
		</>
	);
};
