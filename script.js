const portfolio = document.querySelector(".portfolio");
const themeButton = document.querySelector(".theme-button");
const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");

themeButton.addEventListener("click", () => {
  const isDark = portfolio.dataset.theme === "dark";
  portfolio.dataset.theme = isDark ? "light" : "dark";
  themeButton.setAttribute("aria-label", `Switch to ${isDark ? "dark" : "light"} theme`);
});

const closeMenu = () => {
  navLinks.classList.remove("is-open");
  menuButton.classList.remove("is-open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Open navigation menu");
};

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  navLinks.classList.toggle("is-open", !isOpen);
  menuButton.classList.toggle("is-open", !isOpen);
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Open navigation menu" : "Close navigation menu");
});

navLinks.addEventListener("click", (event) => {
  if (event.target.closest("a")) closeMenu();
});

document.querySelector("#year").textContent = new Date().getFullYear();
