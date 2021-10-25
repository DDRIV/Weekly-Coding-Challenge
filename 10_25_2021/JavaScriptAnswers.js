// 1) This is based on Helen Yu's Making a Box challenge. 
        // This challenge is the same execpt that instead of an array of strings, your function should output a matrix of characters.

// Examples
// charBox(1) --> [
// ["#"]
// ]

// charBox(4) --> [
// ["#", "#", "#", "#"],
// ["#", " ", " ", "#"],
// ["#", " ", " ", "#"],
// ["#", "#", "#", "#"]
// ]

// charBox(2) --> [
// ["#", "#"],
// ["#", "#"]
// ]
// Notes
// As an added bonus, try making charBox(0) output [[]] and make any strings, non-integers, and negative numbers output -1.

function charBox(a){
    if(a === 0){
        return [[]]
    }
    if(a !== parseInt(a, 10) || a < 0){
        return -1
    }
    let index = a-1;
    let outside = [];
    let inside = [];
    let result = [];
    for(let i = 0; i <= index; i++){
        if(i === 0){
            inside.push("#")
            result.push(outside)
        } else if(i === index){
            inside.push("#")
            result.push(outside)
        } else{
            inside.push(" ")
            result.push(inside)
        }
        outside.push("#")
    }
    return result
}


console.log(charBox(0))
console.log(charBox(-1))
console.log(charBox("3"))
console.log(charBox(3.2))
console.log(charBox(1))
console.log(charBox(2))
console.log(charBox(3))
console.log(charBox(4))
console.log(charBox(5))

// 2) Write a function that retrieves the top 3 longest words of a newspaper headline and transforms them into hashtags. 
        // If multiple words tie for the same length, retrieve the word that occurs first.

// Examples
// getHashTags("How the Avocado Became the Fruit of the Global Trade")
// --> ["#avocado", "#became", "#global"]

// getHashTags("Why You Will Probably Pay More for Your Christmas Tree This Year")
// --> ["#christmas", "#probably", "#will"]

// getHashTags("Hey Parents, Surprise, Fruit Juice Is Not Fruit")
// --> ["#surprise", "#parents", "#fruit"]

// getHashTags("Visualizing Science")
// --> ["#visualizing", "#science"]

// Notes:
// If the title is less than 3 words, just order the words in the title by length in descending order (see example #4).

// Punctuation does not count towards a word's length.

function getHashTags(a){
    let words = a.match(/\w+/g);
    let result = []
    for(let i = 0; i < 3; i++){
        if(words.length === 0){
            break;
        }
        let length = 0
        let potential = ""
        for(let word of words){
            if(word.length > length){
                length = word.length
                potential = word
            }
        }
        result.push(`#${potential.toLowerCase()}`)
        words.splice(words.indexOf(potential),1)
    }
    return result
}

console.log(getHashTags("How the Avocado Became the Fruit of the Global Trade"))
console.log(getHashTags("Why You Will Probably Pay More for Your Christmas Tree This Year"))
console.log(getHashTags("Visualizing Science"))