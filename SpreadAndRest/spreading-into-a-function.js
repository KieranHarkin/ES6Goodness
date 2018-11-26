const players = ['Ronaldo', 'Messi', 'Neymar'];
const newPlayers = ['Hazard', 'Sane'];
players.push(...newPlayers);

console.log(players);

const sayHi = (first, last) => `Hey there ${first} ${last}`;

const name = ['Kieran', 'Harkin'];
console.log(sayHi(...name));
