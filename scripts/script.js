//Hamburger Menu
const hamburger = document.querySelector(".ham");
const navsub = document.querySelector(".nav-sub");
const body = document.querySelector("body");
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle("change")
    navsub.classList.toggle("nav-change")
    body.classList.toggle("no-scroll")
});

//Active class
const links = document.querySelectorAll(".list-item");

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function() {
      let current = document.querySelectorAll(".active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }
