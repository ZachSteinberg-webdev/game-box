import React from 'react';

export default function MenubarClock(){
	return(
		<div className="clock-container">
			<div className="clock">
				<div className="hour">00</div>
				<div className="hour-minute-separator">:</div>
				<div className="minute">00</div>
				<div className="minute-second-separator">:</div>
				<div className="second">00</div>
				<div className="second-period-separator">&nbsp;</div>
				<div className="period">AM</div>
			</div>
		</div>
	);
};
