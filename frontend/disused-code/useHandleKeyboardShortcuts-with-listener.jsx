const useHandleKeyboardShortcuts=(openApps)=>{
	const handleDocumentKeypress=(e)=>{
		console.log(e);
		if(openApps[0]==='WindowRttContainer'){

		};
	};
	document.addEventListener('keypress', handleDocumentKeypress);
};

export default useHandleKeyboardShortcuts;
