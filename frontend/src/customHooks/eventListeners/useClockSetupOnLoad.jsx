const useClockSetupOnLoad=()=>{
	let clockDayName;
	let clockMonthName;
	let clockDay;
	let clockYear;
	let clockHour12;
	let clockHour24;
	let clockMinute;
	let clockSecond;
	let clockPeriod;
	if(document.querySelectorAll('.day-name')){
		clockDayName = document.querySelectorAll('.day-name');
	};
	if(document.querySelectorAll('.month-name')){
		clockMonthName = document.querySelectorAll('.month-name');
	};
	if(document.querySelectorAll('.day')){
		clockDay = document.querySelectorAll('.day');
	};
	if(document.querySelectorAll('.year')){
		clockYear = document.querySelectorAll('.year');
	};
	if(document.querySelectorAll('.hour-12')){
		clockHour12 = document.querySelectorAll('.hour-12');
	};
	if(document.querySelectorAll('.hour-24')){
		clockHour24 = document.querySelectorAll('.hour-24');
	};
	if(document.querySelectorAll('.minute')){
		clockMinute = document.querySelectorAll('.minute');
	};
	if(document.querySelectorAll('.second')){
		clockSecond = document.querySelectorAll('.second');
	};
	if(document.querySelectorAll('.period')){
		clockPeriod = document.querySelectorAll('.period');
	};
	let date = '';
	let dayName = '';
	let monthName = '';
	let day = '';
	let year = '';
	let hour12 = '';
	let hour24 = '';
	let minute = '';
	let second = '';
	let millisecond = '';
	let period = '';
	const getAndSetDateValues = ()=>{
		date = new Date();
		dayName = date.getDay();
		monthName = date.getMonth();
		day = date.getDate();
		year = date.getFullYear();
		hour12 = date.getHours();
		hour24 = date.getHours();
		minute = date.getMinutes();
		second = date.getSeconds();
		millisecond = date.getMilliseconds();
	};
	const calculateDayName = (value)=>{
		switch(value){
			case 0:
			dayName='Sunday';
			break;
			case 1:
			dayName='Monday';
			break;
			case 2:
			dayName='Tuesday';
			break;
			case 3:
			dayName='Wednesday';
			break;
			case 4:
			dayName='Thursday';
			break;
			case 5:
			dayName='Friday';
			break;
			case 6:
			dayName='Saturday';
		};
	};
	const calculateMonthName = (value)=>{
		switch(value){
			case 0:
			monthName='January';
			break;
			case 1:
			monthName='February';
			break;
			case 2:
			monthName='March';
			break;
			case 3:
			monthName='April';
			break;
			case 4:
			monthName='May';
			break;
			case 5:
			monthName='June';
			break;
			case 6:
			monthName='July';
			break;
			case 7:
			monthName='August';
			break;
			case 8:
			monthName='September';
			break;
			case 9:
			monthName='October';
			break;
			case 10:
			monthName='November';
			break;
			case 11:
			monthName='December';
		};
	};
	const calculatePeriod = (value)=>{
		if(value<12){
			period = 'AM';
		}else if(value>=12){
			period = 'PM';
		};
	};
	const hour12Vs24Conversion = (value)=>{
		if(value===0){
			hour12 = 12;
		}else if(value>=13){
			hour12 = value-12;
		};
	};
	const setValueInHtml = (value, type)=>{
		if((type==='minute' || type==='second') && value<10){
			value = `0${value}`;
		};
		if(type==='day'){
			if(value===1){
				value=`${value}st`;
			}else if(value===2){
				value=`${value}nd`;
			}else if(value===3){
				value=`${value}rd`;
			}else if(value>=4 && value<=20){
				value=`${value}th`;
			}else if(value===21){
				value=`${value}st`;
			}else if(value===22){
				value=`${value}nd`;
			}else if(value===23){
				value=`${value}rd`;
			}else if(value>=24 && value<=30){
				value=`${value}th`;
			}else if(value===31){
				value=`${value}st`;
			};
		};
		if(type==='hour12'){
			clockHour12.forEach((item, i) => {
				item.innerText = value;
			});
		}else if(type==='hour24'){
			clockHour24.forEach((item, i) => {
				item.innerText = value;
			});
		}else if(type==='minute'){
			clockMinute.forEach((item, i) => {
				item.innerText = value;
			});
		}else if(type==='second'){
			clockSecond.forEach((item, i) => {
				item.innerText = value;
			});
		}else if(type==='period'){
			clockPeriod.forEach((item, i) => {
				item.innerText = value;
			});
		}else if(type==='dayName'){
			clockDayName.forEach((item, i) => {
				item.innerText = value;
			});
		}else if(type==='monthName'){
			clockMonthName.forEach((item, i) => {
				item.innerText = value;
			});
		}else if(type==='day'){
			clockDay.forEach((item, i) => {
				item.innerText = value;
			});
		}else if(type==='year'){
			clockYear.forEach((item, i) => {
				item.innerText = value;
			});
		};
	};
	getAndSetDateValues();
	calculateDayName(dayName);
	calculateMonthName(monthName);
	calculatePeriod(hour24);
	hour12Vs24Conversion(hour12);
	clockDayName && setValueInHtml(dayName, 'dayName');
	clockMonthName && setValueInHtml(monthName, 'monthName');
	clockDay && setValueInHtml(day, 'day');
	clockYear && setValueInHtml(year, 'year');
	clockSecond && setValueInHtml(second, 'second');
	clockMinute && setValueInHtml(minute, 'minute');
	clockHour12 && setValueInHtml(hour12, 'hour12');
	clockHour24 && setValueInHtml(hour24, 'hour24');
	clockPeriod && setValueInHtml(period, 'period');
	setInterval(()=>{
		getAndSetDateValues();
		calculateDayName(dayName);
		calculateMonthName(monthName);
		calculatePeriod(hour24);
		hour12Vs24Conversion(hour12);
		clockDayName && setValueInHtml(dayName, 'dayName');
		clockMonthName && setValueInHtml(monthName, 'monthName');
		clockDay && setValueInHtml(day, 'day');
		clockYear && setValueInHtml(year, 'year');
		clockSecond && setValueInHtml(second, 'second');
		clockMinute && setValueInHtml(minute, 'minute');
		clockHour12 && setValueInHtml(hour12, 'hour12');
		clockHour24 && setValueInHtml(hour24, 'hour24');
		clockPeriod && setValueInHtml(period, 'period');
	},1000);
};

export default useClockSetupOnLoad;
