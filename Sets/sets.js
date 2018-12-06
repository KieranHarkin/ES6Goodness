const people = new Set();
people.add('Ronaldo');
people.add('Messi');
people.add('Neymar');

for(const person of people) {
    console.log(person);
}

const dogs = ['snickers', 'sunny'];
const dogSet = new Set(dogs);

console.log(dogSet);