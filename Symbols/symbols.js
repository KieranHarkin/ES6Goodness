//Symbols prevent name clashes and are each unique

const kieran = Symbol('Kieran');
const person = Symbol('Kieran');

const classRoom = {
    [Symbol('Mark')]: {grade: 50, gender: 'male'},
    [Symbol('olivia')]: {grade: 80, gender: 'female'},
    [Symbol('olivia')]: {grade: 80, gender: 'female'}
};

for(person in classRoom) {
    console.log(person);
}

const symbols = Object.getOwnPropertySymbols(classRoom);
const data = symbols.map(sym => classRoom[sym]);
console.log(data);
