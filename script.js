const button = document.getElementById("button1");

button.addEventListener("mouseover",()=>{
    button.style.setProperty("background-color","maroon")
})
button.addEventListener("mouseleave",()=>{
    button.style.setProperty("background-color","red")
})