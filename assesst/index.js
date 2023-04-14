let ResNav=document.querySelector('.Responsive-Nav'),
BarNav=document.querySelector('#switch-nav'),
ScrollTop = document.querySelector('.scrollicon'),
CountSec = document.querySelector('.counter'),
CountItems = document.querySelectorAll('.counter .container .timer');
;

BarNav.onclick=()=>{
    ResNav.classList.toggle('active')
}
window.onscroll = function(){
    if (scrollY >= 500){
        ScrollTop.style.display="flex";
    }else{
        ScrollTop.style.display="none";
    }



}
ScrollTop.onclick = ()=>{
window.scrollTo({
    top:0
})
}
