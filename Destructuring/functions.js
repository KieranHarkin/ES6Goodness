const convertCurrency = (amount) => {
    const converted = {
        USD: amount * 0.76,
        GPB: amount * 0.53,
        AUD: amount * 1.01,
        MEX: amount * 13.30
    };

    return converted;
}

const printOut = (obj) => console.log(obj);


const { USD, GPB, AUD, MEX } = convertCurrency(100);

printOut(USD);
printOut(GPB);
printOut(AUD);
printOut(MEX);

const tipCalculator = ({total = 100, tip = 0.15, tax = 0.13} = {}) => {
    return total * (tip * total) + (tax * total);
}

const bill = tipCalculator({total: 200, tip: 0.10});
console.log(bill);

const billTwo = tipCalculator();
console.log(billTwo);