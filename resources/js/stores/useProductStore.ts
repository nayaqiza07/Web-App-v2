import { ProductData, ProductList } from '@/types';
import { create } from 'zustand';

interface ProductState {
    // Product List
    products: ProductList;
    setProducts: (products: ProductList) => void;

    // Detail Product
    selectedProduct: ProductData | null;
    setSelectedProduct: (product: ProductData | null) => void;
}

export const useProductStore = create<ProductState>((set) => ({
    // Product List
    products: {
        current_page: 0,
        data: [],
        first_page_url: '',
        from: 0,
        last_page: 0,
        last_page_url: '',
        links: [{ url: '', label: '', active: false }],
        next_page_url: '',
        path: '',
        per_page: 0,
        prev_page_url: '',
        to: 0,
        total: 0,
    },
    setProducts: (products: ProductList) => set({ products }),

    // Detail Product
    selectedProduct: null,
    setSelectedProduct: (product: ProductData | null) => set({ selectedProduct: product }),
}));
