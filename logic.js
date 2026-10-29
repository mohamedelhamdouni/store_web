const raportbtn=document.getElementById("rapor-btn");
const send=document.getElementById("rapor-btn2");


var message;


function opennewtap() {
  window.open(, "infoWin", "width=400,height=250");
  

   
   
message=document.getElementById("message").value;
  
    
}


function print(){
    alert(message);
}




raportbtn.addEventListener("click", opennewtap);
send.addEventListener("click",print);


