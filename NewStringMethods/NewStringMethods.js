

const flightNumber = 'AB123';
const accountNumber = '7838302BT0001';

const make = 'BMW';
const model = 'x5';
const colour = 'Royal Blue';

const leftPad = (str, length = 20) => {
    return `${' '.repeat(length - str.length)}${str}`;
}

// .startsWith()
console.log(flightNumber.startsWith('AB'));
console.log(flightNumber.startsWith('B1', 1));

// .endsWith()
console.log(accountNumber.endsWith('BT0001'));
console.log(accountNumber.endsWith('BT', 9));

// .includes()
console.log(colour.includes('Blue'));

// .repeat()
console.log(make.repeat(5));
console.log(leftPad(make));
console.log(leftPad(model));
console.log(leftPad(colour));

