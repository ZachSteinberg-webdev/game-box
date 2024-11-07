const useClockSetupOnLoad=()=>{
	const clockHour = document.querySelector('.hour');
	const clockMinute = document.querySelector('.minute');
	const clockSecond = document.querySelector('.second');
	const clockPeriod = document.querySelector('.period');
	let date = '';
	let hour = '';
	let minute = '';
	let second = '';
	let millisecond = '';
	let period = '';
	const getAndSetDateValues = ()=>{
		date = new Date();
		hour = date.getHours();
		minute = date.getMinutes();
		second = date.getSeconds();
		millisecond = date.getMilliseconds();
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
			hour = 12;
		}else if(value>=13){
			hour = value-12;
		};
	};
	const setValueInHtml = (value, type)=>{
		if(typeof value==='number' && value<10 && type!=='hour'){
			value = `0${value}`;
		};
		if(type==='hour'){
			clockHour.innerText = value;
		}else if(type==='minute'){
			clockMinute.innerText = value;
		}else if(type==='second'){
			clockSecond.innerText = value;
		}else if(type==='period'){
			clockPeriod.innerText = value;
		};
	};
	getAndSetDateValues();
	calculatePeriod(hour);
	hour12Vs24Conversion(hour);
	setValueInHtml(second, 'second');
	setValueInHtml(minute, 'minute');
	setValueInHtml(hour, 'hour');
	setValueInHtml(period, 'period');
	setInterval(()=>{
		getAndSetDateValues();
		calculatePeriod(hour);
		hour12Vs24Conversion(hour);
		setValueInHtml(second, 'second');
		setValueInHtml(minute, 'minute');
		setValueInHtml(hour, 'hour');
		setValueInHtml(period, 'period');
	},1000);
};

export default useClockSetupOnLoad;
