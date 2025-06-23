document.addEventListener('DOMContentLoaded',function(){
    var hamburgerButton = document.getElementById('js-hamburger');

    hamburgerButton.addEventListener("click",function(){
        this.classList.toggle('is-active');
    });
});