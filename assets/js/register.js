


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


const registerBtn = document.getElementById("register");
        registerBtn.addEventListener('click', ()=>{
            const name = document.getElementById('name');
            const surname = document.getElementById('surname');
            const mail = document.getElementById('email');
            const password = document.getElementById('password');
            let obj = {
                name : name.value,
                surname: surname.value,
                email: mail.value,
                password: password.value
            }
            createUsersKey();
            let users = JSON.parse(localStorage.getItem('users'));
            users.push(obj);
            localStorage.setItem('users',JSON.stringify(users))
        })








// var users = JSON.parse(localStorage.getItem('Users')) || [];


// var userData = [
//     {Name:document.getElementById("name").value},
//     {Surname:document.getElementById("surname").value},
//     {Email:document.getElementById("email").value}, 
// ];

// users.push(userData);
// localStorage.setItem('Users', JSON.stringify(users));