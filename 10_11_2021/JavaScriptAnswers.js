// 1) Write a function that takes a string as an argument and returns a list of all the 
//      words inflected by "-ing". Your function should also exclude all the mono-syllabic 
//      words ending in "-ing" (e.g. bing, sing, sling, ...). Although these words end 
//      in "-ing", the "-ing" is not an inflection affix.

// Examples
// ingExtractor("coming bringing Letting sing") --> ["coming", "bringing", "Letting"]

// ingExtractor("going Ping, king sHrink dOing") --> ["going",, "dOing"]

// ingExtractor("zing went ring, ding wing SINk") --> []

// Notes:
// Mono-syllabic means a word containing just one syllable.

function ingExtractor(a) {
    let string = a;
    const ing = "ing";
    const str = string.split(" ");
    let result = [];
    for(let s of str){
        if(s.toLowerCase().endsWith(ing)) {
            let front = s.substring(0,s.length-3).toLowerCase();
            if(front.contains("a")) {
                result.push(s);
                continue;
            }
            if(front.contains("e")) {
                result.push(s);
                continue;
            }
            if(front.contains("i")) {
                result.push(s);
                continue;
            }
            if(front.contains("o")) {
                result.push(s);
                continue;
            }
            if(front.contains("u")) {
                result.push(s);
                continue;
            }
            if(front.contains("y")) {
                result.push(s);
                continue;
            }
        }
    }
    return result;
}

// 2) Your task is to create a function that simulates a vending machine.

// Given an amount of money (in cents ¢ to make it simpler) and a productNumber, 
// the vending machine should output the correct product name and give back 
// the correct amount of change.

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
// - If productNumber is invalid (out of range) you should return the 
//      string: "Enter a valid product number".
// - If money is not enough to buy a certain product you should return the 
//      string: "Not enough money for this product".
// - If there's no change, return an empty array as the change.

function vendingMachine(products, money, productNumber){
    let coins = [500, 200, 100, 50, 20, 10];
    let product;
    for(let p of products){
        if(p.productNumber === productNumber){
            product = p;
            break;
        }
    }
    if(product == undefined){
        return "Enter a valid product number"
    }
    if (product.cost > money){
        return "Not enough money for this product";
    }
    
    let input = money;
    let change = [];
    while(input > 0){
        if(input >= 500){
            change.push(500);
            input -= 500
            continue;
        }
        if(input >= 200){
            change.push(200)
            input -= 200
            continue
        }
        if(input >= 100){
            change.push(100)
            input -= 100
            continue;
        }
        if(input >= 50){
            change.push(50)
            input -= 50
            continue;
        }
        if(input >= 20){
            change.push(20)
            input -= 20
            continue;
        }
        if(input >= 10){
            change.push(10)
            input -= 10
            continue;
        }
        else{
            change.push(input)
            input = 0
        }
    }
}

let products = [
    {
        productNumber:1,
        cost:200
    },
    {
        productNumber:2,
        cost:150
    }
]