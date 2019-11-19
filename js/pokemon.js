async function getAPIData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

const theData = getAPIData("https://pokeapi.co/api/v2/pokemon?limit=25").then(
  data => {
    for (const pokemon of data.results) {
      getAPIData(pokemon.url).then(pokedata => {
        populateDOM(pokedata);
      });
    }
  }
);

let mainArea = document.querySelector("main");

function populateDOM(single_pokemon) {
  let pokeScene = document.createElement("div");
  let pokeCard = document.createElement("div");
  let pokeFront = document.createElement("div");
  let pokeBack = document.createElement("div");

  let name = document.createElement("p");
  let pic = document.createElement("img");

  pic.setAttribute("class", "picDivs");

  fillCardBack(pokeBack, single_pokemon);

  pokeScene.setAttribute("class", "scene");
  pokeCard.setAttribute("class", "card");
  pokeFront.setAttribute("class", "card__face card__face--front");

  pokeBack.setAttribute("class", "card__face card__face--back");
  pic.setAttribute("class", "picDivs");

  let pokeNum = getPokeNumber(single_pokemon.id);
  pokeFront.appendChild(name);
  name.textContent = single_pokemon.name;
  console.log(single_pokemon.types[0].type.name);

  pic.src = `../assets/images/${pokeNum}.png`;
  pokeFront.appendChild(pic);
  pokeFront.appendChild(name);

  pokeCard.appendChild(pokeFront);
  pokeCard.appendChild(pokeBack);
  pokeScene.appendChild(pokeCard);

  mainArea.appendChild(pokeScene);

  pokeCard.addEventListener("mouseover", function() {
    pokeCard.classList.toggle("is-flipped");
  });
  pokeCard.addEventListener("mouseout", function() {
    pokeCard.classList.toggle("is-flipped");
  });
}

function fillCardBack(pokeBack, data) {
  pokeBack.setAttribute("class", "card__face card__face--back");
  let pokeOrder = document.createElement("p");
  let pokeHP = document.createElement("h5");
  pokeOrder.textContent = `${data.types[0].type.name}`
  //pokeHP.textContent = `${data.types[0].stats.name}`
  pokeBack.appendChild(pokeOrder);
  pokeBack.appendChild(pokeHP);
}

function getPokeNumber(id) {
  if (id < 10) return `00${id}`;
  if (id > 9 && id < 100) {
    return `0${id}`;
  } else return id;
}
