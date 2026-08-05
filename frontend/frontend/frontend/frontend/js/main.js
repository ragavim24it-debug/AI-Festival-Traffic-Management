// ===============================
// AI Festival Traffic Management
// main.js
// ===============================

// Animated Counter
function animateCounter(id, start, end, duration) {
    let current = start;
    const element = document.getElementById(id);
    const increment = (end - start) / (duration / 20);

    const timer = setInterval(() => {
        current += increment;

        if (current >= end) {
            current = end;
            clearInterval(timer);
        }

        element.textContent = Math.floor(current);
    }, 20);
}

window.onload = function () {

    animateCounter("vehicleCount", 0, 245, 2000);
    animateCounter("roadCount", 0, 18, 1800);
    animateCounter("parkingCount", 0, 120, 2000);
    animateCounter("emergencyCount", 0, 2, 1500);

};


// Navbar Shadow on Scroll

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.style.background = "#0b1220";
        navbar.style.boxShadow = "0 6px 20px rgba(0,0,0,.3)";
    }
    else {
        navbar.style.background = "#0f172a";
        navbar.style.boxShadow = "none";
    }

});


// Button Hover Animation

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {
        button.style.transform = "scale(1.05)";
    });

    button.addEventListener("mouseleave", () => {
        button.style.transform = "scale(1)";
    });

});


// Fade-in Cards

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0px)";

        }

    });

});

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "0.8s";

    observer.observe(card);

});

console.log("AI Festival Traffic Management Loaded Successfully");
