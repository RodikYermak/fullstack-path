// const menu = [
//     { name: 'Margherita', price: 8 },
//     { name: 'Pepperoni', price: 10 },
//     { name: 'Hawaiian', price: 10 },
//     { name: 'Veggie', price: 9 },
// ];

// let cashInRegister = 100;
// let nextOrderId = 1;
// const orderQueue = [];

// function addNewPizza(pizzaObj) {
//     menu.push(pizzaObj);
// }

// function placeOrder(pizzaName) {
//     const selectedPizza = menu.find((pizzaObj) => pizzaObj.name === pizzaName);
//     cashInRegister += selectedPizza.price;
//     const newOrder = { id: nextOrderId++, pizza: selectedPizza, status: 'ordered' };
//     orderQueue.push(newOrder);
//     return newOrder;
// }

// function completeOrder(orderId) {
//     const order = orderQueue.find((order) => order.id === orderId);
//     order.status = 'completed';
//     return order;
// }

// addNewPizza({ name: 'Chicken Bacon Ranch', cost: 12 });
// addNewPizza({ name: 'BBQ Chicken', cost: 12 });
// addNewPizza({ name: 'Spicy Sausage', cost: 11 });

// placeOrder('Chicken Bacon Ranch');
// completeOrder('1');

// console.log('Menu:', menu);
// console.log('Cash in register:', cashInRegister);
// console.log('Order queue:', orderQueue);

// let myName: string = "Bob"
// // Primitive Data Types: string, number, boolean
// // Challenge: Explicitly type the variables below:

// let numberOfWheels: number = 4
// let isStudent: boolean  = false
// const menu = [
//     { name: 'Margherita', price: 8 },
//     { name: 'Pepperoni', price: 10 },
//     { name: 'Hawaiian', price: 10 },
//     { name: 'Veggie', price: 9 },
// ];

// let cashInRegister = 100;
// let nextOrderId = 1;
// const orderQueue = [];

// function addNewPizza(pizzaObj) {
//     menu.push(pizzaObj);
// }

// function placeOrder(pizzaName) {
//     const selectedPizza = menu.find((pizzaObj) => pizzaObj.name === pizzaName);
//     if (!selectedPizza) {
//         console.error(`${pizzaName} does not exist in the menu`);
//         return;
//     }
//     cashInRegister += selectedPizza.price;
//     const newOrder = { id: nextOrderId++, pizza: selectedPizza, status: 'ordered' };
//     orderQueue.push(newOrder);
//     return newOrder;
// }

// /**
//  * Challenge: Teach TS what data type should be used for the
//  * orderId in the completeOrder function. Then check for any
//  * additional warnings TS comes up with and fix those.
//  */

// function completeOrder(orderId: number) {
//     const order = orderQueue.find((order) => order.id === orderId);
//     order.status = 'completed';
//     return order;
// }

// addNewPizza({ name: 'Chicken Bacon Ranch', cost: 12 });
// addNewPizza({ name: 'BBQ Chicken', cost: 12 });
// addNewPizza({ name: 'Spicy Sausage', cost: 11 });

// placeOrder('Chicken Bacon Ranch');
// completeOrder(1);

// console.log('Menu:', menu);
// console.log('Cash in register:', cashInRegister);
// console.log('Order queue:', orderQueue);

// Challenge: finish the object type definition

// type Person = {
//     name: string;
//     age: number;
//     isStudent: boolean;
// };

// let person1 = {
//     name: 'Joe',
//     age: 42,
//     isStudent: true,
// };

// let person2 = {
//     name: 'Jill',
//     age: 66,
//     isStudent: false,
// };

/**
 * Challenge: Create a Pizza object type. It should include a `name`
 * and a `price` property.
 */
// type Pizza = {
//     name: string;
//     price: number;
// };

// const menu: Pizza[] = [
//     { name: 'Margherita', price: 8 },
//     { name: 'Pepperoni', price: 10 },
//     { name: 'Hawaiian', price: 10 },
//     { name: 'Veggie', price: 9 },
// ];

// let cashInRegister = 100;
// let nextOrderId = 1;
// const orderQueue = [];

// function addNewPizza(pizzaObj: Pizza) {
//     menu.push(pizzaObj);
// }

// function placeOrder(pizzaName) {
//     const selectedPizza = menu.find((pizzaObj) => pizzaObj.name === pizzaName);
//     if (!selectedPizza) {
//         console.error(`${pizzaName} does not exist in the menu`);
//         return;
//     }
//     cashInRegister += selectedPizza.price;
//     const newOrder = { id: nextOrderId++, pizza: selectedPizza, status: 'ordered' };
//     orderQueue.push(newOrder);
//     return newOrder;
// }

// function completeOrder(orderId: number) {
//     const order = orderQueue.find((order) => order.id === orderId);
//     order.status = 'completed';
//     return order;
// }

// addNewPizza({ name: 'Chicken Bacon Ranch', price: 12 });
// addNewPizza({ name: 'BBQ Chicken', price: 12 });
// addNewPizza({ name: 'Spicy Sausage', price: 11 });

// placeOrder('Chicken Bacon Ranch');
// completeOrder(1);

// console.log('Menu:', menu);
// console.log('Cash in register:', cashInRegister);
// console.log('Order queue:', orderQueue);

// Challenge: try to figure out how to move the nested address object type
// into a separate type definition. When done correctly, there should be no more
// red errors in the editor

// type Address = {
//     street: string;
//     city: string;
//     country: string;
// };

// type Person = {
//     name: string;
//     age: number;
//     isStudent: boolean;
//     address: Address;
// };

