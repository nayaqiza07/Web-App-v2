import { Contact } from '@/types';
import { create } from 'zustand';

interface ContactState {
    // Contact List
    contacts: Contact[];
    setContacts: (contacts: Contact[]) => void;
}

export const useContactStore = create<ContactState>((set) => ({
    // Contact List
    contacts: [],
    setContacts: (contacts: Contact[]) => set({ contacts }),
}));
