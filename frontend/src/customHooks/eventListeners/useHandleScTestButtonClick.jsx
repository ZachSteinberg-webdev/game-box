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
	const testContainer = document.querySelector('.sc-test-container');
	const testTableContainer = document.querySelector('.sc-test-table-container');
	const testTable = document.querySelector('.sc-test-table');
	const testButton=document.querySelector('.sc-test-button');
	const testButtonWaitingMessageContainer=document.querySelector('.sc-test-button-waiting-message-container');
	const testButtonText = document.querySelector('.sc-test-button-text');

	let numberOfClicks=0;
	let roundEnded=false;
	let roundCounter=0;
	let clickResults=[];
	let newRunningAverage=0;
	const runningAverage = (resultsArray)=>{
		let resultsSum = 0;
		resultsArray.forEach((resultNumber)=>{
			resultsSum+=resultNumber;
		});
		const resultsAverage = (resultsSum/scValues.clickResults.length).toFixed(0);
		return resultsAverage;
	};
	const insertTableRow=(numberOfClicks, newRunningAverage)=>{
		const testTableBody = document.querySelector('.sc-test-table-body');
		testTableBody.innerHTML+= `
			<tr class='sc-test-table-row'>
				<td class='sc-test-table-row-number'>
					${scValues.roundCounter+1}
				</td>
				<td class='sc-test-table-row-reaction-time'>
					${scValues.numberOfClicks} clicks
				</td>
				<td class='sc-test-table-row-running-average'>
					${newRunningAverage} clicks
				</td>
			</tr>
		`;
	};
	if(numberOfClicks===0 && roundEnded===false){
		setTimeout(()=>{
			roundEnded=true;
			roundCounter++;
			testButton.classList.add('sc-test-button-hide');
			testButtonWaitingMessageContainer.classList.add('sc-test-button-waiting-message-show');
			testButton.innerText='Click here to try again!';
			clickResults.push(numberOfClicks);
			newRunningAverage=runningAverage(clickResults);
			insertTableRow(numberOfClicks, newRunningAverage);
			if(testTableContainer.scrollHeight > testTableContainer.clientHeight){
				testTable.scrollIntoView({behavior: 'smooth', block: 'end'});
			};
		},1000);
		setTimeout(()=>{
			roundEnded=false;
			testButtonWaitingMessageContainer.classList.remove('sc-test-button-waiting-message-show');
			testButton.classList.remove('sc-test-button-hide');
		},4000);
		numberOfClicks++;
		testButton.innerText='Go! Go! Go!';
	}else if(scValues.numberOfClicks>0 && scValues.roundEnded===false){
		numberOfClicks++;
	};
};

export default useHandleScTestButtonClick;
