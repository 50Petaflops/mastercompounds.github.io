window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) { // Change the number based on when you want the effect to trigger
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
