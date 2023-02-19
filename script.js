//ham menu
const ham = document.querySelector('.hamburger');
ham.addEventListener('click',function(){
    const navList = document.querySelector('.nav-list');
    navList.classList.toggle('collapse');
})