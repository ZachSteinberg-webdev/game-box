import useModalOpen from '../helperFunctions/useModalOpen.jsx';
import useMakeInert from '../helperFunctions/useMakeInert.jsx';
import useHandleRttResultAdd from '../formSubmissionHandlers/useHandleRttResultAdd.jsx';

const useHandleRttTestButtonClick=(
	e,
	setUser,
	rttValues,
	setRttValues,
	setModals,
	setModalShowClasses,
	windowModalOrdering,
	setWindowModalOrdering,
	appModalOrdering,
	setAppModalOrdering
)=>{
	const menubar = document.querySelector('.menubar-container');
	const testContainer = document.querySelector('.rtt-test-container');
	const testTableContainer = document.querySelector('.rtt-test-table-container');
	const testTable = document.querySelector('.rtt-test-table');
	const testButton=document.querySelector('.rtt-test-button');
	const testButtonWaitingMessageContainer=document.querySelector('.rtt-test-button-waiting-message-container');
	const testButtonText = document.querySelector('.rtt-test-button-text');
	const getRandomInterval=(min, max)=>{
		return Math.round(Math.random()*(max-min)+min);
	};
	const runningAverage = (resultsArray)=>{
		let resultsSum = 0;
		resultsArray.forEach((resultNumber)=>{
			resultsSum+=resultNumber;
		});
		const resultsAverage = (resultsSum/rttValues.reactionTimeResults.length).toFixed(0);
		return resultsAverage;
	};
	const insertTableRow=(reactionTime, newRunningAverage)=>{
		const testTableBody = document.querySelector('.rtt-test-table-body');
		testTableBody.innerHTML+= `
			<tr class='rtt-test-table-row'>
				<td class='rtt-test-table-row-number'>
					${rttValues.testResultsCounter-1}
				</td>
				<td class='rtt-test-table-row-reaction-time'>
					${reactionTime/1000} seconds (${reactionTime} milliseconds)
				</td>
				<td class='rtt-test-table-row-running-average'>
					${newRunningAverage/1000} seconds (${newRunningAverage} milliseconds)
				</td>
			</tr>
		`;
	};
	rttValues.clickTime = e.timeStamp;
	setRttValues.setClickTime(e.timeStamp);
	let reactionTime = rttValues.clickTime-rttValues.showTime;
	if(((rttValues.clickTime - rttValues.testButtonFormClickTime)>1000)&&((rttValues.clickTime - rttValues.latestSpaceOrEnterPress)>1000)){
		testButton.blur();
		rttValues.testButtonClickCounter++;
		setRttValues.setTestButtonClickCounter((currentValue)=>currentValue+=1);
		rttValues.testResultsCounter++;
		setRttValues.setTestResultsCounter((currentValue)=>currentValue+=1);
		let randomInterval = getRandomInterval(2000, 6000);
		if(rttValues.testButtonClickCounter===1){
			testButton.classList.add('rtt-test-button-hide');
			testButtonWaitingMessageContainer.classList.add('rtt-test-button-waiting-message-show');
			setTimeout(()=>{
				testButtonWaitingMessageContainer.classList.remove('rtt-test-button-waiting-message-show');
				testButton.classList.remove('rtt-test-button-hide');
				testButtonText.innerText='Click!';
				setTimeout(()=>{
					testButton.focus({focusVisible: true});
				}, 50);
			}, randomInterval);
	}else if(rttValues.testButtonClickCounter>1){
			// if(!navigator.vendor.includes('Apple')){
			// 	reactionTime = Number.parseInt((rttValues.clickTime-rttValues.showTime).toFixed(0));
			// }else if(navigator.vendor.includes('Apple')){
			// 	reactionTime=Number.parseInt(reactionTime-300);
			// };
			reactionTime = Number.parseInt((rttValues.clickTime-rttValues.showTime).toFixed(0));
			rttValues.reactionTimeResults.push(reactionTime);
			setRttValues.setReactionTimeResults(rttValues.reactionTimeResults);
			rttValues.newRunningAverage = runningAverage(rttValues.reactionTimeResults);
			setRttValues.setNewRunningAverage((currentValue)=>currentValue=runningAverage(rttValues.reactionTimeResults));
			insertTableRow(reactionTime, rttValues.newRunningAverage);
			useHandleRttResultAdd(reactionTime, setUser);
			if(testTableContainer.scrollHeight > testTableContainer.clientHeight){
				testTable.scrollIntoView({behavior: 'smooth', block: 'end'});
			};
			testButton.classList.add('rtt-test-button-hide');
			testButtonWaitingMessageContainer.classList.add('rtt-test-button-waiting-message-show');
			setTimeout(()=>{
				testButtonWaitingMessageContainer.classList.remove('rtt-test-button-waiting-message-show');
				testButton.classList.remove('rtt-test-button-hide');
				setTimeout(()=>{
					testButton.focus({focusVisible: true});
				},50);
			}, randomInterval);
		};
	}else{
		if(rttValues.anticheatAlertTriggeredYet===false){
			setRttValues.setTestButtonClickCounter((currentValue)=>currentValue=0);
			setRttValues.setTestResultsCounter((currentValue)=>currentValue-=1);
			useModalOpen(
				'ModalRttAnticheat',
				windowModalOrdering.openWindowsModals,
				setWindowModalOrdering.setOpenWindowsModals,
				appModalOrdering.openRttModals,
				setAppModalOrdering.setOpenRttModals,
				setModals.setModalRttAnticheatOpen,
				setModalShowClasses.setModalRttAnticheatOpenShowClass,
				'rtt-anticheat-alert-container-in-use'
			);
			setTimeout(()=>{
				useMakeInert(true, [testButton]);
				const anticheatAlertButton = document.querySelector('.rtt-anticheat-alert-button');
				anticheatAlertButton.focus({focusVisible:true});
			},250);
			setRttValues.setAnticheatAlertTriggeredYet(true);
		};
	};
};

export default useHandleRttTestButtonClick;
