let minNumber=document.querySelector("#minNumber");
let maxNumber=document.querySelector("#maxNumber");
let palindromButton=document.querySelector("#list");
let perfectButton=document.querySelector("#perfectN");
let resultPalindrom=document.querySelector("#resultPalindrom");
let resultPerfect=document.querySelector("#resultPerfect");

palindromButton.addEventListener("click",()=>{

    for (let i = minNumber.value; i < maxNumber.value; i++) {
             let   result="";
      
            for(var j=String(i).length-1;j>=0;j--){
                result+=String(i)[j]
        
            }if(String(i)==result){
                resultPalindrom.value +=i+" "
            }
            
        
            }  
        })

perfectButton.addEventListener("click",()=>{
    for (let i = minNumber.value; i < maxNumber.value; i++) {
        let   result=0;
       for(var j=1;j<i;j++){
           if(i%j==0){
               result+=j
           }if(result==i){
               resultPerfect.value +=i+" "
               break;
           }
       }
    
    
    
    
    }
})        
