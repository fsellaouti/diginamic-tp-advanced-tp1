const axios = require('axios');
let Planet = require('./planet.js');

const getPlanets = async () => {
    try {
       let response = await axios.get('https://swapi.co/api/planets/')
        let AllPlanets = [];

        response.data.results.forEach(function(p){
            let planet = new Planet(p);
            console.log(`Planet ${planet.name} : Population = ${planet.population}`)
            AllPlanets.push(planet);
        });
    console.log("Total pop : " + Planet.countPlanetsPopulation(AllPlanets));
      
    } catch (error) {
      console.error(error)
    }
}

getPlanets();