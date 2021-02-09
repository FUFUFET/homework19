'use strict'

{
    const open = document.getElementById('open');
    const close = document.getElementById('close');
    const madal = document.getElementById('modal');
    const mask = document.getElementById('mask');

    open.addEventListener('click',() => {
        modal.classList.remove('hidden');
        mask.classList.remove('hidden');
    });

    close.addEventListener('click',() => {
        modal.classList.add('hidden');
        mask.classList.add('hidden');
    });

    mask.addEventListener('click',() => {
        // modal.classList.add('hidden');
        // mask.classList.add('hidden');
        close.click();
    });


    const open2 = document.getElementById('open2');
    const close2 = document.getElementById('close2');
    const madal2 = document.getElementById('modal2');
    const mask2 = document.getElementById('mask2');

    open2.addEventListener('click',() => {
        modal2.classList.remove('hidden2');
        mask2.classList.remove('hidden2');
    });

    close2.addEventListener('click',() => {
        modal2.classList.add('hidden2');
        mask2.classList.add('hidden2');
    });

    mask2.addEventListener('click',() => {
        // modal.classList.add('hidden');
        // mask.classList.add('hidden');
        close2.click();
    });

    
}

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