let button=document.querySelector(".button");
let result=document.querySelector(".result");

button.addEventListener("click",()=>{
    resultNumber=[];
    while (resultNumber.length<6) {
        let randomNumber = Math.trunc(Math.random()*50+1)
        
        if(resultNumber.includes(randomNumber)){
            continue;
        }else{
            resultNumber.push(randomNumber)
        }
    }
    result.innerHTML=resultNumber.join(" , ")
});