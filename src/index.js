import LogRocket from "logrocket";
LogRocket.init("otvweo/bizarrehow");

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

console.group("How Bizarre");
console.info("- I am a Front-end Senpai, who strictly follows the W3Code of Bushido!");
console.info("- I know everything back from WEB (without numbers) till the WEB 5 and I will keep counting :o)");
console.groupEnd();
