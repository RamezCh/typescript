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
console.log('Add up all the numbers: ' + removeDivisibleByFourFromPrevList.reduce( (acc, curr) => acc + curr));

// Third Task

console.log('--------------------- New Task New Me -------------------------');

type Grade = 1 | 2 | 3 | 4 | 5 | 6 | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | undefined;

type Student = {
    firstName: string;
    lastName: string;
    age: number;
    grades: Grade[];
}

const printStudent = (student: Student) => {
    const nameHeader = `${student.firstName} ${student.lastName} (${student.age})`;
    console.log(nameHeader);
    console.log("=".repeat(nameHeader.length));
    console.log("Grades: " + student.grades.map(g => g === undefined ? '*' : g).join(", "));
};

const student: Student = {
    firstName: "Anton",
    lastName: "Meier",
    age: 17,
    grades: [1, 4, 3, 1, 3, 2, 1, 2],
};

printStudent(student);

const students: Student[] = [
    { firstName: "Anton", lastName: "Meier", age: 17, grades: ["A", 2, undefined, 3, 1, "B", undefined, 5] },
    { firstName: "Berta", lastName: "Müller", age: 17, grades: ["A", undefined, 1] },
    { firstName: "Cäsar", lastName: "Schmidt", age: 17, grades: ["A", 1, undefined, 3, 2, 4, 5] },
];

const printAllStudents = (students: Student[]) => {
    students.forEach(printStudent);
};

printAllStudents(students);

// Bonus: Assign grades to subjects
type SubjectGrades = {
    [subject: string]: Grade[];
};

type StudentWithSubjects = {
    firstName: string;
    lastName: string;
    age: number;
    subjects: SubjectGrades;
};

const studentWithSubjects: StudentWithSubjects = {
    firstName: "Florian",
    lastName: "Weber",
    age: 14,
    subjects: {
        Sport: ["A", 1, undefined],
        Kunst: [3, 2, 4, 5],
        Mathe: [1, 2, "A"],
    }
};

const printStudentWithSubjects = (student: StudentWithSubjects) => {
    const nameHeader = `${student.firstName} ${student.lastName} (${student.age})`;
    console.log(nameHeader);
    console.log("=".repeat(nameHeader.length));
    console.log("\nNoten:");
    for (const [subject, grades] of Object.entries(student.subjects)) {
        console.log(`${subject}: ${grades.map(g => g === undefined ? '*' : g).join(", ")}`);
    }
};

printStudentWithSubjects(studentWithSubjects);

// Bonus: Calculate average grade
const calculateAverage = (grades: Grade[]): number => {
    const validGrades = grades.filter(g => typeof g === 'number') as number[];
    return validGrades.length ? validGrades.reduce((a, b) => a + b, 0) / validGrades.length : 0;
};

const printAverageGrades = (students: Student[]) => {
    students.forEach(student => {
        console.log(`${student.firstName} ${student.lastName} (Avg Grade: ${calculateAverage(student.grades).toFixed(2)})`);
    });
};

printAverageGrades(students);

// Bonus: Rick and Morty API processing
const rickMortyCharacters = [
    { name: "Rick Sanchez", species: "Human", status: "Alive", origin: { name: "Earth" } },
    { name: "Morty Smith", species: "Human", status: "Alive", origin: { name: "Earth" } },
    { name: "Birdperson", species: "Bird-Person", status: "Alive", origin: { name: "Bird World" } },
    { name: "Summer Smith", species: "Human", status: "Alive", origin: { name: "Earth" } },
    { name: "Squanchy", species: "Cat-Person", status: "Alive", origin: { name: "Squanch" } },
];

const getLivingHumans = (characters: any[]) => characters.filter(c => c.species === "Human" && c.status === "Alive");
const getCharacterNames = (characters: any[]) => characters.map(c => c.name);
const getSpecialObjects = (characters: any[]) => characters.map(c => ({ name: c.name, origin: c.origin.name }));

console.log("Living Humans:", getLivingHumans(rickMortyCharacters));
console.log("Character Names:", getCharacterNames(rickMortyCharacters));
console.log("Special Objects:", getSpecialObjects(rickMortyCharacters));
