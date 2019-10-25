import { people } from "../assets/people.js";

let mainAreacharacters = document.querySelector("main");

people.forEach(function(person) {
  let personDiv = document.createElement("div");
  let name = document.createElement("h1");
  let gender = document.createElement("h3");
  let pic = document.createElement("img");

  personDiv.appendChild(name);
  personDiv.appendChild(gender);
  personDiv.appendChild(pic);

  let charNum = getCharNumber(person.url);

  name.textContent = person.name;
  //gender.textContent = person.gender
  pic.src = `https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg`;

  mainAreacharacters.appendChild(personDiv);
});

function getCharNumber(charURL) {
  let end = charURL.lastIndexOf("/");
  let charID = charURL.substring(end - 2, end);
  if (charID.indexOf("/") !== -1) {
    return charID.slice(1, 2);
  } else {
    return charID;
  }
}

const allDivs = Array.from(document.querySelectorAll("div"));
const mainHeader = document.querySelector("header");

const maleCharacters = people.filter(person => person.gender === "male");
const femaleCharacters = people.filter(person => person.gender === "female");
const otherCharacters = people.filter(person => person.gender !== "male" && person.gender !== "female");

let maleButton = document.createElement("button");
maleButton.textContent = "Male Characters";
maleButton.addEventListener("click", () => {
  femaleCharacters.forEach(elt => {
    let matchedDiv = allDivs.filter(element => {
      return element.firstChild.textContent === elt.name;
    });
    console.log(matchedDiv);
    matchedDiv[0].setAttribute("style", "display: none;");
  });
  otherCharacters.forEach(elt => {
    let matchedDiv = allDivs.filter(element => {
      return element.firstChild.textContent === elt.name;
    });
    matchedDiv[0].setAttribute("style", "display: none;");
  });
});

mainHeader.appendChild(maleButton);

let femaleButton = document.createElement("button")
femaleButton.textContent = "Female Characters"
femaleButton.addEventListener("click", () => {
  maleCharacters.forEach(elt => {
    let matchedDiv = allDivs.filter(element => {
      return element.firstChild.textContent === elt.name;
    });
    matchedDiv[0].setAttribute("style", "display: none;");
  });
  otherCharacters.forEach(elt => {
    let matchedDiv = allDivs.filter(element => {
      return element.firstChild.textContent === elt.name;
    });
    matchedDiv[0].setAttribute("style", "display: none;");
    
    
    
  });
});
mainHeader.appendChild(femaleButton);


let otherButton = document.createElement("button")
otherButton.textContent = "Other"
otherButton.addEventListener("click", () => {
  femaleCharacters.forEach(elt => {
    let matchedDiv = allDivs.filter(element => {
      return element.firstChild.textContent === elt.name;
    });
    matchedDiv[0].setAttribute("style", "display: none;");
  });
  maleCharacters.forEach(elt => {
    let matchedDiv = allDivs.filter(element => {
      return element.firstChild.textContent === elt.name;
    });
    matchedDiv[0].setAttribute("style", "display: none;");
  });
});
mainHeader.appendChild(otherButton);


