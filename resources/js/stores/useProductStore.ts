import { ProductData, ProductList } from '@/types';
import { create } from 'zustand';

interface ProductState {
    // Product List
    products: ProductList;
    setProducts: (products: ProductList) => void;

    // Detail Product
    selectedProduct: ProductData | null;
    setSelectedProduct: (product: ProductData | null) => void;

    // Error
    error: string | null;
    setError: (error: string | null) => void;
}

export const useProductStore = create<ProductState>((set) => ({
    // Product List
    products: {
        data: [],
        total: 0,
    },
    setProducts: (products: ProductList) => set({ products }),

    // Detail Product
    selectedProduct: null,
    setSelectedProduct: (product: ProductData | null) => set({ selectedProduct: product }),

    // Error
    error: null,
    setError: (error) => set({ error }),
}));
