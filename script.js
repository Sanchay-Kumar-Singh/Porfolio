var typed=new Typed(".auto-type",{
    strings:["Sanchay Kumar Singh","Full Stack Developer"],
    typeSpeed:50,
    backSpeed:80,
    loop:true
})

let header=document.querySelector('header');
let menu=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

window.addEventListener('scroll',()=>{
    header.classList.toggle('shadow',window.scrollY>0);
});
menu.onclick=()=>{
    navbar.classList.toggle('active');
}
window.onscroll=()=>{
    navbar.classList.remove('active');
}

    let darkmode=document.querySelector('#darkmode');
    darkmode.onclick=()=>{
        if(darkmode.classList.contains('bx-moon')){
            darkmode.classList.replace('bx-moon','bx-sun');
            document.body.classList.add('active');
        }else{
            darkmode.classList.replace('bx-sun','bx-moon');
            document.body.classList.remove('active');
        }
    }
    AOS.init();
