const names = ['Jane', 'Bob', 'Rammy'];

console.log(names);

const fullnames = names.map(function(name) {
    return `${name} Doherty`;
});

console.log(fullnames);

// first we replace callback function with arrow function
const fullnames2 = names.map((name) => {
    return `${name} Doherty`;
});

console.log(fullnames2);

// If single parameter () not needed
const fullnames3 = names.map(name => {
    return `${name} Doherty`;
});

console.log(fullnames3);

// implicit return
const fullnames4 = names.map(name => `${name} Doherty`);
console.log(fullnames4);

// no params requires empty ()
const noNames = names.map(() => 'no name Doherty');
console.log(noNames);

// assign anonymous function to variable
const sayName = (name) => `${name}`;
console.log(sayName('Kieran'));

const race = '100m Dash';
const winners = ['Ronaldo', 'Messi', 'Neymar'];

// with arrow function to return implicity return object wrap in ()
// if key : value the same it can be inferred, see race in object
const win = winners.map((winner, i) => ({name: winner, race, place: i + 1}));
console.log(win);

const ages = [23, 60, 62, 40, 77, 81, 30];
const above60 = ages.filter(age => age > 60);
console.log(above60);