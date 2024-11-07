import React from 'react';

export default function AquaButton({
	children,
	aquaButtonClassName,
	aquaButtonId,
	aquaButtonOnClick,
	aquaButtonOnTransitionEnd
}){
	return(
		<button
			className={aquaButtonClassName}
			id={aquaButtonId}
			type='button'
			name='testButton'
			tabIndex='1'
			onClick={aquaButtonOnClick}
			onTransitionEnd={aquaButtonOnTransitionEnd}
			autoFocus
		>
			{children}
		</button>
	);
};
