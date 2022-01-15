

//Active class
/*
const links = document.querySelectorAll(".list-item");

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function() {
      let current = document.querySelectorAll(".active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }
*/

//Function for reading the JSON-file
function readTextFile(file, callback) {
  var rawFile = new XMLHttpRequest();
  rawFile.overrideMimeType("application/json");
  rawFile.open("GET", file, true);
  rawFile.onreadystatechange = function() {
      if (rawFile.readyState === 4 && rawFile.status == "200") {
          callback(rawFile.responseText);
      }
  }
  rawFile.send(null);
}

function changeDestination(){
  readTextFile("data.json", function(text){
    var data = JSON.parse(text); //parse JSON
    let destination = document.querySelector(".current-planet");
    let h2 = document.querySelector(".destination-h2");
    let description = document.querySelector(".description");
    let distance = document.querySelector(".distance");
    let travel = document.querySelector(".travel");
    let image = document.querySelector(".image");
    
    for(let i = 0; i < data.destinations.length; i++){
      if (destination.id == data.destinations[i].name.toLowerCase() ){
        let object = data.destinations[i];
        h2.innerHTML = object.name.toUpperCase()
        description.innerHTML = object.description;
        distance.innerHTML = object.distance;
        travel.innerHTML = `<div class="sub-h1">${object.travel}</div>`;
        image.innerHTML = `<img src="${object.images.png}" alt="${object.name}">`
      }
    }
});
}

function changeCrew(){
  readTextFile("data.json", function(text){
    var data = JSON.parse(text); //parse JSON
    let crewMember = document.querySelector(".current-crew");
    let name = document.querySelector(".crew-name");
    let role = document.querySelector(".role");
    let bio = document.querySelector(".bio");
    let image = document.querySelector(".image");
    
    for(let i = 0; i < data.crew.length; i++){
      if (crewMember.id == data.crew[i].name.split(" ")[0].toLowerCase() ){
        let object = data.crew[i];
        name.innerHTML = object.name.toUpperCase();
        role.innerHTML = object.role.toUpperCase();
        bio.innerHTML = object.bio;
        image.innerHTML = `<img src="${object.images.png}" alt="${object.name}">`
      }
    }
  });
}

//Hamburger Menu
const hamburger = document.querySelector(".ham");
const navsub = document.querySelector(".nav-sub");
const body = document.querySelector("body");

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle("change")
    navsub.classList.toggle("nav-change")
    body.classList.toggle("no-scroll")
});

// Destination NAV
const destinations = document.querySelectorAll(".planet-link");
for (let i = 0; i < destinations.length; i++) {
    destinations[i].addEventListener("click", function() {
      let current = document.querySelectorAll(".current-planet");
      current[0].className = current[0].className.replace(" current-planet", "");
      this.className += " current-planet";
      changeDestination();
    });
}

// Crew Slider
const crew = document.querySelectorAll(".crew-link");
for (let i = 0; i < crew.length; i++) {
  crew[i].addEventListener("click", function() {
    let current = document.querySelectorAll(".current-crew");
    current[0].className = current[0].className.replace(" current-crew", "");
    this.className += " current-crew";
    changeCrew();
  });
}

readTextFile("data.json", function(text){
    var data = JSON.parse(text); //parse JSON
});


