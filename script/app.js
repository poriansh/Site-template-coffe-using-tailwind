const toggletheme = document.querySelectorAll("#toggle-theme");
const navmobail = document.querySelector(".nav-mobail");
const submenumobail = document.querySelector(".sub-menu");
const overlay = document.querySelector(".overlay");
const cartmobail = document.querySelector(".cart-mobail");

submenumobail.addEventListener("click", function (e) {
  e.currentTarget.classList.toggle("sub-menu--open");
  document.querySelector("#arrow--active").classList.toggle("rotate-180");
});
overlay.addEventListener("click", function (e) {
  document.body.classList.remove('overflow-y-hidden')
  e.currentTarget.classList.remove("overlay--open");
  if (cartmobail.classList.contains("cart-mobail--open")) {
    cartmobail.classList.remove("cart-mobail--open");
  } else {
    navmobail.classList.remove("nav-mobail--open");
  }
});

closenav.addEventListener("click", Conditionnav);
opennav.addEventListener("click", Conditionnav);
function Conditionnav() {
  if (navmobail.classList.contains("nav-mobail--open")) {
    navmobail.classList.remove("nav-mobail--open");
    overlay.classList.remove("overlay--open");
    document.body.classList.remove('overflow-y-hidden')
  } else {
    navmobail.classList.add("nav-mobail--open");
    overlay.classList.add("overlay--open");
    document.body.classList.add('overflow-y-hidden')
  }
}

opencart.addEventListener("click", Conditioncart);
closecart.addEventListener("click", Conditioncart);
function Conditioncart() {
  if (cartmobail.classList.contains("cart-mobail--open")) {
    cartmobail.classList.remove("cart-mobail--open");
    overlay.classList.remove("overlay--open");
    document.body.classList.remove('overflow-y-hidden')

  } else {
    cartmobail.classList.add("cart-mobail--open");
    overlay.classList.add("overlay--open");
    document.body.classList.add('overflow-y-hidden')
  }
}

toggletheme.forEach(function (item) {
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
    // localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    // localStorage.theme = "light";
  }
});
