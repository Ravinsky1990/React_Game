
export const saveToken=(tokenVal, expTime, userId, userEmail)=>{
	let date = new Date();
	let now = +date.getTime()
	window.localStorage.setItem("token", tokenVal);
	window.localStorage.setItem("expTime",expTime);
	window.localStorage.setItem("now",now);
	//userData
	window.localStorage.setItem("userId",userId);
	window.localStorage.setItem("userEmail",userEmail);
}