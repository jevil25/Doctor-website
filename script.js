let popup=document.getElementById("popup");

document.querySelector(".ok").addEventListener("click", function(){
        popup.classList.remove("open-popup");
})

for(var i=0; i<document.querySelectorAll("button").length; i++){
document.querySelectorAll(".button")[i].addEventListener("click", function(){
        popup.classList.add("open-popup");
})};