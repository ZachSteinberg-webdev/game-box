import React from 'react';

export default function AquaButtonText({
	aquaButtonTextClassName,
	aquaButtonText
}){
	return(
		<p
			className={aquaButtonTextClassName}
		>
			{aquaButtonText}
		</p>
	);
};
