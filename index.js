window.addEventListener('scroll',function(){
    var nav =this.document.querySelector('nav');
    nav.classList.toggle('bajar',window.scrollY>0);
});