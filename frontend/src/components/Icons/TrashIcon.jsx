import React from 'react';

export default function TrashIcon({
	dockIconContainerClassName,
	handleDockIconClick,
	dockIconClassName
}){
	return(
		<div
			className={dockIconContainerClassName}
		>
			<button
				className={`drag-handle dock-icon-button ${dockIconButtonClassName}`}
				tabIndex='-1'
				onClick={handleDockIconClick}
			>
				<img
					className={dockIconClassName}
					src='../../assets/34315_empty_garbage_trash_icon.png'
				/>
			</button>
		</div>
	);
};
