const fetchAuthData=()=>{
	return{
		expTime: window.localStorage.getItem("expTime"),
		token: window.localStorage.getItem("token"),
		userEmail: window.localStorage.getItem("userEmail"),
		userId: window.localStorage.getItem("userId")
	}
}

export default fetchAuthData