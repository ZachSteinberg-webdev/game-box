import React from 'react';

import useHandleDockShow from '../../customHooks/eventListeners/useHandleDockShow.jsx';
import useHandleDockHide from '../../customHooks/eventListeners/useHandleDockHide.jsx';

import '../../css/Desktop/DockActivator.css';

export default function DockActivator(){
	return(
		<div
			className='dock-activator'
			id='dock-activator'
			onMouseEnter={useHandleDockShow}
			onMouseLeave={useHandleDockHide}
		>
		</div>
	);
};
