 export const getDate =()=>{
 	const now = new Date()
 	let date = now.getDate();
 	let month = now.getMonth() + 1;
 	let hours = now.getHours();
 	let minutes = now.getMinutes();

 	return `${date}-${month}-${hours}:${minutes}`
 }