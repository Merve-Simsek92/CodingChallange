let input=document.querySelector("#input");
let button=document.querySelector(".count");
let  result=document.querySelector(".result");

button.addEventListener("click",()=>{

    text=input.value.match(/[aeiou]/gi);
    result.innerText=text.length
})