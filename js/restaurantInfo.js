// Declare variables for info text
const lasseInfo = document.querySelector("#lassePaHedenInfo");
const saluhallenInfo = document.querySelector("#saluhallenInfo");
const laTerrazzaInfo = document.querySelector("#laTerrazzaInfo");

// Declare variables for buttons
const lasseButton = document.querySelector("#lasseButton");
const saluhallenButton = document.querySelector("#saluhallenButton");
const laTerrazzaButton = document.querySelector("#laTerrazzaButton");

// Show only restaurant info when no button is pressed
lasseInfo.style.display = "none";
saluhallenInfo.style.display = "none";
laTerrazzaInfo.style.display = "none";

// Show lasseInfo when lasseButton is pressed
lasseButton.addEventListener("click", ()=>{
    if (lasseInfo.style.display == "none"){
        lasseInfo.style.display = "block";
        saluhallenInfo.style.display = "none";
        laTerrazzaInfo.style.display = "none";
    } else{
        lasseInfo.style.display = "none";
        saluhallenInfo.style.display = "none";
        laTerrazzaInfo.style.display = "none";
    }
})

// Show saluhallenInfo when saluhallenButton is pressed
saluhallenButton.addEventListener("click", ()=>{
    if (saluhallenInfo.style.display == "none"){
        lasseInfo.style.display = "none";
        saluhallenInfo.style.display = "block";
        laTerrazzaInfo.style.display = "none";
    } else{
        lasseInfo.style.display = "none";
        saluhallenInfo.style.display = "none";
        laTerrazzaInfo.style.display = "none";
    }
})

// Show laTerrazzaInfo when laTerrazzaButton is pressed
laTerrazzaButton.addEventListener("click", ()=>{
    if (laTerrazzaInfo.style.display == "none"){
        lasseInfo.style.display = "none";
        saluhallenInfo.style.display = "none";
        laTerrazzaInfo.style.display = "block";
    } else{
        lasseInfo.style.display = "none";
        saluhallenInfo.style.display = "none";
        laTerrazzaInfo.style.display = "none";
    }
})