$(document).ready(function(){
    $('.owl-one').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
    
    
    
    
    $('.owl-two').owlCarousel({
        loop:true,
        margin:30,
        nav:false, 
        dots:false,
        stagePadding: 150,
        responsive:{
            0:{
                items:1,
                stagePadding: 0,
            },
            800:{
                items:1,
                // stagePadding: 0,
            },
            1000:{
                items:1
            }
        }
    })



    $('.owl-three').owlCarousel({
        loop:true,
        margin:0,
        nav:false, 
        dots:false, 
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3 
            },
            1000:{
                items:5
            }
        }
    })
})




const text = document.querySelector(".text p"); 
text.innerHTML = text.innertText.split('').map(
    (char, i) =>
    `<span style="transform: rotate(${i * 8.3}deg)">${char}</span>`
    ).join("")







// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
// const firebaseConfig = {
//     apiKey: "AIzaSyDvvcPBxhcpvXgCcfNrimAWN0c7n5h2-zc",
//     authDomain: "elements-a60e8.firebaseapp.com",
//     projectId: "elements-a60e8",
//     storageBucket: "elements-a60e8.appspot.com",
//     messagingSenderId: "782506063379",
//     appId: "1:782506063379:web:4e5eec3345a5e15461b1e6" 
// };

// const app = initializeApp(firebaseConfig);

// import{ getDatabase} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js"; 
// const db = getDatabase();

