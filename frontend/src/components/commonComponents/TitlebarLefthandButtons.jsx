import React from 'react';

import TitlebarLefthandButton from './TitlebarLefthandButton.jsx';

import useWindowClose from '../../customHooks/helperFunctions/useWindowClose.jsx';
import useWindowMinimize from '../../customHooks/helperFunctions/useWindowMinimize.jsx';
import useWindowMaximize from '../../customHooks/helperFunctions/useWindowMaximize.jsx';


export default function TitlebarLefthandButtons({
	lefthandButtonsContainerClassName,
	closeButtonClassName,
	closeButtonId,
	closeButtonEnabled,
	minimizeButtonClassName,
	minimizeButtonId,
	minimizeButtonEnabled,
	maximizeButtonClassName,
	maximizeButtonId,
	maximizeButtonEnabled,
	windowQuerySelector,
	closeButtonQuits,
	appQuit
}){
	const windowClose=(e)=>{useWindowClose(windowQuerySelector)};
	const windowMinimize=(e)=>{useWindowMinimize(windowQuerySelector)};
	const windowMaximize=(e)=>{useWindowMaximize(windowQuerySelector)};
	return(
		<div
			className={lefthandButtonsContainerClassName}
		>
			<TitlebarLefthandButton
				lefthandButtonClassName={closeButtonClassName}
				lefthandButtonId={closeButtonId}
				lefthandButtonFunction={closeButtonEnabled && (closeButtonQuits?appQuit:windowClose)}
			/>
			<TitlebarLefthandButton
				lefthandButtonClassName={minimizeButtonClassName}
				lefthandButtonId={minimizeButtonId}
				lefthandButtonFunction={minimizeButtonEnabled?windowMinimize:undefined}
			/>
			<TitlebarLefthandButton
				lefthandButtonClassName={maximizeButtonClassName}
				lefthandButtonId={maximizeButtonId}
				lefthandButtonFunction={maximizeButtonEnabled?windowMaximize:undefined}
			/>
		</div>
	);
};
