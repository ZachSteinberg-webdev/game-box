const useGetUser=(
	setUser,
	navigate
)=>{
	fetch('/api/getUser')
	.then(res=>{
		return res.json()
	})
	.then(result=>{
		if(result.success===true){
			setUser(result.user);
		}else{
			console.log('Error from getUser route: User not logged in. Redirect to login.');
			navigate('/login');
		};
	})
	.catch(err=>{
		console.log('Error from getUser route', err);
		navigate('/login');
	});
};

export default useGetUser;
