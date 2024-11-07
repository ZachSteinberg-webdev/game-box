import useModalOpen from '../helperFunctions/useModalOpen.jsx';
import useMakeInert from '../helperFunctions/useMakeInert.jsx';
import useHandleRttResultAdd from '../formSubmissionHandlers/useHandleRttResultAdd.jsx';

const useHandleRttTestButtonClick=(
	e,
	setUser,
	clickTime,
	setClickTime,
	// reactionTime,
	// setReactionTime,
	showTime,
	testButtonFormClickTime,
	latestSpaceOrEnterPress,
	testButtonClickCounter,
	setTestButtonClickCounter,
	testResultsCounter,
	setTestResultsCounter,
	reactionTimeResults,
	setReactionTimeResults,
	resultsSum,
	resultsAverage,
	newRunningAverage,
	setNewRunningAverage,
	anticheatAlertTriggeredYet,
	setAnticheatAlertTriggeredYet,
	setModals,
	setModalShowClasses,
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
		// console.log('In getRandomInterval block');
		return Math.round(Math.random()*(max-min)+min);
	};
	const runningAverage = (resultsArray)=>{
		resultsSum = 0;
		resultsArray.forEach((resultNumber)=>{
			resultsSum+=resultNumber;
		});
		resultsAverage = (resultsSum/reactionTimeResults.length).toFixed(0);
		return resultsAverage;
	};
	const insertTableRow=(reactionTime, newRunningAverage)=>{
		// console.log('In insertTableRow block');
		const testTableBody = document.querySelector('.rtt-test-table-body');
		testTableBody.innerHTML+= `
			<tr class="rtt-test-table-row">
				<td class="rtt-test-table-row-number">
					${testResultsCounter-1}
				</td>
				<td class="rtt-test-table-row-reaction-time">
					${reactionTime/1000} seconds (${reactionTime} milliseconds)
				</td>
				<td class="rtt-test-table-row-running-average">
					${newRunningAverage/1000} seconds (${newRunningAverage} milliseconds)
				</td>
			</tr>
		`;
	};
	// console.log('click time before set', clickTime);
	clickTime = e.timeStamp;
	setClickTime(e.timeStamp);
	// console.log('click time after set', clickTime);
	// setClickTime((currentClickTime)=>currentClickTime=e.timeStamp);
	let reactionTime = clickTime-showTime;
	// setReactionTime((currentReactionTime)=>{currentReactionTime=(clickTime-showTime)});
	if(((clickTime - testButtonFormClickTime)>1000)&&((clickTime - latestSpaceOrEnterPress)>1000)){
		testButton.blur();
		testButtonClickCounter++;
		// console.log('testButtonClickCounter', testButtonClickCounter);
		setTestButtonClickCounter((currentValue)=>currentValue+=1);
		testResultsCounter++;
		setTestResultsCounter((currentValue)=>currentValue+=1);
		// console.log('testResultsCounter', testResultsCounter);
		let randomInterval = getRandomInterval(2000, 6000);
		if(testButtonClickCounter===1){
			// console.log('In testButtonClickCounter===1 block');
			testButton.classList.add('rtt-test-button-hide');
			testButtonWaitingMessageContainer.classList.add('rtt-test-button-waiting-message-show');
			setTimeout(()=>{
				testButtonWaitingMessageContainer.classList.remove('rtt-test-button-waiting-message-show');
				testButton.classList.remove('rtt-test-button-hide');
				testButtonText.innerText="Click!";
				setTimeout(()=>{
					testButton.focus({focusVisible: true});
				}, 50);
			}, randomInterval);
		// Removed code goes here - id 03ry09wer0w3oru2938ru
		}else if(testButtonClickCounter>1){
			if(!navigator.vendor.includes("Apple")){
				reactionTime = Number.parseInt((clickTime-showTime).toFixed(0));
				// console.log('reactionTime when click>1', reactionTime);
				// setReactionTime((currentValue)=>{currentValue=Number.parseInt((clickTime-showTime).toFixed(0))});
			}else if(navigator.vendor.includes("Apple")){
				reactionTime=Number.parseInt(reactionTime-300);
				// setReactionTime((currentValue)=>{currentValue=Number.parseInt(reactionTime-300)});
			};
			// console.log('reactionTimeResults before .push before set', reactionTimeResults);
			reactionTimeResults.push(reactionTime);
			// console.log('reactionTimeResults after .push before set', reactionTimeResults);
			// setReactionTimeResults((previousResults)=>{
			// 	return [...previousResults, reactionTime];
			// });
			setReactionTimeResults(reactionTimeResults);
			// console.log('reactionTimeResults after .push after set', reactionTimeResults);
			newRunningAverage = runningAverage(reactionTimeResults);
			setNewRunningAverage((currentValue)=>currentValue=runningAverage(reactionTimeResults));
			// console.log('In testButtonClickCounter>1 block');
			insertTableRow(reactionTime, newRunningAverage);
			console.log('RTT Reaction Time', reactionTime);
			useHandleRttResultAdd(reactionTime, setUser);
			if(testTableContainer.scrollHeight > testTableContainer.clientHeight){
				testTable.scrollIntoView({behavior: "smooth", block: "end"});
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
		if(anticheatAlertTriggeredYet===false){
			// testButtonClickCounter=0;
			setTestButtonClickCounter((currentValue)=>currentValue=0);
			// testResultsCounter-=1;
			setTestResultsCounter((currentValue)=>currentValue-=1);
			useModalOpen(
				'ModalRttAnticheat',
				appModalOrdering.openRttModals,
				setAppModalOrdering.setOpenRttModals,
				setModals.setModalRttAnticheatOpen,
				setModalShowClasses.setModalRttAnticheatOpenShowClass,
				'rtt-anticheat-alert-container-in-use'
			);
			// anticheatAlertContainer.classList.add('rtt-anticheat-alert-container-in-use');
			// menubar.inert=true;
			// testContainer.inert=true;
			setTimeout(()=>{
				useMakeInert(true, [testButton]);
				const anticheatAlertButton = document.querySelector('.rtt-anticheat-alert-button');
				anticheatAlertButton.focus({focusVisible:true});
			},250);
			// function outsideClickHandler(event){
			// 	if(userClickedOutsideElement(anticheatAlertContainer)) {
			// 			shakeElement(anticheatAlertContainer);
			// 		};
			// };
			// function anticheatAlertButtonClickHandler(event){
			// 	anticheatAlertContainer.classList.remove('anticheat-alert-container-in-use');
			// 	menubar.inert=false;
			// 	testContainer.inert=false;
			// 	testButtonText.innerText="Click here to get restarted";
			// 	testButton.focus({focusVisible:true});
			// 	document.removeEventListener('mousedown', outsideClickHandler);
			// 	anticheatAlertButton.removeEventListener('click', anticheatAlertButtonClickHandler);
			// };
			// document.addEventListener('mousedown', outsideClickHandler);
			// anticheatAlertButton.addEventListener('click', anticheatAlertButtonClickHandler);
			// anticheatAlertTriggeredYet=true;
			setAnticheatAlertTriggeredYet(true);
		};
	};
};

export default useHandleRttTestButtonClick;
