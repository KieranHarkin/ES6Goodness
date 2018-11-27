const first = 'Wolfgang';
const last = 'Harkin';
const age = 2;
const breed = 'German Shepherd';

const dog = {
    first : first,
    last: last,
    age: age,
    breed : breed
};

console.log(dog);

// we can do this instead
const dog2 = {
    first,
    last,
    age,
    breed
};

console.log(dog2);

const modal = {
    create: function() {

    },
    open: function() {

    },
    close: function() {

    }
}

// Can do this instead
const modal2 = {
    create(selector) {

    },
    open(content) {

    },
    close(goodbye) {

    }
}

const invertColour = colour => {
    return '#' + ("000000" + (0xFFFFFF ^ parseInt(colour.substring(1), 16)).toString(16)).slice(-6);
}

// computed property names

const key = 'pocketColour';
const value = '#ffc600';

const tShirt = {
    [key]: value,
    [`${key}Opposite`]: invertColour(value)
};

console.log(tShirt);

const keys = ['shirt', 'size', 'colour'];
const values = ['short sleeve', 'medium', 'red'];

const shirt = {
    [keys.shift()] : values.shift(),
    [keys.shift()] : values.shift(),
    [keys.shift()] : values.shift()
};

console.log(shirt);