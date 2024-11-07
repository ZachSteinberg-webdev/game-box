import React, {useContext} from 'react';

import {ModalContext} from '../../contexts/ModalContext.jsx';

import Window from '../commonComponents/Window.jsx';
import Titlebar from '../commonComponents/Titlebar.jsx';
import TitlebarTitle from '../commonComponents/TitlebarTitle.jsx';
import AquaButton from '../commonComponents/AquaButton.jsx';
import AquaButtonText from '../commonComponents/AquaButtonText.jsx';

import useModalClose from '../../customHooks/helperFunctions/useModalClose.jsx';

import '../../css/modals/ModalAboutReactionTimeTest.css';

export default function ModalAboutReactionTimeTest(){
	const {
			modals,
			setModals,
			windowModalOrdering,
			setWindowModalOrdering,
			appModalOrdering,
			setAppModalOrdering,
			modalShowClasses,
			setModalShowClasses
		}=useContext(ModalContext);
		const modalClose=(e)=>{useModalClose(
			'ModalRttAbout',
			windowModalOrdering.openWindowsModals,
			setWindowModalOrdering.setOpenWindowsModals,
			appModalOrdering.openRttModals,
			setAppModalOrdering.setOpenRttModals,
			setModals.setModalAboutReactionTimeTestOpen,
			setModalShowClasses.setModalAboutReactionTimeTestOpenShowClass
		)};
	return(
		<Window
			windowClassName={`window-modal-container modal-container about-reaction-time-test-container ${modalShowClasses.modalAboutReactionTimeTestOpenShowClass}`}
			windowId={'ModalRttAbout'}
		>
			<Titlebar
				titlebarClassName={'modal-title-bar about-title-bar rtt-about-title-bar drag-handle'}
			>
				<TitlebarTitle
					titleClassName={'rtt-about-title'}
					title={'About Reaction Time Test'}
				/>
			</Titlebar>
			<div
				className='rtt-about-message-and-test-icon-container'
			>
				<div
					className='rtt-test-icon-in-about-modal'
				>
				</div>
				<div
					className='rtt-about-message-container'
				>
					<p
						className='rtt-about-message'
					>
						Reaction Time Test is a game that tests reflex speed using a simple single-button interface.
					</p>
					<p
						className='rtt-about-message'
					>
						Version 1.0
					</p>
					<p
						className='rtt-about-message'
					>
						Created by Zach Steinberg
					</p>
				</div>
			</div>
			<div
				className='rtt-about-close-button-container'
			>
				<AquaButton
					aquaButtonClassName={'rtt-about-close-button about-close-button'}
					aquaButtonOnClick={modalClose}
				>
					<AquaButtonText
						aquaButtonTextClassName={'rtt-about-close-button-text about-close-button-text'}
						aquaButtonText={'Close'}
					/>
				</AquaButton>
			</div>
		</Window>
	);
};
