let reverseWord=document.querySelector("#reverse");
let button=document.querySelector("#button");
let result=document.querySelector("#result");

button.addEventListener("click",()=>{
    result.innerText=reverseWord.value.split(" ").reverse().join(" ");
})