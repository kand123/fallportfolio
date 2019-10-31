const allPokemon =(async () => {
const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
const myJson = await response.json()
console.log(JSON.stringify(myJson))
})

console.log(allPokemon())