const links = document.querySelectorAll(".nav a");
const toggle = document.getElementById("menu-toggle");

links.forEach((link) => {
  link.addEventListener("click", () => {
    toggle.checked = false;
  });
});
