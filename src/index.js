import LogRocket from "logrocket";
LogRocket.init("otvweo/personal-github-pages");

const docElm = document.documentElement;
const themeToggleBtn = docElm.querySelector("#theme-toggle");
const darkIcon = themeToggleBtn.querySelector("#dark-icon");
const lightIcon = themeToggleBtn.querySelector("#light-icon");

if (localStorage.getItem("color-theme") === "dark") {
  darkIcon.classList.remove("hidden");
  docElm.classList.remove("light");
  docElm.classList.add("dark");
} else {
  if (
    !("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    darkIcon.classList.remove("hidden");
    docElm.classList.remove("light");
    docElm.classList.add("dark");
    localStorage.setItem("color-theme", "dark");
  } else {
    lightIcon.classList.remove("hidden");
    docElm.classList.remove("dark");
    docElm.classList.add("light");
    localStorage.setItem("color-theme", "light");
  }
}

themeToggleBtn.addEventListener("click", function () {
  darkIcon.classList.toggle("hidden");
  lightIcon.classList.toggle("hidden");

  if (localStorage.getItem("color-theme")) {
    if (localStorage.getItem("color-theme") === "light") {
      docElm.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      docElm.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    }
  } else {
    if (docElm.classList.contains("dark")) {
      docElm.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    } else {
      docElm.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    }
  }
});