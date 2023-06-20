
const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');

togglePassword.addEventListener('click', function (e) {
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash');
});





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
            createUsersKey();
            const users = JSON.parse(localStorage.getItem('users'));
            const result = users.find(u=> u.email == email.value && u.password == password.value);
            if (result != undefined) {
                document.cookie = `name=${result.name}`
                document.cookie = `surname=${result.surname}`
                window.location.href = "user.html";
            }
            // else{
            //     window.location.href = "index.html";
            // }
        })




















// const loginBtn = document.getElementById("login");
//     loginBtn.addEventListener("click", () => {
//     const email = document.getElementById("email");
//     const password = document.getElementById("password");
//     const users = JSON.parse(localStorage.getItem("users"));

//     const user = users.find(u => u.email === email.value && u.password === password.value);

//         if (user.role === "admin") {
//             window.location.href = "admin.html";
//         } 
//         else if (user.role === "user") {
//             window.location.href = "index.html";
//         }
//     });






