document.addEventListener('DOMContentLoaded', function () {

    // Typed.js
    new Typed('#typed-output', {
        strings: [
            "Web Development",
            "Data Visualization",
            "Machine Learning",
            "Remote Sensing",
            "Geospatial Analysis"
        ],
        typeSpeed: 50,
        backSpeed: 25,
        backDelay: 1000,
        startDelay: 500,
        loop: true
    });

    // Navbar scroll effect
    var header = document.querySelector('.header');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 60) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Scroll reveal
    var revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(function (el) {
        revealObserver.observe(el);
    });

});
