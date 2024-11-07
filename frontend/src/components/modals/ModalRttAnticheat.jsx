import React, {useContext} from 'react';

import {ModalContext} from '../../contexts/ModalContext.jsx';

import Window from '../commonComponents/Window.jsx';
import Titlebar from '../commonComponents/Titlebar.jsx';
import TitlebarTitle from '../commonComponents/TitlebarTitle.jsx';
import AquaButton from '../commonComponents/AquaButton.jsx';
import AquaButtonText from '../commonComponents/AquaButtonText.jsx';

import useModalClose from '../../customHooks/helperFunctions/useModalClose.jsx';
import useMakeInert from '../../customHooks/helperFunctions/useMakeInert.jsx';

import '../../css/modals/ModalRttAnticheat.css';

export default function ModalRttAnticheat(){
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
	const modalClose=(e)=>{
		const testButton = document.querySelector('.rtt-test-button');
		useModalClose(
			'ModalRttAnticheat',
			windowModalOrdering.openWindowsModals,
			setWindowModalOrdering.setOpenWindowsModals,
			appModalOrdering.openRttModals,
			setAppModalOrdering.setOpenRttModals,
			setModals.setModalRttAnticheatOpen,
			setModalShowClasses.setModalRttAnticheatOpenShowClass
		);
		useMakeInert(false, [testButton]);
	};
	return(
		<Window
			windowClassName={`window-modal-container modal-container rtt-modal-container rtt-anticheat-alert-container ${modalShowClasses.modalRttAnticheatOpenShowClass}`}
			windowId={'ModalRttAnticheat'}
		>
			<Titlebar
				titlebarClassName={'rtt-modal-title-bar rtt-anticheat-alert-title-bar'}
			>
				<TitlebarTitle
					titleClassName={'rtt-anticheat-alert-title'}
					title={'🚨 Wee-woo!!! Wee-woo!!!! 🚨'}
				/>
			</Titlebar>
			<div
				className='rtt-anticheat-alert-body'
			>
				<p
					className='rtt-anticheat-alert-message rtt-anticheat-alert-message-p1'
				>
					Oops! You've triggered the anti-cheat mechanism. Clicking the button area or rapid-firing the space bar or enter key prior to the button appearing disables the button for one second from the time of the last click or keypress.
				</p>
				<div
					className='rtt-anticheat-alert-icon-and-p2-container'
				>
					<div
						className='rtt-anticheat-alert-icon-container rtt-anticheat-alert-icon-container-left'
					>
						&#x1F46E;
					</div>
					<div
						className='rtt-anticheat-alert-message-container'
					>

						<p
							className='rtt-anticheat-alert-message anticheat-alert-message-p2'
						>
							You won't receive this alert again during this session.
						</p>
						<div
							className='rtt-anticheat-alert-button-container'
						>
							<AquaButton
								aquaButtonClassName={'rtt-close-button rtt-anticheat-alert-button'}
								aquaButtonOnClick={modalClose}
							>
								<AquaButtonText
									aquaButtonTextClassName={'rtt-anticheat-alert-button-text rtt-close-button-text'}
									aquaButtonText={'Okay'}
								/>
							</AquaButton>
						</div>
					</div>
					<div
						className='rtt-anticheat-alert-icon-container rtt-anticheat-alert-icon-container-right'
					>
						&#x1F46E;&#x200D;&#x2640;&#xFE0F;
					</div>
				</div>
			</div>
		</Window>
	);
};
