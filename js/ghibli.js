/*const response = await fetch('https://ghibliapi.herokuapp.com/films/');
const myJson = await response.json();
console.log(JSON.stringify(myJson));*/

//something to start with?

/*const url = 'https://ghibliapi.herokuapp.com/films/';
function fetchData(){
    fetch(url).then(function(rep){
        return rep.json()
    }).then(function(data){
        console.log(data);
    })
}*/

async function getAPIData(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data[0];
    } catch (error) {
      console.error(error);
    }
  }
  
 const theData = getAPIData("https://ghibliapi.herokuapp.com/films/").then(data => {
    for (const ghibli of data.results) {
      getAPIData(ghibli.url).then(ghiblidata => {
        console.log(ghiblidata);
      })
    }
  })