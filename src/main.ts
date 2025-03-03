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
