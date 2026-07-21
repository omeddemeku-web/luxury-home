// ==========================
// LUXEHOMES JavaScript
// ==========================

// Dark / Light Mode
const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeBtn.textContent = "☀️";
    } else {
        themeBtn.textContent = "🌙";
    }
});

// Header Shadow on Scroll
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
        header.style.boxShadow = "0 8px 25px rgba(0,0,0,.25)";
    } else {
        header.style.boxShadow = "none";
    }
});

// Search Button
const searchBtn = document.querySelector(".search-box button");

if (searchBtn) {
    searchBtn.addEventListener("click", () => {
        alert("🔍 Search feature coming soon!");
    });
}

// Property Buttons
const propertyButtons = document.querySelectorAll(".card a");

propertyButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        e.preventDefault();
        alert("🏡 Property details will be available soon.");
    });
});

// Smooth Fade Animation
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
});

cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "0.6s ease";
    observer.observe(card);
});

console.log("LUXEHOMES Loaded Successfully!");
