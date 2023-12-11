# Working of Scoping

- If we create a **calcAge()** function and then declare a variable outside later after the function is created. **JavaScript** can use scoping and **Scoping** is a mechanism in JavaScript that allows you to limit the scope of variables and functions. It helps prevent variable conflicts, which can lead to errorless code.

```
'use strict';

function calcAge(birthYear) {
    const age = 2037 - birthYear;
    console.log(firstName);
    return age;

}

const firstName = 'Jonas'
calcAge(1991);
```

- The printAge() function accesses the **age** variable from the parent function because of the scoping feature and executes the function. It is the same for the **birthYear** variable too. But these can't be accessed outside the function.

```
'use strict';

function calcAge(birthYear) {
    const age = 2037 - birthYear;

    function printAge() {
        const output = `you are ${age}, born in ${birthYear}`;
        console.log(output);
    }
    printAge();

    return age;
}

const firstName = 'Jonas'
calcAge(1991);
```

- But the **var** type variables are different, they can be accessed. So we can conclude **var** is function scoped.

```
'use strict';

function calcAge(birthYear) {
    const age = 2037 - birthYear;

    function printAge() {
        const output = `you are ${age}, born in ${birthYear}`;
        console.log(output);

        if (birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true;
            const str = `Oh!, you are a millenial , ${firstName}`
            console.log(str);
        }
        console.log(millenial);
    }
    printAge();

    return age;
}

const firstName = 'Jonas'
calcAge(1991);
```

- If there is a variable available within the function then javaScript doesn't perform scope operation.

```
'use strict';

function calcAge(birthYear) {
    const age = 2037 - birthYear;

    function printAge() {
        const firstName = 'Kasula';
        const output = `you are ${age}, born in ${birthYear}`;
        console.log(output);

        if (birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true;
            const str = `Oh!, you are a millenial , ${firstName}`
            console.log(str);
        }
        console.log(millenial);
    }
    printAge();

    return age;
}

const firstName = 'Jonas'
calcAge(1991);
```
