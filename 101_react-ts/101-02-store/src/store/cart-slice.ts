import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type CartItem = {
    id: string;
    title: string;
    price: number;
    quantity: number;
};

export type NewItem = Omit<CartItem, "quantity">;


type CartState = {
    items: CartItem[];
}

const initialState: CartState = {
    items: [],
};

export const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        addToCart(state,
            action: PayloadAction<{ id: string; title: string; price: number }>) {
            const newItem = action.payload;
            const itemIndex = state.items.findIndex(item => item.id === newItem.id);
            if (itemIndex >= 0) {
                state.items[itemIndex].quantity++;
            } else {
                state.items.push({ ...newItem, quantity: 1 });
            }
        },
        removeFromCart(state, action: PayloadAction<string>) {
            const itemId = action.payload;
            const itemIndex = state.items.findIndex(item => item.id === itemId);

            if (itemIndex >= 0) {
                if (state.items[itemIndex].quantity > 1) {
                    state.items[itemIndex].quantity--;
                } else {
                    state.items.splice(itemIndex, 1);
                }
            }
        }
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;