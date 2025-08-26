import { CartItemsType, UserAddressType } from '@/types';
import { create } from 'zustand';

interface CartState {
    cartItems: CartItemsType;
    setCartItems: (cartItems: CartItemsType) => void;

    userAddress: UserAddressType;
    setUserAddress: (userAddress: UserAddressType) => void;
}

export const useCartStore = create<CartState>((set) => ({
    cartItems: {
        items: [],
        total_items: 0,
    },
    setCartItems: (cartItems: CartItemsType) => set({ cartItems }),

    userAddress: {
        country: '',
        state: '',
        city: '',
        street: '',
        postal_code: '',
    },
    setUserAddress: (userAddress: UserAddressType) => set({ userAddress }),
}));
