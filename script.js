function hamburger(){
    let menu = document.getElementById('menu');
    let close = document.getElementById('close');
    let cont = document.querySelector('.nav-bar');
    menu.addEventListener('click', function(){
        menu.style.opacity = 0;
        close.style.opacity = 30;
        cont.style.opacity = 30;
    })

    close.addEventListener('click', function(){
        cont.style.opacity = 0;
        menu.style.opacity = 30;
        close.style.opacity = 0;
    })
    cont.addEventListener('click', function(){
        cont.style.opacity = 0;
        close.style.opacity = 0;
        menu.style.opacity = 30;
        
    })
}
hamburger();