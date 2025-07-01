import { Category } from '@/types';
import { create } from 'zustand';

interface CategoryState {
    // Category List
    categories: Category[];
    setCategories: (categories: Category[]) => void;

    // Category Detail

    // Loading
    isLoading: boolean;
    setIsLoading: (loading: boolean) => void;

    // Error
    error: string | null;
    setError: (error: string | null) => void;
}

export const useCategoryStore = create<CategoryState>((set) => ({
    // Category List
    categories: [],
    setCategories: (categories) => set({ categories }),

    // Category Detail
    // Loading
    isLoading: false,
    setIsLoading: (loading) => set({ isLoading: loading }),

    // Error
    error: null,
    setError: (error) => set({ error }),
}));
