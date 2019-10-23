import { films } from '../assets/films.js'



console.log(films[0].opening_crawl)

let mainArea = document.querySelector('main')

films.forEach(function(film) {
let filmDiv = document.createElement('div')
let title = document.createElement('h1')
let crawl = document.createElement('p')


filmDiv.appendChild(title)
filmDiv.appendChild(crawl)

title.innerText = film.title
crawl.innerText = film.opening_crawl

mainArea.appendChild(filmDiv)
})




/*people.forEach(function(person){
    let personDiv = document.createElement('div')
    let name = document.createElement('h1')
    let gender = document.createElement('h3')
    let pic = document.createElement('img')

    personDiv.appendChild(name)
    personDiv.appendChild(gender)
    personDiv.appendChild(pic)

    let charNum = getCharNumber(person.url)

    name.textContent = person.name
    gender.textContent = person.gender
    pic.src = `https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg`

    mainArea.appendChild(personDiv)
})



function getCharNumber(charURL) {
    let end = charURL.lastIndexOf('/')
    let charID = charURL.substring(end -2, end)
    if(charID.indexOf('/') !== -1 ) {
        return charID.slice(1,2)
    } else {
        return charID
    }
}

let mainHeader = document.querySelector('header')
let maleButton = document.createElement('button')
let femaleButton = document.createElement('button')

mainHeader.appendChild(maleButton)
mainHeader.appendChild(femaleButton)

maleButton.textContent = "Male Characters"
femaleButton.textContent = "Female Characters"

maleButton.addEventListener('click', () => {
    maleCharacters.forEach(elt => {
        let matchedDiv = allDiv.forEach(element => )
        elt.setAttribute("style", "visibility: visible;");
    })
    femaleCharacters.forEach(elt => {
        elt.setAttribute("style", "visibility: hidden;");
    })
})
*/

