const useMakeInert=(boolean, arrayOfElements)=>{
	if(boolean){
		arrayOfElements.forEach((element, i) => {
			element.inert=true;
			element.disabled=true;
		});
	}else if(!boolean){
		arrayOfElements.forEach((element, i) => {
			element.inert=false;
			element.disabled=false;
		});
	};
};

export default useMakeInert;
