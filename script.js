const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
  menuBtn.textContent = nav.classList.contains("open") ? "×" : "☰";
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuBtn.textContent = "☰";
  });
});

const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
  header.style.boxShadow = window.scrollY > 30
    ? "0 8px 30px rgba(0,0,0,.08)"
    : "none";
});
