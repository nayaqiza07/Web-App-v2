import { Category } from '@/types';
import { create } from 'zustand';

interface CategoryState {
    // Category List
    categories: Category[];
    setCategories: (categories: Category[]) => void;

    // Category Detail
    selectedCategory: Category | null;
    setSelectedCategory: (category: Category | null) => void;

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
    selectedCategory: null,
    setSelectedCategory: (category: Category | null) => set({ selectedCategory: category }),

    // Loading
    isLoading: false,
    setIsLoading: (loading) => set({ isLoading: loading }),

    // Error
    error: null,
    setError: (error) => set({ error }),
}));
