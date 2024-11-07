const useHandleUsernameChange=(
	name,
	e,
	user,
	setUser,
	setUsername
)=>{
	setUsername(e.target.value);
};

export default useHandleUsernameChange;
