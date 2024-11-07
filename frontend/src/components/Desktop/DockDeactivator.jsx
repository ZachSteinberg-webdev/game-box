import React from 'react';

import useHandleDockHide from '../../customHooks/eventListeners/useHandleDockHide.jsx';

import '../../css/Desktop/DockDeactivator.css';

export default function DockDeactivator(){
	const handleDockHide=(e)=>{useHandleDockHide(e)};
	return(
		<div
			className='dock-deactivator'
			id='dock-deactivator'
			onMouseLeave={handleDockHide}
		>
		</div>
	)
}
