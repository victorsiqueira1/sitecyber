const buttonBtn =document.getElementById("box")
const mundandoCor= document.querySelector("body")

buttonBtn.addEventListener("click",(e)=>{
    if(buttonBtn.checked){
        mundandoCor.style.background="#22272E"
        mundandoCor.style.color="#EEE501"
    }else{
        mundandoCor.style.background="#EEE501"
        mundandoCor.style.color="black"
    }

})