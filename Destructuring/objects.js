const person = {
    first: 'Kieran',
    last: 'Harkin',
    country: 'Ireland',
    city: 'Derry'
};

// const first = person.first;
// const last = person.last;

// console.log(`First = ${first} Last = ${last}`);

// With destructuring 
const { first, last } = person;

console.log(`Destructuring First = ${first} Last = ${last}`);

// Nested data
const Kieran = {
    first: 'Kieran',
    last: 'Harkin',
    links: {
        social: {
            twitter: 'twitter link',
            facebook: 'facebook link'
        },
        web: {
            blog: 'blog link'
        }
    }
}

const { twitter, facebook } = Kieran.links.social;
console.log(`Twitter: ${twitter} Facebook: ${facebook}`);

// Rename variables
const {first: firstName, last: lastName} = Kieran;
console.log(`First Name = ${firstName} - Last Name: ${lastName}`)

// Default values
const settings = { width: 300, color: 'black'};
const { width = 100, height = 100, color = 'blue', fontSize = 10 } = settings;
console.log(`Width = ${width} - height = ${height} - color = ${color} - Font Size = ${fontSize}`)

// object destructuring with varaible renaming & default values
const { width: w = 400, height: h = 500 } = {width: 800};
console.log(`Width = ${w} - Height = ${h}`);