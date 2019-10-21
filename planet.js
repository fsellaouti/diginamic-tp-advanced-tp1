class Planet {

	constructor({name, population}) {
		this.name = name;
		this.population = population;
	}

	static countPlanetsPopulation(array){
		const somme = (planet1, planet2) => planet1.population + planet2.population;
		return array.reduce(somme);
	}
}