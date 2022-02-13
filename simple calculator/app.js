let firstNumber=document.querySelector(".first");
let secondNumber=document.querySelector("#second");
let button=document.querySelector("#button");
let result=document.querySelector(".result");
let operator=document.querySelector("#operator")

button.addEventListener("click",()=>{
    if(operator.value=="+"){
       result.innerText=`${Number(firstNumber.value)} + ${Number(secondNumber.value)} =${Number(firstNumber.value) + Number(secondNumber.value)}`
    }else  if(operator.value=="-"){
        result.innerText=`${Number(firstNumber.value)} - ${Number(secondNumber.value)} =${Number(firstNumber.value) - Number(secondNumber.value)}`
     } else  if(operator.value=="/"){
            result.innerText=`${Number(firstNumber.value)} / ${Number(secondNumber.value)} =${Number(firstNumber.value) / Number(secondNumber.value)}`}
            else  if(operator.value=="*"){
                result.innerText=`${Number(firstNumber.value)} * ${Number(secondNumber.value)} =${Number(firstNumber.value) * Number(secondNumber.value)}`  }   
})