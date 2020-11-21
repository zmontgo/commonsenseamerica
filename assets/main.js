const header = document.querySelector('.site-header');
const toggler = document.querySelector('.menu-icon');

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
        toggler.classList.add('animate')
        // remove the listener, no longer needed
        toggler.removeEventListener('click', addAnim);
    };

    // listen to mouseover for the container
    toggler.addEventListener('click', addAnim);
})();