## Functions

```
function describeCountry(country, population, capitalCity) {
    console.log(`${country} has ${population} million people and its capital city is ${capitalCity}`)
}

describeCountry('USA',320,'Washington D.C')
```

## Function Declarations and Expressions

```
function percentageOfWorld1(country,population) {
    percentage = (population/7900)* 100
    console.log(`${country} has a ${population} million people, so it's about ${percentage}% of the world population`)
}

China = percentageOfWorld1('China',1441)
India = percentageOfWorld1('India',1552)
USA = percentageOfWorld1('USA',320)

function percentageOfWorld2(country,population) {
    percentage = (population/7900)* 100
    console.log(`${country} has a ${population} million people, so it's about ${percentage}% of the world population`)
}

Brazil = percentageOfWorld2('Brazil',216)
Bangladesh = percentageOfWorld2('Bangladesh',172)
Russia = percentageOfWorld2('Russia',144)
```

## Arrow Function

```
const percentageOfWorld3 = (country, population) => console.log(`${country} has ${population} million people, so it's ${(population/7900) * 100} percentage of world population`);
percentageOfWorld3('China',1441)
```

## Functions Calling Other Functions

```
function percentageOfWorld1(country,population) {
    percentage = (population/7900)* 100
}

function describePopulation(country,population) {
    percentageOfWorld1(country,population)
    console.log(`${country} has a ${population} million people, so it's about ${percentage}% of the world population`)
}

China = percentageOfWorld1('China',1441)
```

## Introduction to Arrays

```
function percentageOfWorld1(population) {
    percentage = (population/7900)* 100
    return percentage
}

// Function is working
// console.log(percentageOfWorld1(1428))

// Population Array
let populations = [1428,1425,339,277];
// console.log(populations)

// Calculating the length of the array
console.log(populations.length === 4);

// Calculating the percentage of population from each element of populations array
let percentages = [percentageOfWorld1(populations[0]),percentageOfWorld1(populations[1]),percentageOfWorld1(populations[2]),percentageOfWorld1(populations[3])]
console.log(percentages)
```

## Basic Array Operations

```
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
```
