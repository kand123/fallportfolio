
async function getAPIData(url){
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
    }
}

const theData = getAPIData('https://pokeapi.co/api/v2/pokemon/')
.then(data => {
    
    for (const pokemon of data.results){
        
        getAPIData(pokemon.url)
    .then(pokedata => {
        console.log(pokedata)
    })
}
})
console.log(theData)


let mainArea = document.querySelector('main')

function populateDOM(single_pokemon) {
    let pokeDiv = document.createElement('div')
    let name = document.createElement('h3')
    let pic = document.createElement('img')

pokeDiv.setAttribute('class', 'charDivs')
pic.setAttribute('class', 'picDivs')

let pokeNum = getPokeNumber(single_pokemon.id)

name.textContent = single_pokemon.name

pic.src = `../assets/images/${pokeNum}.png`


pokeDiv.appendChild(pic)
pokeDiv.appendChild(name)
mainArea.appendChild(pokeDiv)
}


function getPokeNumber (id) {
  if(id < 10) return `00${id}`
  if(id > 9 && id < 100) {
     return `0${id}`
   } else return id
}

/*const allPokemon =(async () => {
const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
const myJson = await response.json()
console.log(JSON.stringify(myJson))
})

console.log(allPokemon())*/

//for of vs for each vs for in
//copy async code to code journal

//fetch makes a get request



//api calls and flip