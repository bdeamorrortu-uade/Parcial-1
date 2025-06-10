function setTheme(isDark) {
  const html = document.documentElement;
  const themeIcon = document.querySelector(".theme-toggle i");

  if (isDark) {
    html.classList.add("dark");
    themeIcon.className = "fas fa-sun";
    themeIcon.title = "Cambiar a modo claro";
  } else {
    html.classList.remove("dark");
    themeIcon.className = "fas fa-moon";
    themeIcon.title = "Cambiar a modo oscuro";
  }
}

function toggleTheme() {
  const isDark = document.documentElement.classList.contains("dark");
  setTheme(!isDark);
  localStorage.setItem("theme", !isDark ? "dark" : "light");
}

function loadTheme() {
  const savedTheme = localStorage.getItem("theme");
  setTheme(savedTheme === "dark");
}

document.addEventListener("DOMContentLoaded", function () {
  const themeButton = document.querySelector(".theme-toggle");
  if (themeButton) {
    themeButton.addEventListener("click", toggleTheme);
    loadTheme();
  }
});
