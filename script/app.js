const toggleThemeBtn = document.querySelector("#toggle-theme");
toggleThemeBtn.addEventListener("click" , () => {
    if (localStorage.theme === "dark"){
        document.documentElement.classList.remove("dark");
        localStorage.theme = "light";
    } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme" , "dark");
    }
})
window.addEventListener('load',function(){

    if(localStorage.theme === "dark"){

        document.documentElement.classList.add("dark");
        localStorage.setItem("theme" , "dark");
    }else{
        document.documentElement.classList.remove("dark");
        localStorage.theme = "light";

    }


})