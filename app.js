let email=document.querySelector("#email");
let button=document.querySelector("#button");



button.addEventListener("click",()=>{
    if((email.value.includes("@")==true) && (email.value[email.value.length-3]=="." || email.value[email.value.length-4]==".")){
        alert(true)
    }else{
        alert(false)
    }
});