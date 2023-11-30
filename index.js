/* // Neighbors array
neighbors = ['Pakistan', 'Nepal', 'Bhutan'];
console.log(neighbors)

// Adding Utopia to array
neighbors.push('Utopia');
console.log(neighbors)

// Removing Utopia from the array
neighbors.pop('Utopia')
console.log(neighbors)

// Checking if Germany is in the array
if (neighbors.includes("Germany")) {
    console.log("European Country")
}
else {
    console.log("Probably not a European Country")
}    

// Replacing a country with Sweden in the array
neighbors.splice(0,1,'Sweden')
console.log(neighbors)

// Replacing Sweden with Republic of Sweden
neighbors[neighbors.indexOf('Sweden')] = 'Republic of Sweden'
console.log(neighbors); */

const myCountry = {
    country: 'India',
    capital: 'Delhi',
    language: 'telugu',
    population: 1400,
    neighbors: ['Pakistan','Bangladesh','Nepal','Bhutan'],
    output: function() {
        return(`${this.country} has ${this.population} million ${this.language} speaking people, ${this.neighbors.length} neighboring countries and a capital called ${this.capital}.`)
    } 
}

// Dot Notation
myCountry.population += 200;
console.log(myCountry.population)

// Bracket Notation
myCountry["population"] -= 200;
console.log(myCountry.population)