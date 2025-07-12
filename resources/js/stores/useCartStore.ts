import { create } from 'zustand';

interface CartItem {
    id: number;
    thumbnail: string;
    name: string;
    price: number;
    quantity: number;
}

interface CartState {
    items: CartItem[];
    addItem: (item: CartItem) => void;
    removeItem: (id: number) => void;
    updateQuantity: (id: number, quantity: number) => void;
    clearCart: () => void;
    totalItems: () => number;
    totalPrice: () => number;
}

export const useCartStore = create<CartState>((set, get) => ({
    items: [],

    addItem: (item) =>
        set((state) => {
            const existing = state.items.find((i) => i.id === item.id);
            if (existing) {
                // update quantity kalau item sudah ada
                return {
                    items: state.items.map((i) => (i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i)),
                };
            } else {
                return { items: [...state.items, item] };
            }
        }),

    removeItem: (id) =>
        set((state) => ({
            items: state.items.filter((item) => item.id !== id),
        })),

    updateQuantity: (id, quantity) =>
        set((state) => ({
            items: state.items.map((item) => (item.id === id ? { ...item, quantity } : item)),
        })),

    clearCart: () => set({ items: [] }),

    totalItems: () => get().items.reduce((sum, item) => sum + item.quantity, 0),

    totalPrice: () => get().items.reduce((sum, item) => sum + item.price * item.quantity, 0),
}));
