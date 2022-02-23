;number1=document.querySelector("#number1");
number2=document.querySelector("#number2");
number3=document.querySelector("#number3");
result=document.querySelector("#result");
button=document.querySelector("#btn")


button.addEventListener("click",()=>{
    let s="";
    let count=0
    for(let i=Number(number2.value);i<= Number(number3.value);i++){
        s+=String(i);
   }console.log(s);
   for(let j=0;j<(s.length)-1;j++){
     if(s[j].includes(number1.value)==true){
         count++;
     }
   }


   result.innerText=count
})
