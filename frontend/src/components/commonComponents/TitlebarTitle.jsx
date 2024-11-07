import React from 'react';

export default function TitlebarTitle({
	titleClassName,
	title
}){
	return(
		<p
			className={titleClassName}
		>
			{title}
		</p>
	);
};
