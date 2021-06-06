let buttons = document.querySelectorAll('.lang_opt')

buttons.forEach(item => { 
    item.addEventListener('click', (e) => {
    buttons.forEach( e => {
         e.classList.remove('active'); 
    });
    item.classList.add('active')
})
})