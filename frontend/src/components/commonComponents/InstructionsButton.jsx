import React from 'react';

import InfoIcon from '../Icons/InfoIcon.jsx';

export default function InstructionsButton({
	instructionsButtonClassName,
	onClickFunction,
	infoButtonSvgId,
	infoButtonPathFillColor,
	infoButtonFontColor
}){
	return(
		<div
			className={instructionsButtonClassName}
			onClick={onClickFunction}
		>
			<InfoIcon
				infoButtonSvgId={infoButtonSvgId}
				infoButtonPathFillColor={infoButtonPathFillColor}
				infoButtonFontColor={infoButtonFontColor}
			/>
		</div>
	);
};
