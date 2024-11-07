import useHandleScResultAdd from '../formSubmissionHandlers/useHandleScResultAdd.jsx';

const useHandleScTestSetup=(
	setUser,
	scValues,
	setScValues,
	setModals,
	setModalShowClasses,
	appOrdering,
	setAppOrdering,
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
		const resultsAverage = (resultsSum/clickResults.length).toFixed(0);
		return resultsAverage;
	};
	const insertTableRow=(numberOfClicks, newRunningAverage)=>{
		const testTableBody = document.querySelector('.sc-test-table-body');
		testTableBody.innerHTML+= `
			<tr class='sc-test-table-row'>
				<td class='sc-test-table-row-number'>
					${roundCounter}
				</td>
				<td class='sc-test-table-row-reaction-time'>
					${numberOfClicks} clicks
				</td>
				<td class='sc-test-table-row-running-average'>
					${newRunningAverage} clicks
				</td>
			</tr>
		`;
	};
	const handleScTestButtonClick=(e)=>{
		if((e.type==='click') || (e.key===' ' && appOrdering.openApps[0]==='WindowScContainer')){
			if(numberOfClicks===0 && !roundEnded){
				setTimeout(()=>{
					roundEnded=true;
					roundCounter++;
					testButton.classList.add('sc-test-button-hide');
					testButtonWaitingMessageContainer.classList.add('sc-test-button-waiting-message-show');
					testButton.innerText='Click here to try again!';
					clickResults.push(numberOfClicks);
					newRunningAverage=runningAverage(clickResults);
					insertTableRow(numberOfClicks, newRunningAverage);
					useHandleScResultAdd(numberOfClicks, setUser);
					if(testTableContainer.scrollHeight > testTableContainer.clientHeight){
						testTable.scrollIntoView({behavior: 'smooth', block: 'end'});
					};
					setTimeout(()=>{
						roundEnded=false;
						numberOfClicks=0;
						testButtonWaitingMessageContainer.classList.remove('sc-test-button-waiting-message-show');
						testButton.classList.remove('sc-test-button-hide');
					},3000);
				},10000);
				testButton.innerText='Go! Go! Go!';
			};
			if(!roundEnded){
				numberOfClicks++;
				testButton.style.background='linear-gradient(#D84D4D 0%, transparent 100%), linear-gradient(transparent 0%, #F44 50%, #d9b2b2 100%)';
				testButton.style.borderColor='#CB4141';
				setTimeout(()=>{
					testButton.style.background='linear-gradient(#4A90E2 0%, transparent 100%), linear-gradient(transparent 0%, #4A90E2 50%, #B8CEE6 100%)';
					testButton.style.borderColor='#3672B6';
				},50);
			};
			window.focus();
		};
	};
	if(testButton){
		testButton.addEventListener('click', handleScTestButtonClick);
		document.addEventListener('keydown', handleScTestButtonClick);
	};
};

export default useHandleScTestSetup;
