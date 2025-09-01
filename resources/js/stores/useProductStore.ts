import { ProductData, ProductList } from '@/types';
import { create } from 'zustand';

interface ProductState {
    // Product List
    products: ProductList;
    setProducts: (products: ProductList) => void;

    // Detail Product
    selectedProduct: ProductData | null;
    setSelectedProduct: (product: ProductData | null) => void;

    relatedProducts: ProductData[];
    setRelatedProducts: (relatedProducts: ProductData[]) => void;

    featuredProducts: ProductData[];
    setFeaturedProducts: (featuredProducts: ProductData[]) => void;
}

export const useProductStore = create<ProductState>((set) => ({
    // Product List
    products: {
        data: [],
        links: {
            first: '',
            last: '',
            next: '',
            prev: '',
        },
        meta: {
            current_page: 0,
            from: 0,
            last_page: 0,
            links: [{ url: '', label: '', active: false }],
            path: '',
            per_page: 0,
            to: 0,
            total: 0,
        },
    },
    setProducts: (products: ProductList) => set({ products }),

    // Detail Product
    selectedProduct: null,
    setSelectedProduct: (product: ProductData | null) => set({ selectedProduct: product }),

    relatedProducts: [],
    setRelatedProducts: (relatedProducts: ProductData[]) => set({ relatedProducts }),

    featuredProducts: [],
    setFeaturedProducts: (featuredProducts: ProductData[]) => set({ featuredProducts }),
}));
