import React from 'react';

export default function MenubarButton({
	menubarButtonContainerId,
	menubarButtonClassName,
	menubarButtonId,
	menubarButtonName,
	menubarButtonTextId,
	menubarButtonText,
	menubarButtonOnClick,
	menubarButtonOnMouseEnter
}){
	return(
		<div
			className='menubar-button-container'
			id={menubarButtonContainerId}
		>
			<button
				className={menubarButtonClassName}
				id={menubarButtonId}
				type='button'
				name={menubarButtonName}
				tabIndex='-1'
				onClick={menubarButtonOnClick}
				onMouseEnter={menubarButtonOnMouseEnter}
			>
				<div
					className='menubar-button-text'
					id={menubarButtonTextId}
				>
					{menubarButtonText}
				</div>
			</button>
		</div>
	);
};
