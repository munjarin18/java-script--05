let type = document.querySelector(".type");
let typedText = type.innerHTML;
let typedArr = typedText.split ("");
type.innerHTML = "";
let typing = 0;





function typedJs () {
 if(typing < typedText.length){
    type.innerHTML +=  typedText.charAt(typing);
    typing++;
    typedArr = typedText.split ("");
 }else{
   typedArr.pop("");
   type.innerHTML = typedArr.join("");
   if( typedArr.length == 0){
    typing = 0;
   }
 }
}

setInterval(()=>{
    typedJs (); 
},200);



