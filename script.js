// Menu mobile
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");

function setMenu(open) {
  nav.classList.toggle("open", open);
  menuBtn.setAttribute("aria-expanded", String(open));
  menuBtn.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
  menuBtn.textContent = open ? "×" : "☰";
}
menuBtn.addEventListener("click", () => setMenu(!nav.classList.contains("open")));
document.querySelectorAll(".nav a").forEach(link => link.addEventListener("click", () => setMenu(false)));
document.addEventListener("keydown", e => {
  if (e.key === "Escape" && nav.classList.contains("open")) { setMenu(false); menuBtn.focus(); }
});

// Ombre de l'en-tête au défilement
const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
  header.style.boxShadow = window.scrollY > 30 ? "0 8px 30px rgba(0,0,0,.08)" : "none";
});

// Onglets du menu (clavier : flèches, Début, Fin)
const tabs = Array.from(document.querySelectorAll(".tab"));
const panels = document.querySelectorAll(".panel");
function selectTab(tab, focus) {
  tabs.forEach(t => {
    const on = t === tab;
    t.classList.toggle("active", on);
    t.setAttribute("aria-selected", String(on));
    t.tabIndex = on ? 0 : -1;
  });
  panels.forEach(p => p.classList.toggle("active", p.id === tab.dataset.tab));
  if (focus) tab.focus();
}
tabs.forEach((tab, i) => {
  tab.addEventListener("click", () => selectTab(tab, false));
  tab.addEventListener("keydown", e => {
    let n = null;
    if (e.key === "ArrowRight") n = tabs[(i + 1) % tabs.length];
    else if (e.key === "ArrowLeft") n = tabs[(i - 1 + tabs.length) % tabs.length];
    else if (e.key === "Home") n = tabs[0];
    else if (e.key === "End") n = tabs[tabs.length - 1];
    if (n) { e.preventDefault(); selectTab(n, true); }
  });
});
