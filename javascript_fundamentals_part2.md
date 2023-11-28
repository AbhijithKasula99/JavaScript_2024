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
