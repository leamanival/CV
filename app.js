const nav = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if(window.scrollY > 600){
        nav.classList.add('scroll');
    }
    else{
        nav.classList.remove('scroll')
    }
});

const header = document.querySelector('.icone-header');

window.addEventListener('scroll', () => {
    if(window.scrollY > 600){
        header.classList.add('dl-header');
    }
    else{
        header.classList.remove('dl-header')
    }
});