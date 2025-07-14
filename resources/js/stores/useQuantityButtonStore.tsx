import { create } from 'zustand';

interface QuantityButtonState {
    quantity: number;
    setQuantity: (quantity: number) => void;
}

export const useQuantityButtonStore = create<QuantityButtonState>((set) => ({
    quantity: 1,
    setQuantity: (quantity) => set({ quantity }),
}));
