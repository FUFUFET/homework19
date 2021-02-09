'use strict' ;

{
    const open= document.getElementById('open1');
    const overlay = document.querySelector('.overlay1');
    const close = document.getElementById('close1');

open.addEventListener('click' , () => {
    overlay.classList.add('show');
    open.classList.add('hide');
})
    

    close.addEventListener('click' , () => {
        overlay.classList.remove('show');
        open.classList.remove('hide');
  
})
}