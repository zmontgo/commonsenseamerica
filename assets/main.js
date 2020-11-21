const header = document.querySelector('.site-header');
const toggler = document.querySelector('.menu-icon');
const body = document.getElementById('body');

window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    if (scrollPos > 10) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

;(function(){
    function addAnim() {
        if (toggler.classList.contains('animate') != true) {
            toggler.classList.add('animate');
        }
        
        if (body.style.overflow == "hidden") {body.style.overflow = "visible";}
        else {body.style.overflow = "hidden";}
    };

    // listen to mouseover for the container
    toggler.addEventListener('click', addAnim);
})();