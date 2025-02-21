// Declare variables for texts
const hamburgare = document.querySelector("#hamburgareRecept");
const carbonara = document.querySelector("#carbonaraRecept");
const chiliConCarne = document.querySelector("#chiliConCareRecept");

// Declare varables for buttons
const hamburgareButton = document.querySelector("#hamburgareButton");
const carbonaraButton = document.querySelector("#carbonaraButton");
const chiliConCarneButton = document.querySelector("#chiliConCarneButton");

hamburgare.style.display = "block";
carbonara.style.display = "none";
chiliConCarne.style.display = "none";

hamburgareButton.addEventListener("click", ()=>{
    hamburgare.style.display = "block";
    carbonara.style.display = "none";
    chiliConCarne.style.display = "none";
    
})

carbonaraButton.addEventListener("click", ()=>{
    hamburgare.style.display = "none";
    carbonara.style.display = "block";
    chiliConCarne.style.display = "none";;
})

chiliConCarneButton.addEventListener("click", ()=>{
    hamburgare.style.display = "none";
    carbonara.style.display = "none";
    chiliConCarne.style.display = "block";
})