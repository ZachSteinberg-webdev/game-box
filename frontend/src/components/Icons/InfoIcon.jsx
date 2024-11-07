import React from 'react';

export default function InfoIcon({
	infoButtonSvgClassName,
	infoButtonSvgId,
	infoButtonPathClassName,
	infoButtonPathFillColor,
	infoButtonFontPathClassName,
	infoButtonFontColor
}){
	return(
		<svg
			className={infoButtonSvgClassName}
			id={infoButtonSvgId}
			xmlns='http://www.w3.org/2000/svg'
			xmlnsXlink='http://www.w3.org/1999/xlink'
			viewBox='0 0 512 512'
			width='512px'
			height='512px'>
			<g>
				<g>
					<g>
						<g>
							<g>
								<g>
									<g>
										<g>
											<path
												className={infoButtonPathClassName}
												fill={infoButtonPathFillColor}
												d='M504.1,256C504.1,119,393,7.9,256,7.9C119,7.9,7.9,119,7.9,256C7.9,393,119,504.1,256,504.1C393,504.1,504.1,393,504.1,256z'
											/>
										</g>
									</g>
								</g>
							</g>
						</g>
					</g>
				</g>
				<g>
					<path
						className={infoButtonFontPathClassName}
						fill={infoButtonFontColor}
						d='M323.2,367.5c-1.4-2-4-2.8-6.3-1.7c-24.6,11.6-52.5,23.9-58,25c-0.1-0.1-0.4-0.3-0.6-0.7c-0.7-1-1.1-2.3-1.1-4c0-13.9,10.5-56.2,31.2-125.7c17.5-58.4,19.5-70.5,19.5-74.5c0-6.2-2.4-11.4-6.9-15.1c-4.3-3.5-10.2-5.3-17.7-5.3c-12.5,0-26.9,4.7-44.1,14.5c-16.7,9.4-35.4,25.4-55.4,47.5c-1.6,1.7-1.7,4.3-0.4,6.2c1.3,1.9,3.8,2.6,6,1.8c7-2.9,42.4-17.4,47.6-20.6c4.2-2.6,7.9-4,10.9-4c0.1,0,0.2,0,0.3,0c0,0.2,0.1,0.5,0.1,0.9c0,3-0.6,6.7-1.9,10.7c-30.1,97.6-44.8,157.5-44.8,183c0,9,2.5,16.2,7.4,21.5c5,5.4,11.8,8.1,20.1,8.1c8.9,0,19.7-3.7,33.1-11.4c12.9-7.4,32.7-23.7,60.4-49.7C324.3,372.2,324.6,369.5,323.2,367.5z'
					/>
					<path
						className={infoButtonFontPathClassName}
						fill={infoButtonFontColor}
						d='M322.2,84.6c-4.9-5-11.2-7.6-18.7-7.6c-9.3,0-17.5,3.7-24.2,11c-6.6,7.2-9.9,15.9-9.9,26.1c0,8,2.5,14.7,7.3,19.8c4.9,5.2,11.1,7.8,18.5,7.8c9,0,17-3.9,24-11.6c6.9-7.6,10.4-16.4,10.4-26.4C329.6,96,327.1,89.6,322.2,84.6z'
					/>
				</g>
			</g>
		</svg>
	);
};