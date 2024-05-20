const toggleThemeBtn = document.querySelectorAll("#toggle-theme");
const navmobail = document.querySelector("#nav-mobail");
const closenav = document.querySelector("#close-nav");
const opennav = document.querySelector("#open-nav");
const submenumobail = document.querySelector(".sub-menu");
const overlay = document.querySelector(".overlay");

submenumobail.addEventListener("click", function (e) {
  e.currentTarget.classList.toggle("sub-menu--open");
  document.querySelector("#arrow--active").classList.toggle("rotate-180");
});
closenav.addEventListener("click", Conditionnav);

opennav.addEventListener("click", Conditionnav);

overlay.addEventListener("click", Conditionnav);

function Conditionnav() {
  if (navmobail.classList.contains("-right-64")) {
    navmobail.classList.remove("-right-64");
    navmobail.classList.add("right-0");
    overlay.classList.add("overlay--open");
  } else {
    navmobail.classList.add("-right-64");
    navmobail.classList.remove("right-0");
    overlay.classList.remove("overlay--open");
  }
}

toggleThemeBtn.forEach(function (item) {
  item.addEventListener("click", () => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  });
});

window.addEventListener("load", function () {
  if (localStorage.theme === "dark") {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
  }
});
