import getRandomInt from "./randomNum"

const randomArr=(amount)=>{
    let arr=[];
    for(let i=0; i<amount; i++){
        arr.push(getRandomInt(1,100))
    }

    return[...arr]
}

export default randomArr