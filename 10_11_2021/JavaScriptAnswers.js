// 1) Write a function that takes a string as an argument and returns a list of all the words inflected by "-ing". Your function should also exclude all the mono-syllabic words ending in "-ing" (e.g. bing, sing, sling, ...). Although these words end in "-ing", the "-ing" is not an inflection affix.

// Examples
// ingExtractor("coming bringing Letting sing") --> ["coming", "bringing", "Letting"]

// ingExtractor("going Ping, king sHrink dOing") --> ["going",, "dOing"]

// ingExtractor("zing went ring, ding wing SINk") --> []

// Notes:
// Mono-syllabic means a word containing just one syllable.

function ingExtractor(a) {
    let string = a;
    
}

// 2) Your task is to create a function that simulates a vending machine.

// Given an amount of money (in cents ¢ to make it simpler) and a productNumber, the vending machine should output the correct product name and give back the correct amount of change.

// The coins used for the change are the following: [500, 200, 100, 50, 20, 10]

// The return value is an object with 2 properties:

// - product: the product name that the user selected.
// - change: an array of coins (can be empty, must be sorted in descending order).

// Examples
// vendingMachine(products, 200, 7) ---> { product: "Crackers", change: [ 50, 20, 10 ] }
// vendingMachine(products, 500, 0) ---> "Enter a valid product number"
// vendingMachine(products, 90, 1) ---> "Not enough money for this product"

// Notes:
// - The products are fixed and you can find them in the Tests tab.
// - If productNumber is invalid (out of range) you should return the string: "Enter a valid product number".
// - If money is not enough to buy a certain product you should return the string: "Not enough money for this product".
// - If there's no change, return an empty array as the change.

