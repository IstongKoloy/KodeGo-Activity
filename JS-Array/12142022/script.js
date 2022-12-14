// Javascript Core Objects

// String
const fullName = "Glenn Andaleon";

// length property
// console.log(fullName.length);

const sentence = "The lazy quick brown fox jumps over the lazy dog";
// split() method, returns an array
// split(separator, limit)
const sentenceSplit = sentence.split(" ", 3); //split every spaces
// console.log(sentenceSplit);
const sentenceChar = sentence.split(""); //split every letter
// console.log(sentenceChar);
const sentenceCopy = sentence.split(); //return the string inside array
// console.log(sentenceCopy);

// slice() method
// slice(indexStart, indexEnd)
const slice1 = sentence.slice(31); //slice with indexStart param only, returns from indexStart up to end of string
// console.log(slice1);
const slice2 = sentence.slice(4, 19); //slice with indexStart and indexEnd
// console.log(slice2);
const slice3 = sentence.slice(-5); //start counting from end of stringObj
// console.log(slice3);

// indexOf method
// indexOf(substring, position)
const index1 = sentence.indexOf("jumps");
// console.log(index1);
const lastIndex = sentence.lastIndexOf("the");
// console.log(lastIndex)

// search method
const searchIndex = sentence.search("lazy");
// console.log(searchIndex)

// substring
const substring1 = sentence.substring(31);
// console.log(substring1)

// replace method
// replace() => replace the first string
// replaceAll() => replace all the string
const replaced = sentence.replace("lazy", "cute");
// console.log(replaced)

const newString = "    This is a new string     ";
const trimStr = newString.trim();
// console.log(trimStr)

// Numbers
const myNum = 5.1995;
// console.log(myNum)
// // toString method
// console.log( myNum.toString() )
// // toFixed => decimals
// console.log(myNum.toFixed(2))

// Spread syntax (...variableName) for arrays only
// console.log( Math.min(...numbers));
// console.log( Math.max(...numbers));
const numbers = [100, 25, 26, 102, 25.5, 30];
let mySort = numbers.sort(
    (a, b) => {
        return a - b;
    }
);
console.log(mySort)
console.log(mySort[numbers.length - 2]);

/**
    My Solution
    sort number
    count array length then subtract by 2

*/