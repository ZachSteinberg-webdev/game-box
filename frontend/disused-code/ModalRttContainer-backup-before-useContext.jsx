import React from 'react';

import useWindowClose from '../customHooks/helperFunctions/useWindowClose.jsx';
import useWindowMinimize from '../customHooks/helperFunctions/useWindowMinimize.jsx';
import useWindowMaximize from '../customHooks/helperFunctions/useWindowMaximize.jsx';

import '../css/ModalRttContainer.css';

export default function ModalRttContainer({
	setModalRttContainerOpen,
	modalRttContainerOpenShowClass,
	setModalRttContainerOpenShowClass
}){
	return(
		<div
			className={`rtt-test-container ${modalRttContainerOpenShowClass}`}
		>
			<div
				className="rtt-modal-title-bar rtt-test-title-container"
			>
				<div
					className="rtt-test-window-lefthand-buttons-container"
				>
					<div
						className="rtt-test-window-button rtt-test-window-close-button"
						id="rtt-test-window-close-button"
						onClick={(e)=>useWindowClose(e, setModalRttContainerOpen, setModalRttContainerOpenShowClass)}
					>
					</div>
					<div
						className="rtt-test-window-button rtt-test-window-minimize-button"
						onClick={(e)=>{useWindowMinimize(e)}}
					>
					</div>
					<div
						className="rtt-test-window-button rtt-test-window-maximize-button"
						onClick={(e)=>{useWindowMaximize(e)}}
					>
					</div>
				</div>
				<p
					className="rtt-test-title"
				>
					Reaction Time Test
				</p>
				<div
					className="rtt-test-window-righthand-button-container"
				>
					<div
						className="rtt-test-window-righthand-button"
					>
					</div>
				</div>
			</div>
			<div
				className="rtt-test-instructions-button-container"
			>
				<span
					className="rtt-test-instructions-placeholder"
				>
					Click for instructions
				</span>
			</div>
			<div
				className="rtt-test-results-container-in-click-prompt"
			>
				<div
					className="rtt-test-table-header-container"
				>
					<table
						className="rtt-test-table-header"
					>
						<thead
							className="rtt-test-table-header"
						>
							<tr
								className="rtt-test-table-header-row"
							>
								<th
									className="rtt-test-table-header-click-number"
								>
									Click
								</th>
								<th
									className="rtt-test-table-header-reaction-time"
								>
									Reaction time
								</th>
								<th
									className="rtt-test-table-header-running-average"
								>
									Running average
								</th>
							</tr>
						</thead>
					</table>
				</div>
				<div
					className="rtt-test-table-container"
				>
					<table
						className="rtt-test-table"
					>
						<tbody
							className="rtt-test-table-body"
						>
						</tbody>
					</table>
				</div>
			</div>
			<div
				className="rtt-test-button-container"
			>
				<form
					action="#"
					className="rtt-test-button-form"
				>
					<div
						className="rtt-test-button-waiting-message-container"
					>
						<p
							className="rtt-test-button-waiting-message"
						>
							Get ready and...
						</p>
					</div>
					<button
						className="rtt-test-button"
						type="button"
						name="testButton"
						tabIndex="1"
						autoFocus
					>
						<p
							className="rtt-test-button-text"
						>
							Click here to get started!
						</p>
					</button>
				</form>
			</div>
		</div>
	);
};
