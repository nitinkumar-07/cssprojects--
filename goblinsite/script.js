let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = ()=>{
    menu.classList.toggle('bx-x');
    navlist.style.display = 'flex';  
 };

const sr = ScrollReveal ({
    distance : '65px',
    duration: 2600,
    delay: 450,
    reset: true
}); 

sr.reveal('.hero-text',{delay:200,origin:'top'});
sr.reveal('.hero-img',{delay:40,origin:'top'});
sr.reveal('.icons',{delay:450,origin:'top'});