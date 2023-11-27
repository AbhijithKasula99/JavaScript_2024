## Values and Variables

```
let country = 'India'
let continent = 'Asia'
let population = 1400000000

console.log(country)
console.log(continent)
console.log(population)
```

## Data Types

```
let country = 'India'
let continent = 'Asia'
let population = 1400000000

let isIsland = 'false'
let language

console.log(typeof country)
console.log(typeof continent)
console.log(typeof population)
console.log(typeof isIsland)
console.log(typeof language)
```

## let, const and var

```
const country = 'India'
const continent = 'Asia'
population = 1400000000

const isIsland = 'false'
const language = 'telugu'

console.log(typeof country)
console.log(typeof continent)
console.log(typeof population)
console.log(typeof isIsland)
console.log(typeof language)

console.log(country)
console.log(continent)
console.log(population)
console.log(isIsland)
console.log(language)
```

## Basic Operators

```
const country = 'India'
const continent = 'Asia'
population = 1400000000

const isIsland = 'false'
const language = 'telugu'

console.log(population/2)
population++
console.log(population)
console.log(population > 6000000)

avgPopulation = 33000000
console.log(population > avgPopulation)


const description = country + ' ' + 'is in' + ' ' + continent + ',' + ' ' + 'and its' + ' ' + population + ' ' + 'people speak' + ' ' + language
console.log(description)
```

## Strings and template literals

```
const country = 'India'
const continent = 'Asia'
population = 1400000000

const isIsland = 'false'
const language = 'telugu'

const description = `${country} is in ${continent}, and its ${population} people speak ${language}`
console.log(description)
```

## Taking Decisions if/else statements

```
const country = 'India'
const continent = 'Asia'
population = 1400000000

const isIsland = 'false'
const language = 'telugu'

const description = `${country} is in ${continent}, and its ${population} people speak ${language}`
console.log(description)

avgPopulation = 33000000

if (population > avgPopulation) {
    console.log('The population of India is greater than the average')
}
else {
    console.log(`The population of India is lesser than the average and it is ${population}`)
}

// Case-2

population = 140

if (population > avgPopulation) {
    console.log('The population of India is greater than the average')
}
else {
    console.log(`The population of India is lesser than the average and it is ${population}`)
}
```

## Type Conversion and Coercion

```
console.log('9' - '5')
console.log('19'-'13'+'17')
console.log('19'-'13'+ 17)
console.log('123'< 57)
console.log(5 + 6 + '4' + 9 - 4 - 2)
```

## Equality Operators

```
const numNeighbors = prompt('How many countries does your country have?')

if (numNeighbors == 1) {
    console.log('Only 1 border')
}
else if (numNeighbors > 1) {
    console.log('More than 1 border')
}
else {
    console.log('No Borders')
}

// Converting to numNeighbors to Number
const numNeighbors = Number(prompt('How many countries does your country have?'))
console.log(typeof numNeighbors)

if (numNeighbors == 1) {
    console.log('Only 1 border')
}
else if (numNeighbors > 1) {
    console.log('More than 1 border')
}
else {
    console.log('No Borders')
}
```

## Logical Operators

```
const country = 'India'
const continent = 'Asia'
population = 1400000000

const isIsland = 'false'
const language = 'telugu'

if (language == 'english' && population < 50000000 && isIsland == 'false') {
    console.log(`You should live in ${country}`)
}
else {
    console.log(`${country} does not meet your criteria :(`)
}
```

## Switch Statement

```
const language = prompt('Enter the Language')
switch(language) {
    case 'chinese':
    case 'mandarin':
        console.log('MOST number of natie speakers!')
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers')
        break;
    case 'english':
        console.log('3rd place')
        break;
    case 'hindi':
        console.log('4th place')
        break;
    case 'arabic':
        console.log('5th most spoken language')
        break;
    default:
        console.log('Great language too!')
}
```

## Ternary Operator

```
const country = 'India'
const continent = 'Asia'
population = 1400000000

const isIsland = 'false'
const language = 'telugu'

console.log(`${country}'s population is ${population > 33000000 ? 'above' : 'below'} average`)
```
