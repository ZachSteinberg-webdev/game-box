import React from 'react';

import DockIcon from './DockIcon.jsx';

import useHandleDockHide from '../../customHooks/eventListeners/useHandleDockHide.jsx';

import '../../css/Desktop/Dock.css';

export default function Dock(){
	const handleDockHide=(e)=>{useHandleDockHide(e)};
	return(
		<div
			className='dock'
			id='dock'
			onMouseLeave={handleDockHide}
		>
			<DockIcon
				dockIconContainerClassName={'dock-icon-container dock-rtt-test-icon-container'}
				dockIconButtonClassName={'dock-icon-button dock-rtt-test-icon-button'}
				dockIconClassName={'dock-icon dock-rtt-test-icon'}
				modalContextName={'modalRttContainerOpen'}
			/>
			<DockIcon
				dockIconContainerClassName={'dock-icon-container dock-sc-test-icon-container'}
				dockIconButtonClassName={'dock-icon-button dock-sc-test-icon-button'}
				dockIconClassName={'dock-icon dock-sc-test-icon'}
				modalContextName={'modalScContainerOpen'}
			/>
			<DockIcon
				dockIconContainerClassName={'dock-icon-container dock-otw-icon-container'}
				dockIconButtonClassName={'dock-icon-button dock-otw-icon-button'}
				dockIconClassName={'dock-icon dock-otw-icon'}
				modalContextName={'modalOtwContainerOpen'}
			/>
			<DockIcon
				dockIconContainerClassName={'dock-icon-container dock-sp-icon-container'}
				dockIconButtonClassName={'dock-icon-button dock-sp-icon-button'}
				dockIconClassName={'dock-icon dock-sp-icon'}
				modalContextName={'modalSpContainerOpen'}
			/>
			<div
				className='vertical-separator'
			>
			</div>
			<DockIcon
				dockIconContainerClassName={'dock-icon-container dock-trash-icon-container'}
				dockIconButtonClassName={'dock-icon-button dock-trash-icon-button'}
				dockIconClassName={'dock-icon dock-trash-icon'}
			/>
		</div>
	);
};
