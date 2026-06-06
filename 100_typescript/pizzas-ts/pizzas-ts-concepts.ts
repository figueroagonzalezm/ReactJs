// this code can be executed in terminal using the command: npx tsx index.ts

// Type Alias: creates a reusable custom type definition
type Pizza = {
    id: number
    name: string
    price: number
}

// Type Alias with Union Type: "ordered" | "completed" restricts status to specific string literals
type Order = {
    id: number
    pizza: Pizza  // Type reference: using another custom type
    status: "ordered" | "completed"  // Union type with string literals
}


let cashInRegister = 100
let nextOrderId = 1
let nextPizzaId = 1

// Type annotation: explicitly typing an array of Pizza objects
const menu: Pizza[] = [
    { id: nextPizzaId++, name: "Margherita", price: 8 },
    { id: nextPizzaId++, name: "Pepperoni", price: 10 },
    { id: nextPizzaId++, name: "Hawaiian", price: 10 },
    { id: nextPizzaId++, name: "Veggie", price: 9 },
]

// Array type annotation with empty initialization
const orderQueue: Order[] = []

// Utility type Omit: excludes 'id' property from Pizza type
function addNewPizza(pizzaObj: Omit<Pizza, "id">): Pizza {
    const newPizza: Pizza = {
        id: nextPizzaId++,
        ...pizzaObj  // Spread operator: copies properties from pizzaObj
    }
    menu.push(newPizza)
    return newPizza
}

addNewPizza({ name: "Chicken Bacon Ranch", price: 12 })
addNewPizza({ name: "BBQ Chicken", price: 12 })
addNewPizza({ name: "Spicy Sausage", price: 11 })


// Union type with undefined: function may return Order or undefined
function placeOrder(pizzaName: string): Order | undefined {
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName)
    if (!selectedPizza) {
        console.error(`${pizzaName} does not exist in the menu`)
        return
    }
    cashInRegister += selectedPizza.price
    const newOrder: Order = { id: nextOrderId++, pizza: selectedPizza, status: "ordered" }
    orderQueue.push(newOrder)
    return newOrder
}

function completeOrder(orderId: number): Order | undefined {
    const order = orderQueue.find(order => order.id === orderId)
    if (!order) {
        console.error(`${orderId} was not found in the orderQueue`)
        return
    }
    order.status = "completed"
    return order
}

// Union type parameter: accepts string OR number
export function getPizzaDetail(identifier: string | number): Pizza | undefined {
    if (typeof identifier === "string") {  // Type guard: narrowing type with typeof
        return menu.find(pizza => pizza.name.toLowerCase() === identifier.toLowerCase())
    } else if (typeof identifier === "number") {  // Type narrowing in else-if
        return menu.find(pizza => pizza.id === identifier)
    } else {
        throw new TypeError("Parameter `identifier` must be either a string or a number")
    }
}


placeOrder("Chicken Bacon Ranch")
placeOrder("Pepperoni")
completeOrder(1)
placeOrder("Veggie")
completeOrder(2)

console.log("Menu:", menu)
console.log("Cash in register:", cashInRegister)
console.log("Order queue:", orderQueue)


//This method and block of code is just to demonstrate the use of generics in TypeScript.
// It is not used anywhere else in the codebase, but it can be useful for future extensions or modifications.
// Generic function: <T> creates a type parameter for type-safe, reusable code
function addToArray<T>(array: T[], item: T): T[] {
    array.push(item)
    return array
}

// Generic type argument: explicitly specifying T=Pizza
addToArray<Pizza>(menu, { id: nextPizzaId++, name: "Chicken Bacon Ranch", price: 12 })
// Generic type argument: explicitly specifying T=Order
addToArray<Order>(orderQueue, { id: nextOrderId++, pizza: menu[2], status: "completed" })
//----------------------------------------

