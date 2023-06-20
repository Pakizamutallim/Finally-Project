createUsersKey();
function createUsersKey() {
    if (localStorage.getItem('users') == null) {
        localStorage.setItem('users', '[]')
    }
}



const loginBtn = document.getElementById('login');
loginBtn.addEventListener('click', ()=>{
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    // createUsersKey();
    if (email.value == "admin" & password.value == "admin1224") {
        window.location.href = "admin.html";
    }
})