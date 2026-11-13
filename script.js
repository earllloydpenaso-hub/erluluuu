
document.addEventListener("DOMContentLoaded", function () {

    // SCROLL REVEAL ANIMATION
    const revealElements = document.querySelectorAll(
        ".hero-content, .hero-image, .about, .skills, .projects, .contact, .skill-card, .project-card"
    );

    revealElements.forEach((element, index) => {
        element.classList.add("reveal");

        if (
            element.classList.contains("skill-card") ||
            element.classList.contains("project-card")
        ) {
            element.style.transitionDelay = `${(index % 3) * 100}ms`;
        }
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    revealElements.forEach((element) => {
        observer.observe(element);
    });

    // NAVBAR SCROLL EFFECT
    const navbar = document.querySelector(".navbar");

    if (navbar) {
        window.addEventListener("scroll", function () {
            navbar.classList.toggle("scrolled", window.scrollY > 50);
        });
    }

});
