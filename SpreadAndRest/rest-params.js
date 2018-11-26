const convertCurrency = (rate, ...amounts) => {
    return amounts.map(amount => amount * rate);
}

const amounts = convertCurrency(1.54, 10, 20, 30, 40);
console.log(amounts);

const runner = ['Kieran', 'Harkin', 123, 5.5, 5, 3, 6, 35];
const [name, id, ...runs] = runner;

console.log(`Name = ${name} id = ${id} Runs = ${runs}`);
