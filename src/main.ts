let age:number = 25;

for(let i:number = 0; i < age; i++) {
    console.log(i);
}

if(age > 18) {
    console.log("You are an adult");
} else {
    console.log("You are a youngster");
}

let score:number = 0;

if(score != 0) {
    console.log("Score is available");
}

if(score) {
    console.log("truthy");
} else {
    console.log("falsy");
}

let username:string = "";

if(username) {
    console.log("Username is available");
}

if(!username) {
    console.log("falsy");
}

let isAdmin:boolean = false;

if(isAdmin) {
    console.log("truthy");
}

function generateTree(n: number) {
    for (let i = 1; i <= n; i++) {
        console.log(' '.repeat(n - i) + '*'.repeat(2 * i - 1));
    }
    let trunkHeight = Math.floor(n);
    let trunkWidth = 1;
    for (let j = 0; j < trunkHeight; j++) {
        console.log(' '.repeat(n - trunkWidth) + '*'.repeat(trunkWidth));
    }
}
generateTree(5);

// Second Typescript Day

console.log('------------- New Day ------------------');
// They do not affect original array
const numArr: number[] = [1, 2, 3, 4, 5];
console.log('Before: ' + numArr);
const doubledNums: number[] = numArr.map( (num: number) => num * 2);
console.log('After: ' + doubledNums);

const words: string[] = ['Open', 'Sasamee'];
console.log('Before: ' + words);
const filteredWords: string[] = words.filter( (word: string) => word.length > 5);
console.log('After: ' + filteredWords);

const sum: number = numArr.reduce((accumulator: number, currentValue: number): number => accumulator + currentValue);
console.log(sum);
console.log(numArr.some( (num: number) => num > 15));

const list = [15, 6, 3213, 9, 0, 12, 8464 , 1, 1264, 481, 186, 1031, 194];
// b - a = descend, a - b = ascend
const sortedList = list.sort((a, b): number => b - a);
console.log(sortedList);
const squaredList = sortedList.map( (num: number) => num * num);
console.log(squaredList);
const removeLowestTwoNumsAndHighestFourNumsFromList = squaredList.slice(4, squaredList.length - 2);
console.log(removeLowestTwoNumsAndHighestFourNumsFromList);
const removeDivisibleByFourFromPrevList = removeLowestTwoNumsAndHighestFourNumsFromList.filter( (num: number) => num % 4 == 0);
console.log(removeDivisibleByFourFromPrevList);
console.log('Ad up all the numbers: ' + removeDivisibleByFourFromPrevList.reduce( (acc, curr) => acc + curr));