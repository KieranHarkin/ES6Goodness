
const details = ['Kieran Harkin', 123, 'ES6'];
const [name, id, topic] = details;
console.log(`Name = ${name}, id = ${id}, topic = ${topic}`);

const data = 'Football,Sports,12345,23';
const [itemName, category, sku, inventory] = data.split(',');
console.log(`Item Name = ${itemName}, Category = ${category}, SKU = ${sku}, Inventory = ${inventory}`);

const team = ['Ronalado', 'Messi', 'Neymar', 'Sane'];
const [captain, subCaptain, ...players] = team;
console.log(`Captain = ${captain}, Sub Captain = ${subCaptain}, Others = ${players}`);