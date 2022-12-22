const contato = document.getElementById('contato')
const dialog = document.getElementById('dialog')
const close = document.getElementById('enviar')

contato.addEventListener('click', () => {
    dialog.style.display = 'flex'
})

close.addEventListener('click', () => {
    dialog.style.display = 'none'
})

$(document).ready(function(){
    $('.carousel').owlCarousel({
        loop:true,
        autoplayTimeOut:2000,
        autoplayHoverPauser:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:5,
                nav:false
            }
        }
    });
});

