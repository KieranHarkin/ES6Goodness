const players = ['Ronaldo', 'Messi', 'Neymar', 'Harkin'];

const consoleLog = (dataTolog) => console.log(dataTolog);

for (const player of players) {
    consoleLog(player);
}

// What if we need the index as well as the values?
// We can do this
for (const [i, player] of players.entries()) {
    consoleLog(i);
    consoleLog(player);
}

function addUpNumbers() {
    let total = 0;
    for (const num of arguments) {
        total += num;
    }
    consoleLog(total);
    return total;
}

addUpNumbers(1,1, 20);

// Using with Objects!!

const apple = {
    color: 'Red',
    size: 'Medium',
    weight: 50,
    sugar: 10
};

for(const prop of Object.keys(apple)) {
    const value = apple[prop]
    consoleLog(value);
}