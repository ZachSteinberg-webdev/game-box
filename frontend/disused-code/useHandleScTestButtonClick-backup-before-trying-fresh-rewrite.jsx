// import useModalOpen from '../helperFunctions/useModalOpen.jsx';
// import useMakeInert from '../helperFunctions/useMakeInert.jsx';
import useHandleScResultAdd from '../formSubmissionHandlers/useHandleScResultAdd.jsx';

const useHandleScTestButtonClick=(
	e,
	setUser,
	scValues,
	setScValues,
	setModals,
	setModalShowClasses,
	appModalOrdering,
	setAppModalOrdering
)=>{
	// const menubar = document.querySelector('.menubar-container');
	const testContainer = document.querySelector('.sc-test-container');
	const testTableContainer = document.querySelector('.sc-test-table-container');
	const testTable = document.querySelector('.sc-test-table');
	const testButton=document.querySelector('.sc-test-button');
	const testButtonWaitingMessageContainer=document.querySelector('.sc-test-button-waiting-message-container');
	const testButtonText = document.querySelector('.sc-test-button-text');
	// const getRandomInterval=(min, max)=>{
	// 	return Math.round(Math.random()*(max-min)+min);
	// };
	const runningAverage = (resultsArray)=>{
		let resultsSum = 0;
		resultsArray.forEach((resultNumber)=>{
			resultsSum+=resultNumber;
		});
		const resultsAverage = (resultsSum/scValues.reactionTimeResults.length).toFixed(0);
		return resultsAverage;
	};
	const insertTableRow=(reactionTime, newRunningAverage)=>{
		// console.log('In insertTableRow block');
		const testTableBody = document.querySelector('.sc-test-table-body');
		testTableBody.innerHTML+= `
			<tr class="sc-test-table-row">
				<td class="sc-test-table-row-number">
					${scValues.testResultsCounter-1}
				</td>
				<td class="sc-test-table-row-reaction-time">
					${reactionTime/1000} seconds (${reactionTime} milliseconds)
				</td>
				<td class="sc-test-table-row-running-average">
					${newRunningAverage/1000} seconds (${newRunningAverage} milliseconds)
				</td>
			</tr>
		`;
	};
	// console.log('click time before set', scValues.clickTime);
	scValues.clickTime = e.timeStamp;
	setScValues.setClickTime(e.timeStamp);
	// console.log('click time after set', scValues.clickTime);
	// setScValues.setClickTime((currentClickTime)=>currentClickTime=e.timeStamp);
	let reactionTime = scValues.clickTime-scValues.showTime;
	// setReactionTime((currentReactionTime)=>{currentReactionTime=(scValues.clickTime-scValues.showTime)});
	if(((scValues.clickTime - scValues.testButtonFormClickTime)>1000)&&((scValues.clickTime - scValues.latestSpaceOrEnterPress)>1000)){
		testButton.blur();
		scValues.testButtonClickCounter++;
		// console.log('scValues.testButtonClickCounter', scValues.testButtonClickCounter);
		setScValues.setTestButtonClickCounter((currentValue)=>currentValue+=1);
		scValues.testResultsCounter++;
		setScValues.setTestResultsCounter((currentValue)=>currentValue+=1);
		// console.log('scValues.testResultsCounter', scValues.testResultsCounter);
		let randomInterval = getRandomInterval(2000, 6000);
		if(scValues.testButtonClickCounter===1){
			// console.log('In scValues.testButtonClickCounter===1 block');
			testButton.classList.add('sc-test-button-hide');
			testButtonWaitingMessageContainer.classList.add('sc-test-button-waiting-message-show');
			setTimeout(()=>{
				testButtonWaitingMessageContainer.classList.remove('sc-test-button-waiting-message-show');
				testButton.classList.remove('sc-test-button-hide');
				testButtonText.innerText="Click!";
				setTimeout(()=>{
					testButton.focus({focusVisible: true});
				}, 50);
			}, randomInterval);
		// Removed code goes here - id 03ry09wer0w3oru2938ru
	}else if(scValues.testButtonClickCounter>1){
			if(!navigator.vendor.includes("Apple")){
				reactionTime = Number.parseInt((scValues.clickTime-scValues.showTime).toFixed(0));
				// console.log('reactionTime when click>1', reactionTime);
				// setReactionTime((currentValue)=>{currentValue=Number.parseInt((scValues.clickTime-scValues.showTime).toFixed(0))});
			}else if(navigator.vendor.includes("Apple")){
				reactionTime=Number.parseInt(reactionTime-300);
				// setReactionTime((currentValue)=>{currentValue=Number.parseInt(reactionTime-300)});
			};
			// console.log('scValues.reactionTimeResults before .push before set', scValues.reactionTimeResults);
			scValues.reactionTimeResults.push(reactionTime);
			// console.log('scValues.reactionTimeResults after .push before set', scValues.reactionTimeResults);
			// setScValues.setReactionTimeResults((previousResults)=>{
			// 	return [...previousResults, reactionTime];
			// });
			setScValues.setReactionTimeResults(scValues.reactionTimeResults);
			// console.log('scValues.reactionTimeResults after .push after set', scValues.reactionTimeResults);
			scValues.newRunningAverage = runningAverage(scValues.reactionTimeResults);
			setScValues.setNewRunningAverage((currentValue)=>currentValue=runningAverage(scValues.reactionTimeResults));
			// console.log('In scValues.testButtonClickCounter>1 block');
			insertTableRow(reactionTime, scValues.newRunningAverage);
			console.log('RTT Reaction Time', reactionTime);
			useHandleScResultAdd(reactionTime, setUser);
			if(testTableContainer.scrollHeight > testTableContainer.clientHeight){
				testTable.scrollIntoView({behavior: "smooth", block: "end"});
			};
			testButton.classList.add('sc-test-button-hide');
			testButtonWaitingMessageContainer.classList.add('sc-test-button-waiting-message-show');
			setTimeout(()=>{
				testButtonWaitingMessageContainer.classList.remove('sc-test-button-waiting-message-show');
				testButton.classList.remove('sc-test-button-hide');
				setTimeout(()=>{
					testButton.focus({focusVisible: true});
				},50);
			}, randomInterval);
		};
	}else{
		if(scValues.anticheatAlertTriggeredYet===false){
			// scValues.testButtonClickCounter=0;
			setScValues.setTestButtonClickCounter((currentValue)=>currentValue=0);
			// scValues.testResultsCounter-=1;
			setScValues.setTestResultsCounter((currentValue)=>currentValue-=1);
			useModalOpen(
				'ModalScAnticheat',
				appModalOrdering.openScModals,
				setAppModalOrdering.setOpenScModals,
				setModals.setModalScAnticheatOpen,
				setModalShowClasses.setModalScAnticheatOpenShowClass,
				'sc-anticheat-alert-container-in-use'
			);
			// anticheatAlertContainer.classList.add('sc-anticheat-alert-container-in-use');
			// menubar.inert=true;
			// testContainer.inert=true;
			setTimeout(()=>{
				useMakeInert(true, [testButton]);
				const anticheatAlertButton = document.querySelector('.sc-anticheat-alert-button');
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
			// scValues.anticheatAlertTriggeredYet=true;
			setScValues.setAnticheatAlertTriggeredYet(true);
		};
	};
};

export default useHandleScTestButtonClick;
