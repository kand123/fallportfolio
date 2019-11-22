//created an object to store title and page description. just because.

const pageData = {
  title: 'FUN!',
  description: "This is my Pokemon page. I will tell you more about it."
};
const pageTitle = document.querySelector("#page__title");
pageTitle.textContent = pageData.title;
const pageDescription = document.querySelector("#page__description");
pageDescription.textContent = pageData.description;


//button for new pokemon

document.querySelector("#pokeButton").addEventListener("click", () => {
  let pokeId = prompt("Provide the Pokemon ID of the Pokemon you want to add:");
  let pokeIdNum = parseInt(pokeId, 10);
  if (pokeIdNum > 807) {
    alert("That Pokemon ID does not exist! Please enter a different one.");
    return;
  } else {
    getAPIData(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
      .then(result => {
        populateDOM(result);
      })
      .catch(error => console.log(error));
  }
});


//async fetch
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
  pokeFront.setAttribute(
    "class",
    `card__face card__face--front ${
      single_pokemon.types.filter(type => type.slot == 1)[0].type.name
    }`
  );

  pokeBack.setAttribute("class", "card__face card__face--back");
  pic.setAttribute("class", "picDivs");

  let pokeNum = getPokeNumber(single_pokemon.id);
  pokeFront.appendChild(name);
  name.textContent = single_pokemon.name;
  console.log(single_pokemon.types[0].type.name);

  //pic.src = `../assets/images/${pokeNum}.png`;
  pic.src = `https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/${pokeNum}.png`;
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
  let pokeAb = document.createElement('p')
  let pokeAbilities = document.createElement("ul");
  pokeOrder.textContent = `type: ${data.types.map(t => t.type.name).join(', ')}`;

  pokeHP.textContent = `HP: ${data.stats[5].base_stat}`;
  pokeAb.textContent = 'Abilities:'
  pokeAbilities.innerHTML = data.abilities
    .map(a => a.ability.name)
    .reduce(
      (accumulator, currentValue) =>
        (accumulator += `<li class="ability">${currentValue}</li>`),
      ""
    );
  
  pokeBack.appendChild(pokeOrder);
  pokeBack.appendChild(pokeHP);
  pokeBack.appendChild(pokeAb);
  pokeBack.appendChild(pokeAbilities);
  
}

function getPokeNumber(id) {
  if (id < 10) return `00${id}`;
  if (id > 9 && id < 100) {
    return `0${id}`;
  } else return id;
}