// let person1: Person = {
//     name: 'Joe',
//     age: 42,
//     isStudent: true,
//     address: {
//         street: '123 Main',
//         city: 'Anytown',
//         country: 'USA',
//     },
// };

// let person2: Person = {
//     name: 'Jill',
//     age: 66,
//     isStudent: false,
//     address: {
//         street: '123 Main',
//         city: 'Anytown',
//         country: 'USA',
//     },
// };

// type Pizza = {
//     name: string;
//     price: number;
// };

/**
 * Challenge: Add an Order type. It should have `id`, `pizza`, and `status` properties.
 * Look through the code if you need a reminder as to what data types those should be.
 */
// type Order = {
//     id: number;
//     pizza: {
//         name: string;
//         price: number;
//     };
//     status: string;
// };

// const menu = [
//     { name: 'Margherita', price: 8 },
//     { name: 'Pepperoni', price: 10 },
//     { name: 'Hawaiian', price: 10 },
//     { name: 'Veggie', price: 9 },
// ];

// let cashInRegister = 100;
// let nextOrderId = 1;
// const orderQueue: Order[] = [];

// function addNewPizza(pizzaObj: Pizza) {
//     menu.push(pizzaObj);
// }

// function placeOrder(pizzaName: string) {
//     const selectedPizza = menu.find((pizzaObj) => pizzaObj.name === pizzaName);
//     if (!selectedPizza) {
//         console.error(`${pizzaName} does not exist in the menu`);
//         return;
//     }
//     cashInRegister += selectedPizza.price;
//     const newOrder = { id: nextOrderId++, pizza: selectedPizza, status: 'ordered' };
//     orderQueue.push(newOrder);
//     return newOrder;
// }

// function completeOrder(orderId: number) {
//     const order = orderQueue.find((order) => order.id === orderId);
//     order.status = 'completed';
//     return order;
// }

// addNewPizza({ name: 'Chicken Bacon Ranch', price: 12 });
// addNewPizza({ name: 'BBQ Chicken', price: 12 });
// addNewPizza({ name: 'Spicy Sausage', price: 11 });

// placeOrder('Chicken Bacon Ranch');
// completeOrder(1);

// console.log('Menu:', menu);
// console.log('Cash in register:', cashInRegister);
// console.log('Order queue:', orderQueue);

// type Person = {
//     name: string;
//     age: number;
//     isStudent: boolean;
// };

// let person1: Person = {
//     name: 'Joe',
//     age: 42,
//     isStudent: true,
// };

// let person2: Person = {
//     name: 'Jill',
//     age: 66,
//     isStudent: false,
// };

// /**
//  * Challenge: create an array of people objects and
//  * manually type it as an array of Person types
//  */

// let people: Person[] = [
//     { name: 'Joe', age: 42, isStudent: true },
//     { name: 'Jill', age: 66, isStudent: false },
//     { name: 'Sam', age: 25, isStudent: true },
// ];

/**
 * Challenge: Fix the TS warnings about orderQueue!
 */

type Pizza = {
    id: number;
    name: string;
    price: number;
};

type Order = {
    id: number;
    pizza: Pizza;
    status: 'ordered' | 'completed';
};

let cashInRegister = 100;
let nextOrderId = 1;
let nextPizzaId = 1;

const menu: Pizza[] = [
    { id: nextPizzaId++, name: 'Margherita', price: 8 },
    { id: nextPizzaId++, name: 'Pepperoni', price: 10 },
    { id: nextPizzaId++, name: 'Hawaiian', price: 10 },
    { id: nextPizzaId++, name: 'Veggie', price: 9 },
];

const orderQueue: Order[] = [];

/**
 * Challenge:
 * Fix the addNewPizza function using the Omit utility type. This might
 * require more than just changing the "Pizza" typed `pizzaObj` parameter.
 * Return the new pizza object (with the id added) from the function.
 */

function addNewPizza(pizzaObj: Readonly<Omit<Pizza, 'id'>>): Pizza {
    const pizza: Pizza = { id: nextPizzaId++, ...pizzaObj };
    menu.push(pizza);
    return pizza;
}

addNewPizza({ name: 'Chicken Bacon Ranch', price: 12 });
addNewPizza({ name: 'BBQ Chicken', price: 12 });
addNewPizza({ name: 'Spicy Sausage', price: 11 });

function placeOrder(pizzaName: string): Order | undefined {
    const selectedPizza = menu.find((pizzaObj) => pizzaObj.name === pizzaName);
    if (!selectedPizza) {
        console.error(`${pizzaName} does not exist in the menu`);
        return;
    }
    cashInRegister += selectedPizza.price;
    const newOrder: Order = { id: nextOrderId++, pizza: selectedPizza, status: 'ordered' };
    orderQueue.push(newOrder);
    return newOrder;
}

function completeOrder(orderId: number): Order | undefined {
    const order = orderQueue.find((order) => order.id === orderId);
    if (!order) {
        console.error(`${orderId} was not found in the orderQueue`);
        return;
    }
    order.status = 'completed';
    return order;
}

export function getPizzaDetail(identifier: string | number): Pizza | undefined {
    if (typeof identifier === 'string') {
        return menu.find((pizza) => pizza.name.toLowerCase() === identifier.toLowerCase());
    } else if (typeof identifier === 'number') {
        return menu.find((pizza) => pizza.id === identifier);
    } else {
        throw new TypeError('Parameter `identifier` must be either a string or a number');
    }
}

// placeOrder("Chicken Bacon Ranch")
// placeOrder("Pepperoni")
// completeOrder(1)
// placeOrder("Veggie")
// completeOrder(2)

console.log('Menu:', menu);
// console.log("Cash in register:", cashInRegister)
// console.log("Order queue:", orderQueue)
