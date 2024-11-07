const useGetUserWallpaper=()=>{
	let wallpaper=JSON.parse(localStorage.getItem('wallpaper'));
	if(wallpaper){
		return wallpaper;
	}else{
		return 'noUserWallpaper';
	};
};

export default useGetUserWallpaper;
