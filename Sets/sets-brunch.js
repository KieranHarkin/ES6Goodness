const brunch = new Set();
// as people start coming in
brunch.add('Daniel');
brunch.add('Jonas');
brunch.add('Claragh');

// ready to open
const line = brunch.values();
console.log(line.next().value);
console.log(line.next().value);
console.log(line.next().value);
brunch.add('Snickers');