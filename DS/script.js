'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order : function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  }
};

// Destructuring Objects





/* // Destructuring Arrays
const arr = [2,3,4];
const a = arr[0];
const b = arr[1];
const c = arr[2]; // This is the conventional way

const [x,y,z] = arr; // This is how you destructure it
console.log(x,y,z); 
console.log(arr); // The initial array remains the same

// Destructuring elements from restaurant object
const [first, second] = restaurant.starterMenu
console.log(first, second);

// If you want to exclude the second one and print first and third element of an array
const [f, ,t] = restaurant.categories
console.log(f,t); // We skipped Pizzeria

// If you want to switch the elements in the array
// Conventional method 
let [m1, m2] = restaurant.mainMenu
console.log(m1, m2);

const temp = m1;
m1 = m2;
m2 = temp;
console.log(m1, m2); // We can see they are swapped now

// Swapping through destructuring
[m2, m1] = [m1, m2];
console.log(m1, m2); // We swapped it back!

// We just created an order function to place an order, 1 main dish and a starter
console.log(restaurant.order(2,0)); // ordered pizza and garlic bread

// We can destructure it by 
const [starter, mainCourse] = restaurant.order(2,0)
console.log(starter, mainCourse);

// Destructuring nested arrays
const nested = [[1,2,3],[4,5,6],[7,8,9],10];
const [[a1, b1, c1], [d1, e1, f1], [g1, h1, i1], j1] = nested
console.log(a1,b1,c1,d1,e1,f1,g1,h1,i1,j1);

// Working with default values
const [k1=2, l1=2, n1=2] = [2,7];
console.log(k1,l1,n1); */