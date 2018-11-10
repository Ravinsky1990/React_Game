
export const checkToken=(expTime)=>{
	let expTimeIntg = +expTime * 1000
	let date = new Date();
	let nowLogin = +date.getTime();
	let prevEnter = +window.localStorage.getItem("now")
	console.log(nowLogin, prevEnter, expTimeIntg);
	console.log(nowLogin - prevEnter);
	if((nowLogin - prevEnter) > expTimeIntg){
		console.log("need auth")
		return false
	}else{
		console.log("already auth!")
		return true
	}
}