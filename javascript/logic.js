const addBtn = document.getElementById("rapor-btn");
const card = document.getElementById("sheetrapor");
const closeBtn = document.getElementById("closeBtn");

const sendbtn=document.getElementById("sendBtn");

function show_card() {
card.classList.add("show");

}


function remove_card() {
card.classList.remove("show");
}

function printrapor(){
message=document.getElementById("texta").value;

alert(message);
}

addBtn.addEventListener("click",show_card)

closeBtn.addEventListener("click",remove_card)

sendBtn.addEventListener("click",printrapor);
