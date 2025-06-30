import { Product } from '@/types';
import { create } from 'zustand';

interface ProductState {
    // Product List
    products: Product[];
    setProducts: (products: Product[]) => void;

    // Detail Product
    selectedProduct: Product | null;
    setSelectedProduct: (product: Product | null) => void;

    // Loading
    isLoading: boolean;
    setIsLoading: (loading: boolean) => void;

    // Error
    error: string | null;
    setError: (error: string | null) => void;
}

export const useProductStore = create<ProductState>((set) => ({
    // Product List
    products: [],
    setProducts: (products) => set({ products }),

    // Detail Product
    selectedProduct: null,
    setSelectedProduct: (product: Product | null) => set({ selectedProduct: product }),

    // Loading
    isLoading: false,
    setIsLoading: (loading) => set({ isLoading: loading }),

    // Error
    error: null,
    setError: (error) => set({ error }),
}));
