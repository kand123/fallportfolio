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



