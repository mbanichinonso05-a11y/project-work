const hamburger = document.getElementById("hamburger");
const nav = document.querySelector(".head nav");

hamburger.addEventListener("click", function () {
    nav.classList.toggle("active");
    if (nav.classList.contains("active")) { hamburger.textContent = "✕"; }
    else { hamburger.textContent = "☰"; }
});


document.querySelectorAll(".head nav a").forEach(function(link) {
    link.addEventListener("click", function() {
        const menu = document.querySelector(".head nav");
        const button = document.querySelector("#hamburger");

        menu.classList.remove("active");
        button.innerHTML = "☰";
    });
});