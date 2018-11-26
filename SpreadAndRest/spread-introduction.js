const featured = ['Deep Dish', 'Peperoni', 'Hawaiian'];
const specialty = ['Meatzza', 'Spicy Mama', 'Yellow Pages'];

const deepDish = {
    pizzaName: 'Deep Dish',
    size: 'Medium',
    ingredients: ['Marinara', 'Italian Sausage', 'Dough', 'Cheese']
};

const pizzas = [...featured, 'veg', ...specialty];

// Copy rather than reference
const fridayPizzas = [...pizzas]; 

console.log(pizza);