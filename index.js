// Neighbors array
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
console.log(neighbors);