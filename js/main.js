let buttons = document.querySelectorAll('.lang_opt')

buttons.forEach(item => { 
    item.addEventListener('click', (e) => {
    buttons.forEach( e => {
         e.classList.remove('active'); 
    });
    item.classList.add('active')
})
})

$(document).ready(function() {
    $('.menu-burger__header').click(function(){
        $('.menu-burger__header').toggleClass('open-menu');
        $('.navbar-ul').toggleClass('open-menu');
        $('.btn-nav').toggleClass('open-menu');
        $('.lang').toggleClass('open-menu');
    });
});