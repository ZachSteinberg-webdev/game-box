const useSpPrefPaneOpen=(e, setPanesOpen)=>{
	if(e.target.id==='sp-window-tab-button-account'){
		setPanesOpen.setAccountPaneOpen(true);
		setPanesOpen.setTimePaneOpen(false);
		setPanesOpen.setBackgroundPaneOpen(false);
	}else if(e.target.id==='sp-window-tab-button-time'){
		setPanesOpen.setAccountPaneOpen(false);
		setPanesOpen.setTimePaneOpen(true);
		setPanesOpen.setBackgroundPaneOpen(false);
	}else if(e.target.id==='sp-window-tab-button-background'){
		setPanesOpen.setAccountPaneOpen(false);
		setPanesOpen.setTimePaneOpen(false);
		setPanesOpen.setBackgroundPaneOpen(true);
	};
};

export default useSpPrefPaneOpen;
