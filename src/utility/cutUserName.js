const extrName=(userEmail)=>{
	if(userEmail.trim()==="anonymous user"){
		return userEmail
	}else{
		let index = userEmail.indexOf("@");
		return userEmail.slice(0,index)
	}
}

export default extrName