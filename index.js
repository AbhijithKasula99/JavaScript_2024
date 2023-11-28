function percentageOfWorld1(country,population) {
    percentage = (population/7900)* 100
}

function describePopulation(country,population) {
    percentageOfWorld1(country,population)
    console.log(`${country} has a ${population} million people, so it's about ${percentage}% of the world population`)
}

China = describePopulation('China',1441)