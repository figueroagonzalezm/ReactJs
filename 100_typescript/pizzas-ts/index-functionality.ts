// this code can be executed in terminal using the command: npx tsx index.ts

/**
 * Represents a pizza menu item with unique identifier, name, and price.
 */
type Pizza = {
    id: number
    name: string
    price: number
}

/**
 * Represents a customer order containing a pizza and its fulfillment status.
 */
type Order = {
    id: number
    pizza: Pizza
    status: "ordered" | "completed"
}


let cashInRegister = 100
let nextOrderId = 1
let nextPizzaId = 1

const menu: Pizza[] = [
    { id: nextPizzaId++, name: "Margherita", price: 8 },
    { id: nextPizzaId++, name: "Pepperoni", price: 10 },
    { id: nextPizzaId++, name: "Hawaiian", price: 10 },
    { id: nextPizzaId++, name: "Veggie", price: 9 },
]

const orderQueue: Order[] = []

/**
 * Adds a new pizza to the menu with auto-generated ID.
 * @param pizzaObj - Pizza details (name and price)
 * @returns The newly created pizza with assigned ID
 */
function addNewPizza(pizzaObj: Omit<Pizza, "id">): Pizza {
    const newPizza: Pizza = {
        id: nextPizzaId++,
        ...pizzaObj
    }
    menu.push(newPizza)
    return newPizza
}

addNewPizza({ name: "Chicken Bacon Ranch", price: 12 })
addNewPizza({ name: "BBQ Chicken", price: 12 })
addNewPizza({ name: "Spicy Sausage", price: 11 })


/**
 * Places an order for a pizza by name, adds payment to register, and queues the order.
 * @param pizzaName - Name of the pizza to order
 * @returns The created order, or undefined if pizza not found
 */
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

/**
 * Marks an order as completed by order ID.
 * @param orderId - ID of the order to complete
 * @returns The completed order, or undefined if not found
 */
function completeOrder(orderId: number): Order | undefined {
    const order = orderQueue.find(order => order.id === orderId)
    if (!order) {
        console.error(`${orderId} was not found in the orderQueue`)
        return
    }
    order.status = "completed"
    return order
}

/**
 * Retrieves pizza details by name (case-insensitive) or ID.
 * @param identifier - Pizza name or ID
 * @returns The matching pizza, or undefined if not found
 * @throws TypeError if identifier is neither string nor number
 */
export function getPizzaDetail(identifier: string | number): Pizza | undefined {
    if (typeof identifier === "string") {
        return menu.find(pizza => pizza.name.toLowerCase() === identifier.toLowerCase())
    } else if (typeof identifier === "number") {
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


/**
 * Generic utility function demonstrating TypeScript generics.
 * Adds an item to an array with type safety.
 * @param array - Target array
 * @param item - Item to add
 * @returns The modified array
 */
function addToArray<T>(array: T[], item: T): T[] {
    array.push(item)
    return array
}

addToArray<Pizza>(menu, { id: nextPizzaId++, name: "Chicken Bacon Ranch", price: 12 })
addToArray<Order>(orderQueue, { id: nextOrderId++, pizza: menu[2], status: "completed" })
//----------------------------------------

