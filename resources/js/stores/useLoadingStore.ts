import { create } from 'zustand';

interface LoadingState {
    isLoading: boolean;
    setIsLoading: (loading: boolean) => void;

    nextComponent: string | null;
    setNextComponent: (component: string | null) => void;
}

export const useLoadingStore = create<LoadingState>((set) => ({
    isLoading: false,
    setIsLoading: (loading) => set({ isLoading: loading }),

    nextComponent: null,
    setNextComponent: (component) => set({ nextComponent: component }),
}));
