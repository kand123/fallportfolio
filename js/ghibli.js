/*const response = await fetch('http://example.com/movies.json');
const myJson = await response.json();
console.log(JSON.stringify(myJson));*/

//something to start with?

const url = 'https://ghibliapi.herokuapp.com/films/';
function fetchData(){
    fetch(url).then(function(rep){
        return rep.json()
    }).then(function(data){
        console.log(data);
    })
}
