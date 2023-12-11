# Hoisting and TDZ

- The javaScript execution context contains three variables

  - Variable Environment
  - Scope Chain
  - `this` keyword (the current object)

### Variable Hoisting

```
console.log(me);
console.log(job);
console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;
```

- They don't work because they all go into the TDZ.

### Functions Hoisting

```
console.log(addDec(2,3));

function addDec(a,b) {
    return a + b;
}
```

- This will work.

```
console.log(addExp(2,3));

const addExp = function addDec(a,b) {
    return a + b;
}
```

- This won't work because **addExp** is a variable that has a function inside. We are calling that variable so it will throw an error.

- In hoisting **var** type of variables are usually undefined, be careful while dealing with them.

```
console.log(numProducts);
var numProducts = 10;

function deleteShoppingCart() {
    console.log('All products deleted');
}
```

- What is the conclusion of all this?

- Well, as a first step, as I told you many times just don't use var to declare variables. Use const most of the time to declare variables and let, if you really need to change the variable later.

- Also in order to write clean code, you should declare your variables at the top of each scope. That will just make your code at least look a little bit better.

- Finally, always declare all your functions first and use them only after the declaration. And this applies to all types of functions, even function declarations, which are hoisted.

- So you could use function declarations before you declare them, but still just don't do that it's just not clean. Okay, so what I just told you are the best practices,
