module.exports = class Planet {

	constructor({name, population}) {
		this.name = name;
		if (population === "unknown") {
			this.population = 0;
		} else {
			this.population = Number(population);
		}
	}

	static countPlanetsPopulation(array){
		const somme = (accum, planet) => accum + planet.population;
		return array.reduce(somme, 0);
	}
}