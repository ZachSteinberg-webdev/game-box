import React from 'react';

export default function TestButtonForm({
	children,
	testButtonFormClassName,
	testButtonFormOnClick,
	testButtonWaitingMessageContainerClassName,
	testButtonWaitingMessageClassName,
	testButtonWaitingMessageText
}){
	return(
		<form
			action='#'
			className={testButtonFormClassName}
			onClick={testButtonFormOnClick}
		>
			<div
				className={testButtonWaitingMessageContainerClassName}
			>
				<p
					className={testButtonWaitingMessageClassName}
				>
					{testButtonWaitingMessageText}
				</p>
			</div>
			{children}
		</form>
	);
};
