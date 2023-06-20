
$(document).ready(function(){
    $('.owl-one').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:false,
        dots:true,
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
        autoplay:true,
        autoplayTimeout:1000,
        autoplayHoverPause:true,
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


const menuBtn = document.querySelector(".menu-bar").addEventListener ("click", ()=>{
    const hidden = document.querySelector(".hidden-menu").style.display = "block"
})

const closeBtn = document.querySelector(".close-btn").addEventListener("click", ()=>{
    const hidden = document.querySelector(".hidden-menu")
    hidden.style.display = "none" 
}) 







        $('.nav-item').click(function () {
            $('.elements div').hide();
            if ($(this).text() == "All") {
                
                $('.elements > div').fadeIn();
                // console.log(div.type);
            }
            else {
                $(`.elements > div[type="${$(this).text().toLowerCase()}"]`).fadeIn();
            }
            // else if ($(this).text() == "Sofas") {
            //     $('.elements > div').fadeIn();
            // }
        })





        $('.elements').on("click", ".basket-btn", function () {
            let result = getCookie('addbasket');
            let addbasketItems = [];
            console.log();
            const currentId = $(this).attr('id')
            if (result != "") {
                addbasketItems = JSON.parse(result)
            }
            
        })
        function getCookie(cname) {
            let name = cname + "=";
            let decodedCookie = decodeURIComponent(document.cookie);
            let ca = decodedCookie.split(';');
            for (let i = 0; i < ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return "";
        }
  
    





