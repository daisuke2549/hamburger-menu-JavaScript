'use strict';


{
    const open= document.getElementById('open');
    const overlay = document.querySelector('.overlay');
    const close= document.getElementById('close');

    open.addEventListener('click', () => {
        overlay.classList.add('show');
        open.classList.add('hide');
    });
    close.addEventListener('click', () => {
        overlay.classList.remove('show');
        open.classList.remove('hide');
      });
}




function ave(a,b){
    console.log((a+b)/2);
}

ave(8000, 2000);


console.log("hello world test");