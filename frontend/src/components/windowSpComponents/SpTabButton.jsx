import React from 'react';

export default function SpTabButton({
	children,
	spTabButtonClassName,
	spButtonTabId,
	spButtonTabOnClick,
	spButtonTabSpanId,
	spButtonTabInnerText,
}){
	return(
		<button
			className={spTabButtonClassName}
			id={spButtonTabId}
			onClick={spButtonTabOnClick}
		>
			{children}
			<span
				className='sp-window-tab-button-title'
				id={spButtonTabSpanId}
			>
				{spButtonTabInnerText}
			</span>
		</button>
	);
};
