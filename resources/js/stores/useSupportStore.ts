import { Faq } from '@/types';
import { create } from 'zustand';

interface SupportState {
    // Faq List
    faqs: Faq[];
    setFaqs: (faqs: Faq[]) => void;
}

export const useSupportStore = create<SupportState>((set) => ({
    // Faq List
    faqs: [],
    setFaqs: (faqs: Faq[]) => set({ faqs }),
}));
