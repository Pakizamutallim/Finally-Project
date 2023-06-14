const show = document.getElementById("show")
show.addEventListener("click", ()=>{
    const hide = document.getElementById("hide")
    const inputEmail = document.getElementById("email")
    if (inputEmail.type == "password") {
        inputEmail.type = "text";
        show.style.display = "none"
        hide.style.display = "block" 
    }
})