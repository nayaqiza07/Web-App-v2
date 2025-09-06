import { OrderDataType } from '@/types';
import { create } from 'zustand';

interface OrderState {
    orders: OrderDataType[];
    setOrders: (orders: OrderDataType[]) => void;
}

export const useOrderStore = create<OrderState>((set) => ({
    orders: [],
    setOrders: (orders) => set({ orders }),
}));
